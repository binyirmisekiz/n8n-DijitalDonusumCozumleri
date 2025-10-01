async function loadSidebar() {
  console.log("loadSidebar: Başladı");

  const container = document.getElementById("sidebar-container");
  console.log("loadSidebar: container seçildi", container);

  // cache varsa ordan al
  let html = localStorage.getItem("sidebar-html");
  console.log("loadSidebar: localStorage html", html ? "bulundu" : "yok");

  if (!html) {
    console.log("loadSidebar: fetch işlemi başlatılıyor");
    const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri/sidebar.html");
    console.log("loadSidebar: fetch tamamlandı", res);

    html = await res.text();
    console.log("loadSidebar: html metni alındı");

    localStorage.setItem("sidebar-html", html);
    console.log("loadSidebar: html localStorage'a kaydedildi");
  }

  // sayfaya ekle
  if (container) {
    container.innerHTML = html;
    console.log("loadSidebar: container.innerHTML güncellendi");
  } else {
    console.warn("loadSidebar: container bulunamadı, innerHTML ayarlanamadı");
  }

  // Hamburger butonunu çalıştır
  const sidebar = document.getElementById("sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  console.log("loadSidebar: sidebar", sidebar);
  console.log("loadSidebar: hamburgerBtn", hamburgerBtn);

  if (hamburgerBtn && sidebar) {
    hamburgerBtn.addEventListener("click", () => {
      console.log("Hamburger tıklandı: sidebar toggle");
      sidebar.classList.toggle("active");
    });
    console.log("loadSidebar: hamburger click listener eklendi");
  } else {
    console.warn("loadSidebar: hamburgerBtn veya sidebar bulunamadı");
  }
}

console.log("loadSidebar fonksiyon çağrılıyor");
loadSidebar();
