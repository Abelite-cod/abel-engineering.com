// Scroll active nav
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
document.querySelectorAll('.bar div').forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = level + '%';
  });


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
    img: "assets/project-ai-dashboard.png",
    link: "projects/ai-vision-dashboard.html"
  },
  {
    title: "Brain Tumor Detection",
    desc: "YOLOv8-based MRI brain tumor detection system.",
    img: "assets/project-brain.jpg",
    link: "projects/brain-tumor-detection.html"
  },
  {
    title: "Gym Rep Counter",
    desc: "Computer vision-powered exercise rep counter.",
    img: "assets/project-gym.png",
    link: "projects/gym-rep-counter.html"
  }
];

const container = document.getElementById("projects");

projects.forEach(p => {
  const card = document.createElement("a");
  card.href = p.link;
  card.className = "card project-card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h4>${p.title}</h4>
    <p>${p.desc}</p>
    <span class="project-link">View project →</span>
  `;
  container.appendChild(card);
});
