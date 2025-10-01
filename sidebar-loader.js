async function loadSidebar() {
  console.log("[Sidebar] Başlatıldı");
  
  const wrapper = document.getElementById("sidebar-wrapper");
  if (!wrapper) {
    console.error("[Sidebar] wrapper bulunamadı!");
    return;
  }
  console.log("[Sidebar] wrapper bulundu:", wrapper);

  // Cache varsa ordan al
  let html = localStorage.getItem("sidebar-html");
  if (html) {
    console.log("[Sidebar] Cache bulundu, yükleniyor");
  } else {
    console.log("[Sidebar] Cache yok, fetch başlatılıyor");
    try {
      const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri/sidebar.html");
      html = await res.text();
      localStorage.setItem("sidebar-html", html);
      console.log("[Sidebar] Fetch başarılı, cache kaydedildi");
    } catch (err) {
      console.error("[Sidebar] Fetch hatası:", err);
      return;
    }
  }

  wrapper.innerHTML = html;
  console.log("[Sidebar] HTML wrapper'a yüklendi");

  // Hamburger butonunu çalıştır
  const sidebar = document.getElementById("sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  if (!sidebar || !hamburgerBtn) {
    console.warn("[Sidebar] sidebar veya hamburgerBtn bulunamadı!");
    return;
  }
  console.log("[Sidebar] sidebar ve hamburgerBtn bulundu");

  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    console.log("[Sidebar] Hamburger tıklandı, sidebar toggled");
  });

  console.log("[Sidebar] loadSidebar tamamlandı");
}

loadSidebar();
