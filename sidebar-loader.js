async function loadSidebar() {
  const container = document.getElementById("sidebar-container");

  // cache varsa ordan al
  let html = localStorage.getItem("sidebar-html");
  if (!html) {
    // yoksa fetch et
    const res = await fetch("sidebar.html");
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
}

loadSidebar();
