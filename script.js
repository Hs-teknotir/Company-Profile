// ==== script.js: Interaktivitas Ultra Premium Dewa 2025 FINAL STABIL ====

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const hero = document.querySelector(".hero");

  // ==== Menu Responsif Super Presisi ====
  toggle?.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // ==== Hero Interaktif: Gradien Bergerak ====
  if (hero) {
    hero.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      hero.style.setProperty("--x", `${x}%`);
      hero.style.setProperty("--y", `${y}%`);
    });
  }

  // ==== Scroll Animasi: Fade Masuk Lembut ====
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((el) => observer.observe(el));

  // ==== Smooth Scroll + Auto-Close Nav Mobile ====
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        if (nav?.classList.contains("active")) {
          nav.classList.remove("active");
          toggle?.classList.remove("active");
          document.body.classList.remove("no-scroll");
        }
      }
    });
  });

  // ==== Dark Mode Otomatis ====
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }

  // ==== Lucide Icons Auto Load ====
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  } else {
    console.warn("[Lucide] Ikon gagal dimuat. Periksa script lucide.js.");
  }

  // ==== Form Submit: Cek Jika Ada Form ====
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name && email && message) {
        form.reset();
        showSuccessToast("Pesan Anda berhasil dikirim!");
      }
    });
  }
});

// ==== Notifikasi Sukses Ultra Elegan ====
function showSuccessToast(message = "Aksi berhasil dilakukan!") {
  const toast = document.createElement("div");
  toast.className = "toast-success";
  toast.innerHTML = `
    <div class="toast-icon" data-lucide="check-circle"></div>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);
  window.lucide?.createIcons({
    icons: ["check-circle"],
    attr: { class: "lucide" },
  });

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}
