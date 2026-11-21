/* ============ KONFIGURASI — EDIT DI SINI ============ */
const CONFIG = {
  brand: "RAJIP DIGITAL",
  name: "Rajip",
  whatsapp: "6282311511550", // satu-satunya tempat nomor WhatsApp
  defaultMsg: "Halo Rajip, saya tertarik dengan jasa pembuatan website/sistem. Saya ingin konsultasi mengenai kebutuhan project saya.",
  experience: "Pengalaman: (isi pengalaman Anda di sini)",
  // Kosongkan string jika belum ada; akan tampil "Belum diisi"
  contacts: { email: "", instagram: "", facebook: "", github: "", website: "" },
  services: [
    { icon: "globe", title: "Website Bisnis", desc: "Website profesional untuk perusahaan, usaha, brand, toko, jasa, dan personal branding.", perks: ["Desain modern", "Responsive HP & desktop"] },
    { icon: "cart", title: "Website Katalog", desc: "Menampilkan produk, layanan, menu, portfolio, dan informasi bisnis.", perks: ["Mudah diperbarui", "Tombol pesan WhatsApp"] },
    { icon: "gear", title: "Sistem Informasi", desc: "Sistem berbasis web: administrasi, keuangan, monitoring, laporan, inventory, data pelanggan, dan operasional.", perks: ["Pekerjaan lebih terorganisir", "Sesuai alur kerja Anda"] },
    { icon: "chart", title: "Dashboard & Monitoring", desc: "Dashboard visual untuk memantau data, aktivitas, dan laporan secara terstruktur.", perks: ["Grafik jelas", "Data mudah dibaca"] },
    { icon: "gem", title: "Website Custom", desc: "Website dibuat berdasarkan kebutuhan dan permintaan khusus Anda.", perks: ["Fitur sesuai kebutuhan", "Fleksibel"] },
    { icon: "wrench", title: "Maintenance & Pengembangan", desc: "Perbaikan, update, penambahan fitur, dan optimasi website yang sudah ada.", perks: ["Website tetap terawat", "Fitur bisa ditambah"] }
  ],
  // filter: Website | Sistem | Dashboard | Landing Page. Kosongkan demo/link jika belum ada (tombol otomatis hilang).
  projects: [
    { title: "Sistem Monitoring Operasional", filter: "Sistem", cat: "Sistem Informasi", img: "assets/project-1.jpg", desc: "Contoh konsep sistem untuk memantau aktivitas operasional harian dan laporan.", tech: ["HTML", "CSS", "JavaScript"], demo: "", link: "", label: "Contoh Konsep" },
    { title: "Website Digital Business", filter: "Website", cat: "Website Bisnis", img: "assets/project-2.jpg", desc: "Contoh konsep website bisnis modern dengan profil layanan dan kontak.", tech: ["HTML", "CSS", "JavaScript"], demo: "", link: "", label: "Demo Project" },
    { title: "Sistem Administrasi Keuangan", filter: "Sistem", cat: "Aplikasi Administrasi", img: "assets/project-3.jpg", desc: "Contoh konsep pencatatan pemasukan, pengeluaran, dan ringkasan laporan.", tech: ["JavaScript", "Firebase"], demo: "", link: "", label: "Contoh Konsep" },
    { title: "Website Katalog Produk", filter: "Website", cat: "Website Katalog", img: "assets/project-4.jpg", desc: "Contoh konsep katalog produk UMKM dengan tombol pesan via WhatsApp.", tech: ["HTML", "CSS", "JavaScript"], demo: "", link: "", label: "Demo Project" },
    { title: "Dashboard Monitoring Data", filter: "Dashboard", cat: "Dashboard", img: "assets/project-5.jpg", desc: "Contoh konsep dashboard grafik dan statistik data secara visual.", tech: ["JavaScript", "API"], demo: "", link: "", label: "Contoh Konsep" },
    { title: "Website Company Profile", filter: "Landing Page", cat: "Landing Page", img: "assets/project-6.jpg", desc: "Contoh konsep landing page company profile yang ringkas dan meyakinkan.", tech: ["HTML", "CSS"], demo: "", link: "", label: "Demo Project" }
  ],
  skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Firebase", "GitHub", "UI/UX Design", "Web Application", "Database", "API Integration"],
  steps: [
    ["Konsultasi", "Diskusikan kebutuhan, ide, dan tujuan website atau sistem."],
    ["Perencanaan", "Menentukan konsep, fitur, desain, dan alur sistem."],
    ["Pengembangan", "Website atau sistem mulai dibuat sesuai kebutuhan."],
    ["Testing", "Pengujian tampilan, fitur, dan fungsi."],
    ["Delivery", "Website siap digunakan dan dipublikasikan."],
    ["Support", "Bantuan dan pengembangan lanjutan sesuai kesepakatan."]
  ]
};
/* ============ KODE ============ */
const $ = (s, r = document) => r.querySelector(s);
const ICON = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  cart: '<path d="M3 4h2l2 11h10l2-8H7"/><circle cx="9" cy="19" r="1"/><circle cx="17" cy="19" r="1"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  gem: '<path d="M6 4h12l4 6-10 11L2 10z"/>',
  wrench: '<path d="M14 6a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3l9-9z"/>'
};
const svg = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const waLink = m => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m || CONFIG.defaultMsg)}`;
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
  $("#svc").innerHTML = CONFIG.services.map(s => `<article class="card rv"><div class="ic">${svg(s.icon)}</div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p><ul>${s.perks.map(p => `<li>${esc(p)}</li>`).join("")}</ul><a class="lnk" target="_blank" rel="noopener" href="${waLink(`Halo Rajip, saya tertarik dengan jasa ${s.title}. Boleh konsultasi?`)}">Konsultasi via WhatsApp</a></article>`).join("");
  const filters = ["Semua", ...new Set(CONFIG.projects.map(p => p.filter))];
  $("#flt").innerHTML = filters.map((f, i) => `<button class="chip${i ? "" : " on"}" aria-pressed="${!i}" data-f="${esc(f)}">${esc(f)}</button>`).join("");
  $("#grid").innerHTML = CONFIG.projects.map((p, i) => `<article class="card proj rv" data-f="${esc(p.filter)}"><div class="shot"><img src="${esc(p.img)}" alt="Tampilan ${esc(p.title)}" width="800" height="500" loading="lazy"><span class="tag">${esc(p.label)}</span></div><div class="pb"><small>${esc(p.cat)}</small><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="chips">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="btns">${p.demo ? `<a class="btn sm" href="${esc(p.demo)}" target="_blank" rel="noopener">Lihat Demo</a>` : ""}<button class="btn sm ghost" data-i="${i}">Detail Project</button></div></div></article>`).join("");
  $("#flt").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return;
    document.querySelectorAll("#flt button").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); });
    document.querySelectorAll("#grid .card").forEach(c => c.hidden = b.dataset.f !== "Semua" && c.dataset.f !== b.dataset.f); });
  const dlg = $("#dlg");
  $("#grid").addEventListener("click", e => { const b = e.target.closest("[data-i]"); if (!b) return; const p = CONFIG.projects[b.dataset.i];
    $("#di").src = p.img; $("#di").alt = "Tampilan " + p.title; $("#dl").textContent = p.label + " · " + p.cat; $("#dt").textContent = p.title; $("#dd").textContent = p.desc;
    $("#dtech").innerHTML = p.tech.map(t => `<span>${esc(t)}</span>`).join("");
    $("#dbtn").innerHTML = (p.demo ? `<a class="btn sm" href="${esc(p.demo)}" target="_blank" rel="noopener">Lihat Demo</a>` : "") + (p.link ? `<a class="btn sm ghost" href="${esc(p.link)}" target="_blank" rel="noopener">Lihat Project</a>` : "") + `<a class="btn sm wa" target="_blank" rel="noopener" href="${waLink(`Halo Rajip, saya tertarik dengan project seperti "${p.title}". Boleh konsultasi?`)}">Tanya via WhatsApp</a>`;
    dlg.showModal(); });
  $("#dx").onclick = () => dlg.close();
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  $("#exp").textContent = CONFIG.experience;
  $("#skills").innerHTML = CONFIG.skills.map(s => `<span>${esc(s)}</span>`).join("");
  $("#steps").innerHTML = CONFIG.steps.map((s, i) => `<li class="card rv"><b>0${i + 1}</b><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></li>`).join("");
  const c = CONFIG.contacts, hrefs = { email: v => "mailto:" + v, instagram: v => "https://instagram.com/" + v.replace("@", ""), facebook: v => v, github: v => "https://github.com/" + v, website: v => v };
  const items = [["WhatsApp", "+" + CONFIG.whatsapp, waLink()], ...["email", "instagram", "facebook", "github", "website"].map(k => [k[0].toUpperCase() + k.slice(1), c[k], c[k] && hrefs[k](c[k])])];
  $("#contacts").innerHTML = items.map(([n, v, h]) => h ? `<a class="card ct rv" href="${esc(h)}" target="_blank" rel="noopener"><small>${n}</small><b>${esc(v)}</b></a>` : `<div class="card ct"><small>${n}</small><b class="mut">Belum diisi</b></div>`).join("");
  $("#fnav").innerHTML = [...document.querySelectorAll("#menu a")].map(a => `<a href="${a.getAttribute("href")}">${a.textContent}</a>`).join("");
  $("#fsoc").innerHTML = items.filter(i => i[2]).map(i => `<a href="${esc(i[2])}" target="_blank" rel="noopener">${i[0]}</a>`).join("");
  $("#yr").textContent = new Date().getFullYear();
  const root = document.documentElement;
  $("#theme").onclick = () => { const t = root.dataset.theme === "dark" ? "light" : "dark"; root.dataset.theme = t; try { localStorage.setItem("theme", t); } catch (e) {} };
  const menu = $("#menu"), burger = $("#burger");
  const closeMenu = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
  menu.addEventListener("click", e => e.target.tagName === "A" && closeMenu());
  const top = $("#top"); top.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
  addEventListener("scroll", () => { top.classList.toggle("show", scrollY > 600); $("#nav").classList.toggle("solid", scrollY > 20); }, { passive: true });
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 }) : null;
  document.querySelectorAll(".rv").forEach(el => io ? io.observe(el) : el.classList.add("in"));
});
