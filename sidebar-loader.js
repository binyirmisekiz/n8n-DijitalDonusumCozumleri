async function loadSidebar() {
  console.log("Sidebar yükleme başladı");

  const container = document.getElementById("sidebar-container");
  if (!container) {
    console.error("HATA: #sidebar-container bulunamadı!");
    return;
  }

  let html = localStorage.getItem("sidebar-html");
  if (!html) {
    console.log("Cache yok → fetch ediliyor...");
    const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri/sidebar.html");
    html = await res.text();
    localStorage.setItem("sidebar-html", html);
  } else {
    console.log("Cache bulundu → localStorage'dan yükleniyor...");
  }

  container.innerHTML = html;
  console.log("Sidebar HTML eklendi.");

  // Hamburger
  const sidebar = document.getElementById("sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
    console.log("Hamburger butonu bağlandı.");
  } else {
    console.warn("Hamburger butonu bulunamadı!");
  }
}

loadSidebar();
