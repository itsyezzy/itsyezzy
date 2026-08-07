const quotes = [
  "Seus commits são fracos. Eu rastreio até seu café da manhã. 🐰",
  "Hoje você codou {hours}h. Ainda é pouco. Quero ver SANGUE!",
  "{prs} PRs abertos. O time treme. Bunny está vigiando.",
  "Você superou {percent}% dos devs hoje. Medíocre. Busque o topo.",
  "A linguagem do dia: {lang}. Boa escolha. Mas pode ser melhor.",
  "Seu streak: {streak} dias. Não pare. Bunny não para NUNCA.",
  "Issues fechadas: {issues}. Cada uma é uma presa abatida.",
  "Bunny vê tudo. Bunny sabe tudo. Seu próximo commit será PERFEITO.",
  "Você acha que codou muito hoje? Bunny já codou 3x mais. Acorde.",
  "Seus PRs são ridículos. Bunny vai te ensinar o que é código."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = { quotes, getRandomQuote };