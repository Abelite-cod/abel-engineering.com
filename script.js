// Scroll active nav
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (scrollY >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href").includes(current)
    );
  });
});

// Projects (STATIC — GitHub Pages safe)
const projects = [
  {
    title: "AI Vision Dashboard",
    desc: "Real-time object detection dashboard using YOLOv8.",
    img: "assets/project-ai-dashboard.png"
  },
  {
    title: "Brain Tumor Detection",
    desc: "YOLOv8-based MRI brain tumor detection system.",
    img: "assets/project-brain-tumor.png"
  },
  {
    title: "Gym Rep Counter",
    desc: "Computer vision-powered exercise rep counter.",
    img: "assets/project-gym-counter.png"
  }
];

const container = document.getElementById("projects");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}" style="width:100%;border-radius:8px;margin-bottom:12px">
    <h4>${p.title}</h4>
    <p>${p.desc}</p>
  `;
  container.appendChild(card);
});
