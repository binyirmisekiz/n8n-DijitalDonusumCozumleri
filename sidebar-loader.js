async function loadSidebar() {
  const container = document.getElementById("sidebar-container");

  // cache varsa ordan al
  let html = localStorage.getItem("sidebar-html");
  if (!html) {
    // yoksa fetch et
    const res = await fetch("https://raw.githubusercontent.com/binyirmisekiz/n8n-DijitalDonusumCozumleri/refs/heads/main/sidebar.html");
    html = await res.text();
    localStorage.setItem("sidebar-html", html);
  }

  // sayfaya ekle
  container.innerHTML = html;

  // Hamburger butonunu çalıştır
  const sidebar = document.getElementById("sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
hamburgerBtn.addEventListener("click", () => sidebar.classList.toggle("active"));
}

loadSidebar();
