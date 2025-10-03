(() => {
  async function loadSidebar() {
    const container = document.getElementById("sidebar-wrapper");
    if (!container) return;

    try {
      // Script elementini bul
      const scriptEl = document.currentScript || document.querySelector('script[src*="sidebar-loader.js"]');
      const params = new URLSearchParams(scriptEl?.src.split("?")[1] || "");
      const logoUrl = params.get("logo");

      const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri@ad45d69/sidebar.html");
      const html = await res.text();
      container.innerHTML = html;

      // Sidebar içindeki logo elementlerini bul
      const logoImg = container.querySelector(".logo img");
      const logoAnchor = container.querySelector(".logo a");

      if (logoUrl && logoImg) {
        logoImg.src = logoUrl;
      }

      if (logoAnchor) {
        let pathParts = window.location.pathname.split("/").filter(Boolean);
        pathParts[pathParts.length - 1] = "home";
        logoAnchor.href = `${window.location.origin}/${pathParts.join("/")}`;
      }

      const sidebar = document.getElementById("sidebar");
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      hamburgerBtn?.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });
    } catch (err) {
      console.error("Sidebar yüklenemedi:", err);
    }
  }

  document.addEventListener("DOMContentLoaded", loadSidebar);
})();
