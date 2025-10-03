async function loadSidebar() {
  const container = document.getElementById("sidebar-container");
  const storageKey = "sidebar-html";

  // Cache kontrol
  let html = localStorage.getItem(storageKey);
  if (!html) {
    // Fetch et
    const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri/sidebar.html");
    html = await res.text();
    localStorage.setItem(storageKey, html);
  }

  // Sayfaya ekle
  container.innerHTML = html;

  // Hamburger toggle
  const sidebar = document.getElementById("sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  if (hamburgerBtn && sidebar) {
    hamburgerBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
}

loadSidebar();
