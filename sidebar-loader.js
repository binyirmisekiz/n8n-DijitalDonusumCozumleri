(() => {
  async function loadSidebar() {
    const container = document.getElementById("sidebar-wrapper");
    if (!container) return;

    try {
      // Query string parametrelerini al
      const params = new URLSearchParams(document.currentScript.src.split("?")[1]);
      const logoUrl = params.get("logo"); // logo URL

      const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri@ad45d69/sidebar.html");
      const html = await res.text();
      container.innerHTML = html;

      // Sidebar içindeki logo elementlerini bul
      const logoImg = container.querySelector(".logo img");
      const logoAnchor = container.querySelector(".logo a");

      if (logoUrl && logoImg) {
        logoImg.src = logoUrl;   // Görseli değiştir
      }

      if (logoAnchor) {
        // Mevcut path'i al
        let pathParts = window.location.pathname.split("/").filter(Boolean);

        if (pathParts.length > 0) {
          // Son segmenti "home" yap
          pathParts[pathParts.length - 1] = "home";
        } else {
          // root ise sadece "home"
          pathParts = ["home"];
        }

        // Yeni URL'yi oluştur
        logoAnchor.href = `${window.location.origin}/${pathParts.join("/")}`;
      }

      // Hamburger menü aç/kapat
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
