const { getStats } = require('./github-stats');
const { generateReadme } = require('./readme-generator');
const fs = require('fs');

const USERNAME = process.env.GITHUB_USER || 'itsyezzy';

async function main() {
  console.log('🐰 Bunny começou a caça...');
  console.log(`🎯 Alvo: @${USERNAME}`);
  
  try {
    const stats = await getStats(USERNAME);
    console.log('📊 Dados coletados com sucesso!');
    
    const readme = generateReadme(stats);
    fs.writeFileSync('README.md', readme);
    
    console.log('✅ README atualizado com sucesso!');
    console.log(`📝 Commits: ${stats.totalCommits}`);
    console.log(`🔥 PRs: ${stats.prs}`);
    console.log(`💻 Top Lang: ${stats.topLang}`);
  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
}

main();