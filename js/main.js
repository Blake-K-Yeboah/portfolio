// Navbar Scroll Effect
window.addEventListener("scroll", () => {
   const scrollTop = window.pageYOffset;

   const navbar = document.querySelector("#navbar");

   if (window.innerWidth > 728) {
      if (scrollTop >= 100) {
         navbar.classList.add("contract");
      } else {
         navbar.classList.remove("contract");
      }
   }
});

// GSAP Load In Animations
gsap.from(".navbar", { opacity: 0, duration: 0.75, y: -100 });
gsap.from(".anim1", {
   opacity: 0,
   duration: 1,
   stagger: 0.3,
   y: -30,
   delay: 0.75,
});

// Navigation Links Scroll Animation
document.querySelectorAll(".nav-link").forEach((link) => {
   link.addEventListener("click", () => {
      gsap.to(window, {
         duration: 0.75,
         scrollTo: { y: link.getAttribute("data-section"), offsetY: 50 },
         ease: "power1",
      });
   });
});

// Scroll To Projects Event Listener
document.querySelector(".scroll-down-btn").addEventListener("click", () => {
   gsap.to(window, {
      duration: 0.75,
      scrollTo: { y: "#projects", offsetY: 50 },
      ease: "power1",
   });
   gsap.from(".section-title", {
      duration: 0.5,
      opacity: 0,
      y: -50,
      delay: 0.35,
   });
   gsap.from(".section-sub-text", {
      duration: 0.5,
      opacity: 0,
      y: -50,
      delay: 0.5,
   });
   gsap.from(".slide-right", {
      duration: 1,
      opacity: 0,
      x: -150,
      delay: 0.5,
   });
   gsap.from(".slide-left", {
      duration: 1,
      opacity: 0,
      x: 150,
      delay: 0.5,
   });
});
