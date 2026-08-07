const { getRandomQuote } = require('./bunny-quotes');

function generateReadme(stats) {
  let quote = getRandomQuote()
    .replace(/{hours}/g, Math.floor(stats.totalCommits / 30) + 1)
    .replace(/{prs}/g, stats.prs)
    .replace(/{issues}/g, stats.issues)
    .replace(/{lang}/g, stats.topLang)
    .replace(/{percent}/g, Math.min(Math.floor(Math.random() * 30 + 70), 99))
    .replace(/{streak}/g, Math.min(stats.totalCommits, 365));

  const now = new Date().toLocaleString('pt-BR', { 
    timeZone: 'America/Sao_Paulo' 
  });

  const gifs = [
    'https://tenor.com/btAbX3BSyer.gif',
    'https://tenor.com/kR6UDCXNEY.gif',
    'https://tenor.com/7D0fdITsLz.gif'
  ];
  const gif = gifs[Math.floor(Math.random() * gifs.length)];

  return `
# 🐰 Bunny Hunter

<p align="center">
  <img src="${gif}" width="300" />
</p>

> *"${quote}"*

---

## 📊 Estatísticas de Caça

| Métrica | Valor |
|---------|-------|
| 🏹 Commits (último ano) | ${stats.totalCommits} |
| 🔥 PRs abertos | ${stats.prs} |
| 🐛 Issues fechadas | ${stats.issues} |
| 💻 Linguagem favorita | ${stats.topLang} |

---

## 📈 Gráfico de Caça

![GitHub stats](https://github-readme-stats.vercel.app/api?username=itsyezzy&show_icons=true&theme=dark&hide_border=true)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=itsyezzy&layout=compact&theme=dark&hide_border=true)

---

## 🎯 Meta do Dia

\`\`\`
"Codar até o sol nascer. Ou até Bunny se cansar.
E Bunny NUNCA se cansa."
\`\`\`

---

<div align="center">
  <sub>
    🐰 *Última caça: ${now}* <br>
    *Bunny está sempre vigiando. 👁️‍🗨️*
  </sub>
</div>
  `.replace(/SEU_USER_AQUI/g, process.env.GITHUB_USER || 'seu-usuario');
}

module.exports = { generateReadme };