async function loadSidebar() {
  const container = document.getElementById("sidebar-container");

  // Cache varsa ordan al
  let html = localStorage.getItem("sidebar-html");
  if (!html) {
    // Yoksa fetch et
    const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri/sidebar.html");
    html = await res.text();
    localStorage.setItem("sidebar-html", html);
  }

  // Sayfaya ekle
  container.innerHTML = html;

  // Hamburger butonunu çalıştır
  const sidebar = document.getElementById("sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  if (hamburgerBtn && sidebar) {
    hamburgerBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
}

// Sayfa yüklendiğinde çalıştır
window.addEventListener("DOMContentLoaded", loadSidebar);
