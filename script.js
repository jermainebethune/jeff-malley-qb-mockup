const paymentLinks = {
  "Film Focus": "https://buy.stripe.com/test_replace_film_focus",
  "QB Builder": "https://buy.stripe.com/test_replace_qb_builder",
  "Elite Prep Group": "https://buy.stripe.com/test_replace_elite_group"
};

const dialog = document.getElementById("paymentDialog");
const packageText = document.getElementById("packageText");
const goToCheckout = document.getElementById("goToCheckout");
const progress = document.querySelector(".scroll-progress");

let selectedLink = "";

document.querySelectorAll(".checkout-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const pkg = button.dataset.package;
    const price = button.dataset.price;
    selectedLink = paymentLinks[pkg] || "";
    packageText.textContent = `${pkg} | $${price}/month`;
    dialog.showModal();
  });
});

goToCheckout.addEventListener("click", () => {
  if (!selectedLink || selectedLink.includes("replace")) {
    alert("Add your real Stripe Payment Link in script.js before checkout.");
    return;
  }

  window.open(selectedLink, "_blank", "noopener,noreferrer");
  dialog.close();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
});

window.addEventListener(
  "scroll",
  () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  },
  { passive: true }
);
