async function loadSidebar() {
  console.log("Sidebar yükleme başladı");

  const container = document.getElementById("sidebar-container");
  if (!container) {
    console.error("HATA: #sidebar-container bulunamadı!");
    return;
  }

  try {
    const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri/sidebar.html");
    const html = await res.text();
    container.innerHTML = html;
    console.log("Sidebar yüklendi");

    // Hamburger toggle
    const sidebar = document.getElementById("sidebar");
    const hamburgerBtn = document.getElementById("hamburgerBtn");

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });
      console.log("Hamburger butonu bağlandı");
    }
  } catch (err) {
    console.error("Sidebar yüklenemedi:", err);
  }
}

loadSidebar();
