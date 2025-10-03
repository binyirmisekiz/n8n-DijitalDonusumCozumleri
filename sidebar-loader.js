async function loadSidebar() {
  const container = document.getElementById("sidebar-container");
  if (!container) return;

  const storageKey = "sidebar-html";
  let html = localStorage.getItem(storageKey);

  try {
    if (!html) {
      const res = await fetch("https://cdn.jsdelivr.net/gh/binyirmisekiz/n8n-DijitalDonusumCozumleri/sidebar.html");
      if (!res.ok) throw new Error("Fetch hatası: " + res.status);
      html = await res.text();
      localStorage.setItem(storageKey, html);
    }

    container.innerHTML = html;

    // Hamburger toggle
    const sidebar = document.getElementById("sidebar");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    if (hamburgerBtn && sidebar) {
      hamburgerBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });
    } else {
      console.warn("Hamburger veya sidebar bulunamadı!");
    }
  } catch (err) {
    console.error("Sidebar yüklenemedi:", err);
  }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", loadSidebar);
