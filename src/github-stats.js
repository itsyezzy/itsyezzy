const fetch = require('node-fetch');

async function getStats(username) {
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
        repositories(first: 100) {
          nodes {
            languages(first: 5) {
              edges {
                size
                node { name }
              }
            }
          }
        }
        pullRequests(first: 50) { totalCount }
        issues(first: 50) { totalCount }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
  
  if (!data.data || !data.data.user) {
    throw new Error('Erro ao buscar dados: ' + JSON.stringify(data));
  }

  const user = data.data.user;
  
  const langCount = {};
  user.repositories.nodes.forEach(repo => {
    if (repo.languages && repo.languages.edges) {
      repo.languages.edges.forEach(({ node }) => {
        langCount[node.name] = (langCount[node.name] || 0) + 1;
      });
    }
  });
  
  const topLang = Object.keys(langCount).length > 0 
    ? Object.keys(langCount).reduce((a, b) => langCount[a] > langCount[b] ? a : b)
    : 'JavaScript';

  return {
    totalCommits: user.contributionsCollection.contributionCalendar.totalContributions || 0,
    prs: user.pullRequests.totalCount || 0,
    issues: user.issues.totalCount || 0,
    topLang: topLang
  };
}

module.exports = { getStats };