// In-memory posts array
const posts = [
  {
    id: 1,
    title: "Benvenuto al mio blog",
    content: "Questo è il primo post del blog.",
    image: "/images/post1.svg",
    tags: ["intro", "benvenuto"],
  },
  {
    id: 2,
    title: "Secondo post",
    content: "Un piccolo aggiornamento sul progetto.",
    image: "/images/post2.svg",
    tags: ["aggiornamento"],
  },
  {
    id: 3,
    title: "Consigli di sviluppo",
    content: "Alcuni consigli utili per Node.js ed Express.",
    image: "/images/post3.svg",
    tags: ["node", "express", "consigli"],
  },
  {
    id: 4,
    title: "Immagini e asset statici",
    content: "Vediamo come servire le immagini con Express.",
    image: "/images/post4.svg",
    tags: ["static", "assets"],
  },
  {
    id: 5,
    title: "Ultime novità",
    content: "Piccole novità nel blog e roadmap.",
    image: "/images/post5.svg",
    tags: ["news", "roadmap"],
  },
];

module.exports = posts