(() => {
  async function loadSidebar() {
    const container = document.getElementById("sidebar-wrapper");
    if (!container) return;

    try {
      const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri@ad45d69/sidebar.html");
      const html = await res.text();
      container.innerHTML = html;

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
