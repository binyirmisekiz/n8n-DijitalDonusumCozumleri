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
    try {
      const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri/sidebar.html");
      if (!res.ok) throw new Error("Fetch başarısız: " + res.status);
      html = await res.text();
      localStorage.setItem("sidebar-html", html);
    } catch (err) {
      console.error("Sidebar fetch hatası:", err);
      return;
    }
  } else {
    console.log("Cache bulundu → localStorage'dan yükleniyor...");
  }

  container.innerHTML = html;
  console.log("Sidebar HTML eklendi.");

  // Hamburger menü kontrolü
  const sidebar = document.getElementById("sidebar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  if (hamburgerBtn && sidebar) {
    hamburgerBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
    console.log("Hamburger butonu bağlandı.");
  } else {
    console.warn("Hamburger veya Sidebar bulunamadı!");
  }
}

loadSidebar();
