import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ExternalLink,
  Facebook,
  FileText,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Pencil,
  Plus,
  Save,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import "./styles.css";

const imageGuide = {
  hero: "/images/01-HERO-ganti-dengan-foto-proyek-utama.jpg",
  about: "/images/02-TENTANG-ganti-dengan-foto-kantor-atau-tim.jpg",
  service1: "/images/03-LAYANAN-videotron.jpg",
  service2: "/images/04-LAYANAN-interactive-display.jpg",
  service3: "/images/05-LAYANAN-lighting-dan-electrical.jpg",
  service4: "/images/06-LAYANAN-it-dan-security.jpeg",
  service5: "/images/07-LAYANAN-solar-cell.jpeg",
  service6: "/images/08-LAYANAN-manufacturing-infrastructure.jpg",
  project1: "/images/01-HERO-ganti-dengan-foto-proyek-utama.jpg",
  project2: "/images/10-PROJECT-KPU-Jawa-Timur.jpg",
  project3: "/images/11-PROJECT-Kominfo-Pasuruan.jpg",
  project4: "/images/12-PROJECT-PPSDM-Migas-Cepu.jpg",
  project5: "/images/13-PROJECT-BNI-Graha-Pangeran.jpg",
  project6: "/images/14-PROJECT-Telkomsel-Jakarta.jpg",
  project7: "/images/15-PROJECT-RS-Kemenkes-Makassar.jpg",
  project8: "/images/16-PROJECT-MAN-1-Gresik.jpg",
  news1: "/images/17-BERITA-videotron.jpg",
  news2: "/images/18-BERITA-pengadaan.jpg",
  news3: "/images/19-BERITA-digital-display.jpg",
  pertamina: "/images/pertamina.jpg",
  kpnLogo: "/logos/logo.png",
};

const contact = {
  phone: "082249501188",
  whatsapp: "https://wa.me/6282249501188",
  email: "cv.kpn2019@gmail.com",
  instagram: "https://www.instagram.com/videotronmurahsurabaya?igsi=MWNwamRwMm9kMnh6Zg==",
  facebook: "https://www.facebook.com/share/1DRjddx7jz/",
  address:
    "Jl. Permata Sukodono Raya No.01 Cluster Beryl Blok H1, Sukodono, Sukodono, Kec. Sukodono, Kabupaten Sidoarjo, Jawa Timur 61258",
};

const defaultServices = [
  {
    id: 1,
    title: "Videotron & Digital Display",
    short: "LED display untuk branding, informasi, promosi, dan komunikasi visual.",
    desc: "Solusi LED display untuk kebutuhan informasi, promosi, ruang publik, corporate communication, hingga kebutuhan project outdoor maupun indoor.",
    image: imageGuide.service1,
    tag: "DISPLAY",
  },
  {
    id: 2,
    title: "Interactive Display",
    short: "Interactive TV, smart display, dan perangkat presentasi.",
    desc: "Interactive TV, smart display, dan perangkat presentasi untuk ruang meeting, pendidikan, auditorium, command center, dan kebutuhan kolaborasi.",
    image: imageGuide.service2,
    tag: "INTERACTIVE",
  },
  {
    id: 3,
    title: "Lighting & Electrical",
    short: "Lighting, PJU, industrial lighting, dan kebutuhan kelistrikan.",
    desc: "Pengadaan lighting, PJU, industrial lighting, panel, komponen, dan kebutuhan kelistrikan untuk fasilitas serta berbagai proyek.",
    image: imageGuide.service3,
    tag: "ELECTRICAL",
  },
  {
    id: 4,
    title: "IT Support & Security System",
    short: "CCTV, access control, networking, dan perangkat IT.",
    desc: "CCTV, access control, networking, perangkat IT, dan dukungan sistem untuk kebutuhan keamanan serta operasional bisnis.",
    image: imageGuide.service4,
    tag: "IT & SECURITY",
  },
  {
    id: 5,
    title: "Solar Cell & Energy Solution",
    short: "Solusi energi berbasis solar untuk fasilitas dan proyek.",
    desc: "Solusi energi berbasis solar cell untuk fasilitas, project site, kebutuhan efisiensi energi, dan pengembangan infrastruktur.",
    image: imageGuide.service5,
    tag: "ENERGY",
  },
  {
    id: 6,
    title: "Manufacturing & Infrastructure",
    short: "Pengadaan dan kebutuhan pendukung proyek serta infrastruktur.",
    desc: "Pengadaan dan pekerjaan pendukung konstruksi, manufacturing, facility, serta kebutuhan infrastruktur sesuai kebutuhan proyek.",
    image: imageGuide.service6,
    tag: "PROJECT",
  },
];

const defaultProjects = [
  { id: 1, title: "Pertamina Asset 4 – Surabaya", category: "Videotron", year: "2025", desc: "Pengadaan & instalasi videotron untuk kebutuhan komunikasi visual dan project facility.", image: imageGuide.project1 },
  { id: 2, title: "KPU Provinsi Jawa Timur – Surabaya", category: "Digital Display", year: "2025", desc: "Instalasi display digital untuk mendukung kebutuhan informasi dan komunikasi publik.", image: imageGuide.project2 },
  { id: 3, title: "Dinas Kominfo – Pasuruan", category: "Videotron Outdoor", year: "2025", desc: "Pengadaan videotron outdoor untuk kebutuhan informasi publik dan komunikasi visual.", image: imageGuide.project3 },
  { id: 4, title: "PPSDM Migas – Cepu", category: "Interactive Display", year: "2025", desc: "Fasilitas smart display auditorium untuk kebutuhan presentasi dan pembelajaran.", image: imageGuide.project4 },
  { id: 5, title: "Bank BNI Graha Pangeran – Surabaya", category: "Digital Signage", year: "2025", desc: "Digital signage & display untuk mendukung komunikasi visual di area fasilitas.", image: imageGuide.project5 },
  { id: 6, title: "Telkomsel – Jakarta", category: "Display & IT", year: "2025", desc: "Display dan dukungan IT untuk kebutuhan ruang dan project operasional.", image: imageGuide.project6 },
  { id: 7, title: "RS Kemenkes – Makassar", category: "Information Display", year: "2025", desc: "Display informasi untuk mendukung kebutuhan komunikasi dan layanan fasilitas.", image: imageGuide.project7 },
  { id: 8, title: "MAN 1 Gresik", category: "Smart Classroom", year: "2025", desc: "Smart classroom dan LED screen untuk kebutuhan pembelajaran dan presentasi.", image: imageGuide.project8 },
];

const defaultNews = [
  { id: 1, title: "Panduan Memilih Videotron untuk Kebutuhan Bisnis", category: "Edukasi", date: "05 Sep 2026", excerpt: "Ukuran, brightness, pixel pitch, lokasi pemasangan, dan kebutuhan konten perlu disesuaikan sejak awal.", image: imageGuide.news1 },
  { id: 2, title: "Pengadaan Barang yang Rapi Dimulai dari Kebutuhan yang Jelas", category: "Procurement", date: "02 Sep 2026", excerpt: "Pengadaan yang tepat bukan sekadar mencari harga, tetapi memastikan spesifikasi, kualitas, waktu, dan implementasi sesuai kebutuhan.", image: imageGuide.news2 },
  { id: 3, title: "Digital Display untuk Ruang Publik dan Area Bisnis", category: "Insight", date: "28 Agu 2026", excerpt: "Display digital dapat dipakai untuk informasi, branding, navigasi, promosi, hingga komunikasi internal.", image: imageGuide.news3 },
];

const defaultClients = [
  { id: 1, name: "Pertamina", image: imageGuide.pertamina },
  { id: 2, name: "KPU Jawa Timur", image: imageGuide.project2 },
  { id: 3, name: "Kominfo", image: imageGuide.project3 },
  { id: 4, name: "PPSDM Migas", image: imageGuide.project4 },
  { id: 5, name: "BNI", image: imageGuide.project5 },
  { id: 6, name: "Telkomsel", image: imageGuide.project6 },
  { id: 7, name: "Kemenkes", image: imageGuide.project7 },
  { id: 8, name: "MAN 1 Gresik", image: imageGuide.project8 },
];

const defaultSiteCopy = {
  heroImage: imageGuide.hero,
  aboutImage: imageGuide.about,
  heroEyebrow: "General Trading • Distributor • Supplier • Contractor",
  heroTitle: "Partner Pengadaan Untuk Kebutuhan Bisnis Anda.",
  heroDesc: "Karya Putra Nusantara hadir sebagai partner pengadaan barang dan solusi proyek yang mengutamakan kualitas, ketepatan, dan pelayanan profesional.",
  aboutTitle: "Lebih dari sekadar supplier.",
  aboutText1: "CV Karya Putra Nusantara berdiri sebagai perusahaan General Trading, Distributor, Supplier, General Contractor, dan Business Consultant.",
  aboutText2: "Kami membantu kebutuhan pengadaan barang dan solusi proyek melalui pendekatan yang fleksibel—dari kebutuhan produk, konsultasi, pengadaan, hingga implementasi.",
};

const STORAGE_KEY = "kpn_cms_v4";

const defaultContact = { ...contact };

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { services: defaultServices, projects: defaultProjects, news: defaultNews, clients: defaultClients, site: defaultSiteCopy, contact: defaultContact };
    const parsed = JSON.parse(raw);
    return {
      services: parsed.services?.length ? parsed.services : defaultServices,
      projects: parsed.projects?.length ? parsed.projects : defaultProjects,
      news: parsed.news?.length ? parsed.news : defaultNews,
      clients: parsed.clients?.length ? parsed.clients : defaultClients,
      site: { ...defaultSiteCopy, ...(parsed.site || {}) },
      contact: { ...defaultContact, ...(parsed.contact || {}) },
    };
  } catch {
    return { services: defaultServices, projects: defaultProjects, news: defaultNews, clients: defaultClients, site: defaultSiteCopy, contact: defaultContact };
  }
}

function saveStore(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { console.warn("CMS save failed", e); }
}

function Img({ src, alt = "", className = "" }) {
  return <img className={className} src={src} alt={alt} loading="lazy" onError={(e) => { e.currentTarget.style.opacity = "0"; }} />;
}

function go(path) { window.location.hash = path.startsWith("#") ? path : `#${path}`; }

function Header({ onMenu, menuOpen, contactData = contact }) {
  const nav = [
    ["Beranda", "home"], ["Tentang", "tentang"], ["Solusi", "layanan"], ["Portfolio", "portfolio"], ["Insight", "berita"], ["Kontak", "kontak"],
  ];
  return <header className="nav-wrap"><nav className="nav">
    <button className="brand brand-button" onClick={() => go("home")} aria-label="Karya Putra Nusantara">
      <span className="logo-kpn"><Img src={imageGuide.kpnLogo} alt="Logo Karya Putra Nusantara" /></span>
      <span className="brand-copy"><strong>KARYA PUTRA</strong><span>NUSANTARA</span></span>
    </button>
    <div className={`nav-links ${menuOpen ? "show" : ""}`}>
      {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={onMenu}>{label}</a>)}
    </div>
    <a className="nav-cta" href={contactData.whatsapp} target="_blank" rel="noreferrer">Konsultasi <ArrowRight size={16}/></a>
    <button className="menu" onClick={onMenu} aria-label="Menu">{menuOpen ? <X/> : <Menu/>}</button>
  </nav></header>;
}

function Hero({ site }) {
  return <section id="home" className="hero">
    <Img src={site.heroImage || imageGuide.hero} alt="Dokumentasi proyek KPN" className="hero-img" />
    <div className="hero-overlay" />
    <div className="hero-content">
      <div className="eyebrow"><Sparkles size={15}/> {site.heroEyebrow}</div>
      <h1>{site.heroTitle.includes(" Untuk ") ? <>{site.heroTitle.split(" Untuk ")[0]}<br/><span>Untuk {site.heroTitle.split(" Untuk ")[1]}</span></> : site.heroTitle}</h1>
      <p>{site.heroDesc}</p>
      <div className="hero-actions"><a className="btn gold" href="#layanan">Jelajahi Solusi <ArrowRight size={17}/></a><a className="btn ghost" href="#portfolio">Lihat Portfolio</a></div>
      <div className="hero-trust"><ShieldCheck size={17}/> Dari kebutuhan, pengadaan, sampai implementasi.</div>
    </div>
    <div className="hero-bottom-bar"><div><span className="pulse-dot"/> Partner pengadaan & solusi proyek</div><a href="#kontak">Ceritakan kebutuhanmu <ArrowRight size={15}/></a></div>
  </section>;
}

function TrustRow() {
  const items = ["Pengadaan Terintegrasi", "Produk Beragam", "Project-Oriented", "Partner Profesional"];
  return <section className="trust-row">{items.map((x, i) => <div key={x} className={`trust-item trust-${i+1}`}><span className="trust-no">0{i+1}</span><Check size={16}/><span>{x}</span></div>)}</section>;
}

function About({ site }) {
  return <section id="tentang" className="section about-section">
    <div className="about-copy">
      <div className="kicker">WHY KARYA PUTRA NUSANTARA</div>
      <h2>{site.aboutTitle.split(" ").slice(0, 3).join(" ")}<br/><em>{site.aboutTitle.split(" ").slice(3).join(" ")}</em></h2>
      <p>{site.aboutText1}</p><p>{site.aboutText2}</p>
      <div className="about-points"><div><Check/><span>Barang & jasa sesuai kebutuhan</span></div><div><Check/><span>Fleksibel untuk proyek dan operasional</span></div><div><Check/><span>Fokus kualitas, ketepatan & implementasi</span></div></div>
      <a className="text-link" href="#kontak">Diskusikan kebutuhan <ArrowRight size={15}/></a>
    </div>
    <div className="about-visual">
      <div className="about-image-wrap"><Img src={site.aboutImage || imageGuide.about} alt="Tim dan project KPN"/></div>
      <div className="about-stamp"><strong>2019</strong><span>Established in<br/>Jawa Timur</span></div>
      <div className="about-float"><span className="mini-kicker">ONE PARTNER</span><strong>Beragam kebutuhan.</strong><span>Procurement • Project • Supply</span></div>
    </div>
  </section>;
}

function Services({ services }) {
  return <section id="layanan" className="section solutions-section">
    <div className="section-head solutions-head"><div><div className="kicker">OUR SOLUTIONS</div><h2>Satu partner,<br/><em>beragam kebutuhan.</em></h2></div><p>Kebutuhan perusahaan, instansi, fasilitas, dan project bisa ditangani melalui solusi pengadaan yang fleksibel.</p></div>
    <div className="services-mosaic">{services.map((s, i) => <article className={`service-card service-card-${i+1}`} key={s.id}>
      <div className="service-image"><Img src={s.image} alt={s.title}/><span>{s.tag}</span></div>
      <div className="service-body"><div className="service-no">0{i+1}</div><h3>{s.title}</h3><p>{s.short}</p><a href="#kontak">Tanyakan kebutuhan <ArrowRight size={14}/></a></div>
    </article>)}</div>
  </section>;
}

function ProjectCard({ project, index }) {
  return <article className="project-card" onClick={() => go(`project/${project.id}`)} role="link" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && go(`project/${project.id}`)}>
    <div className="project-image"><Img src={project.image} alt={project.title}/><span className="project-open">VIEW PROJECT <ExternalLink size={14}/></span></div>
    <div className="project-meta"><span>PROJECT {String(index + 1).padStart(2, "0")}</span><small>{project.year} · {project.category}</small></div>
    <h3>{project.title}</h3><p>{project.desc}</p>
  </article>;
}

function Portfolio({ projects }) {
  const [query, setQuery] = React.useState("");
  const filtered = projects.filter((p) => `${p.title} ${p.category} ${p.desc}`.toLowerCase().includes(query.toLowerCase()));
  return <section id="portfolio" className="portfolio-section">
    <div className="section portfolio-inner"><div className="section-head dark-head"><div><div className="kicker light-kicker">SELECTED PROJECTS</div><h2>Project yang<br/><em>telah kami kerjakan.</em></h2></div><div className="portfolio-search"><Search size={16}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari project..."/></div></div>
      <div className="project-grid">{filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i}/>)}</div>
      {!filtered.length && <div className="empty-state dark-empty">Project tidak ditemukan.</div>}
    </div>
  </section>;
}

function Clients({ clients }) {
  return <section className="section clients-section"><div className="clients-intro"><div><div className="kicker">CLIENTS & PROJECT PARTNERS</div><h2>Dipercaya untuk<br/><em>berbagai kebutuhan proyek.</em></h2></div><p>Beberapa partner di bawah merupakan dokumentasi project KPN. Logo ditampilkan apa adanya tanpa teks tambahan agar tetap clean.</p></div><div className="logo-grid-clean">{clients.map(c => <div className="client-logo-clean" key={c.id}><Img src={c.image} alt={c.name}/></div>)}</div></section>;
}

function NewsCard({ item, feature = false }) {
  return <article className={`news-card ${feature ? "feature" : ""}`} onClick={() => go(`berita/${item.id}`)} role="link" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && go(`berita/${item.id}`)}>
    <div className="news-image"><Img src={item.image} alt={item.title}/><span>{item.category}</span></div>
    <div className="news-copy"><small>{item.date}</small><h3>{item.title}</h3><p>{item.excerpt}</p><span className="news-link">Baca insight <ArrowRight size={14}/></span></div>
  </article>;
}

function News({ news }) {
  return <section id="berita" className="section news-section"><div className="section-head news-head"><div><div className="kicker">KABAR & INSIGHT KPN</div><h2>Informasi terbaru,<br/><em>dari KPN.</em></h2></div><a className="text-link" href="#berita-semua">Lihat semua kabar <ArrowRight size={15}/></a></div><div className="news-layout">{news.slice(0, 3).map((n, i) => <NewsCard key={n.id} item={n} feature={i === 0}/>)}</div></section>;
}

function ContactSection({ contactData = contact }) {
  return <section id="kontak" className="contact-section"><div className="contact-glow"/><div className="contact-copy"><div className="kicker light-kicker">LET'S WORK TOGETHER</div><h2>Punya kebutuhan<br/><em>untuk proyek Anda?</em></h2><p>Ceritakan kebutuhan barang, jasa, atau proyek Anda. Tim KPN siap membantu mencari solusi yang sesuai.</p><a className="btn gold large" href={contactData.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Hubungi KPN</a></div><div className="contact-side"><a href={contactData.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp <strong>{contactData.phone}</strong></a><a href={`mailto:${contactData.email}`}><Mail/> Email <strong>{contactData.email}</strong></a><div><MapPin/> <span>{contactData.address}</span></div></div></section>;
}

function Footer({ contactData = contact }) {
  return <footer><div className="footer-top"><div><button className="brand brand-button footer-brand" onClick={() => go("home")}><span className="logo-kpn"><Img src={imageGuide.kpnLogo} alt="Logo KPN"/></span><span className="brand-copy"><strong>KARYA PUTRA</strong><span>NUSANTARA</span></span></button><p>General Trading · Distributor · Supplier · General Contractor · Business Consultant</p></div><div className="footer-social"><a href={contactData.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href={contactData.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a><a href={`mailto:${contactData.email}`} aria-label="Email"><Mail/></a></div></div><div className="footer-bottom"><span>© 2026 Karya Putra Nusantara. All rights reserved.</span><span>Jawa Timur, Indonesia</span></div></footer>;
}

function PublicHome({ data }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return <div className="site"><Header menuOpen={menuOpen} onMenu={() => setMenuOpen(v => !v)} contactData={data.contact}/><main><Hero site={data.site}/><TrustRow/><About site={data.site}/><Services services={data.services}/><Portfolio projects={data.projects}/><Clients clients={data.clients}/><News news={data.news}/><ContactSection contactData={data.contact}/></main><Footer contactData={data.contact}/><a className="wa-float" href={data.contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp"><MessageCircle/></a></div>;
}

function DetailPage({ type, item, data }) {
  const isProject = type === "project";
  if (!item) return <div className="simple-page"><Header menuOpen={false} onMenu={() => {}} contactData={data.contact}/><div className="not-found"><FileText size={36}/><h1>Data tidak ditemukan</h1><a className="btn gold" href={isProject ? "#portfolio" : "#berita-semua"}>Kembali <ArrowRight size={16}/></a></div></div>;
  return <div className="site detail-site"><Header menuOpen={false} onMenu={() => {}} contactData={data.contact}/><main className="detail-main"><a className="back-link" href={isProject ? "#portfolio" : "#berita-semua"}><ChevronLeft size={16}/> Kembali</a><div className="detail-kicker">{isProject ? "PROJECT KPN" : "KABAR & INSIGHT"}</div><h1>{item.title}</h1><div className="detail-meta">{isProject ? `${item.year} · ${item.category}` : `${item.date} · ${item.category}`}</div><Img src={item.image} alt={item.title} className="detail-cover"/><div className="detail-content"><p>{isProject ? item.desc : item.excerpt}</p><p>{isProject ? "Dokumentasi ini merupakan bagian dari portfolio KPN. Detail scope pekerjaan dapat disesuaikan dengan kebutuhan project." : "Konten insight KPN dibuat untuk membantu perusahaan memahami kebutuhan pengadaan, display digital, dan solusi pendukung proyek secara lebih praktis."}</p><a className="btn gold" href={data.contact.whatsapp} target="_blank" rel="noreferrer">Konsultasikan kebutuhan <MessageCircle size={17}/></a></div></main><Footer contactData={data.contact}/><a className="wa-float" href={data.contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp"><MessageCircle/></a></div>;
}

function AllNews({ news, contactData = contact }) {
  return <div className="site"><Header menuOpen={false} onMenu={() => {}} contactData={contactData}/><main className="listing-main"><div className="detail-kicker">KABAR & INSIGHT KPN</div><h1>Semua insight KPN.</h1><p className="listing-lead">Artikel, update, dan insight seputar pengadaan, digital display, dan solusi project.</p><div className="news-list-grid">{news.map(n => <NewsCard key={n.id} item={n}/>)}</div></main><Footer contactData={contactData}/></div>;
}

function ImageField({ value, onChange, label = "Gambar" }) {
  const ref = React.useRef(null);
  const handleFile = (e) => {
    const file = e.target.files?.[0]; if (!file) return;
    const reader = new FileReader(); reader.onload = () => onChange(reader.result); reader.readAsDataURL(file);
  };
  return <div className="image-field"><label>{label}</label><div className="image-picker"><div className="image-preview">{value ? <img src={value} alt="Preview"/> : <Upload size={26}/>}</div><div><input ref={ref} type="file" accept="image/*" onChange={handleFile} hidden/><button type="button" className="btn small" onClick={() => ref.current?.click()}><Upload size={15}/> Upload gambar</button><small>File apa saja. Tidak perlu rename.</small></div></div></div>;
}

function AdminLogin({ onSuccess }) {
  const [password, setPassword] = React.useState(""); const [error, setError] = React.useState("");
  return <div className="admin-auth"><div className="admin-auth-card"><div className="admin-logo"><Img src={imageGuide.kpnLogo} alt="KPN"/></div><span className="kicker">KPN CMS</span><h1>Admin KPN</h1><p>Kelola isi website tanpa coding.</p><input autoFocus type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && ((password === "kpnadmin" || password === "admin123") ? onSuccess() : setError("Password admin salah."))} placeholder="Password admin"/><button className="btn gold" onClick={() => (password === "kpnadmin" || password === "admin123") ? onSuccess() : setError("Password admin salah.")}>Masuk <ArrowRight size={16}/></button>{error && <span className="form-error">{error}</span>}<small>Login ini adalah proteksi ringan untuk CMS lokal.</small></div></div>;
}

function Field({ label, value, onChange, textarea = false }) {
  return <label className="form-field"><span>{label}</span>{textarea ? <textarea value={value || ""} onChange={e => onChange(e.target.value)} rows={4}/> : <input value={value || ""} onChange={e => onChange(e.target.value)}/>}</label>;
}

function DataEditor({ title, items, setItems, fields, imageKey = "image" }) {
  const blank = () => ({ id: Date.now(), [fields[0].key]: "Item baru", ...(imageKey ? {[imageKey]: ""} : {}) });
  const update = (id, key, value) => setItems(items.map(i => i.id === id ? { ...i, [key]: value } : i));
  const add = () => setItems([...items, blank()]);
  const remove = id => setItems(items.filter(i => i.id !== id));
  return <section className="admin-panel"><div className="admin-panel-head"><div><span className="kicker">CONTENT</span><h2>{title}</h2></div><button className="btn gold small" onClick={add}><Plus size={15}/> Tambah</button></div><div className="admin-list">{items.map(item => <div className="admin-item" key={item.id}><div className="admin-item-title"><strong>{item[fields[0].key] || "Item baru"}</strong><button className="icon-btn danger" onClick={() => remove(item.id)}><Trash2 size={15}/></button></div>{imageKey && <ImageField value={item[imageKey]} onChange={v => update(item.id, imageKey, v)}/>}<div className="admin-fields">{fields.map(f => <Field key={f.key} label={f.label} value={item[f.key]} onChange={v => update(item.id, f.key, v)} textarea={f.textarea}/>)}</div></div>)}</div></section>;
}

function AdminDashboard({ data, setData, logout }) {
  const [tab, setTab] = React.useState("dashboard");
  const [saved, setSaved] = React.useState(false);
  const persist = next => { setData(next); saveStore(next); setSaved(true); setTimeout(() => setSaved(false), 1200); };
  return <div className="admin-app"><header className="admin-top"><div><span className="admin-kicker">KARYA PUTRA NUSANTARA</span><strong>CMS WEBSITE</strong></div><div className="admin-actions"><a className="btn small ghost-dark" href="#home">Lihat Website</a><button className="btn small gold" onClick={() => {saveStore(data);setSaved(true);setTimeout(()=>setSaved(false),1200)}}><Save size={15}/> Simpan</button><button className="btn small outline-light" onClick={logout}>Keluar</button></div></header><div className="admin-layout"><aside className="admin-sidebar">{[["dashboard","Dashboard"],["projects","Portfolio"],["news","Insight"],["clients","Client / Partner"],["services","Layanan"],["site","Konten Utama"],["contact","Kontak"]].map(([id,label]) => <button key={id} className={tab===id?"active":""} onClick={()=>setTab(id)}>{label}</button>)}<div className="admin-sidebar-note">Upload gambar langsung dari sini. Tidak perlu masuk kode atau mengganti nama file.</div></aside><main className="admin-main">
    {tab === "dashboard" && <div className="admin-dashboard"><div className="admin-welcome"><div><span className="kicker">KPN CMS</span><h1>Kelola website<br/><em>tanpa coding.</em></h1><p>Tambah, edit, hapus konten, dan upload gambar langsung dari dashboard.</p></div><div className="admin-stat-grid"><div><strong>{data.projects.length}</strong><span>Portfolio</span></div><div><strong>{data.news.length}</strong><span>Insight</span></div><div><strong>{data.clients.length}</strong><span>Partner</span></div><div><strong>{data.services.length}</strong><span>Layanan</span></div></div></div><div className="admin-tip"><Pencil size={18}/><div><strong>Perubahan disimpan di browser ini.</strong><span>Versi saat ini cocok untuk pengelolaan konten di laptop yang sama. Untuk CMS online multi-device, nanti tinggal dihubungkan ke database + storage.</span></div></div></div>}
    {tab === "projects" && <DataEditor title="Portfolio" items={data.projects} setItems={v=>persist({...data,projects:v})} fields={[{key:"title",label:"Judul project"},{key:"category",label:"Kategori"},{key:"year",label:"Tahun"},{key:"desc",label:"Deskripsi",textarea:true}]} />}
    {tab === "news" && <DataEditor title="Insight / Berita" items={data.news} setItems={v=>persist({...data,news:v})} fields={[{key:"title",label:"Judul"},{key:"category",label:"Kategori"},{key:"date",label:"Tanggal"},{key:"excerpt",label:"Ringkasan",textarea:true}]} />}
    {tab === "clients" && <DataEditor title="Client / Project Partner" items={data.clients} setItems={v=>persist({...data,clients:v})} fields={[{key:"name",label:"Nama internal (tidak tampil di website)"}]} />}
    {tab === "services" && <DataEditor title="Layanan" items={data.services} setItems={v=>persist({...data,services:v})} fields={[{key:"title",label:"Judul layanan"},{key:"tag",label:"Label"},{key:"short",label:"Deskripsi singkat",textarea:true},{key:"desc",label:"Deskripsi detail",textarea:true}]} />}
    {tab === "site" && <section className="admin-panel"><div className="admin-panel-head"><div><span className="kicker">CONTENT</span><h2>Konten Utama</h2></div></div><ImageField label="Foto Hero" value={data.site.heroImage} onChange={v=>persist({...data,site:{...data.site,heroImage:v}})}/><ImageField label="Foto Tentang" value={data.site.aboutImage} onChange={v=>persist({...data,site:{...data.site,aboutImage:v}})}/><Field label="Hero eyebrow" value={data.site.heroEyebrow} onChange={v=>persist({...data,site:{...data.site,heroEyebrow:v}})}/><Field label="Hero title" value={data.site.heroTitle} onChange={v=>persist({...data,site:{...data.site,heroTitle:v}})} textarea/><Field label="Hero description" value={data.site.heroDesc} onChange={v=>persist({...data,site:{...data.site,heroDesc:v}})} textarea/><Field label="Judul Tentang" value={data.site.aboutTitle} onChange={v=>persist({...data,site:{...data.site,aboutTitle:v}})}/><Field label="Tentang paragraf 1" value={data.site.aboutText1} onChange={v=>persist({...data,site:{...data.site,aboutText1:v}})} textarea/><Field label="Tentang paragraf 2" value={data.site.aboutText2} onChange={v=>persist({...data,site:{...data.site,aboutText2:v}})} textarea/></section>}
    {tab === "contact" && <section className="admin-panel"><div className="admin-panel-head"><div><span className="kicker">CONTACT</span><h2>Kontak KPN</h2></div></div><Field label="Nomor WhatsApp" value={data.contact.phone} onChange={v=>persist({...data,contact:{...data.contact,phone:v,whatsapp:`https://wa.me/${v.replace(/\D/g, "")}`}})}/><Field label="Link WhatsApp" value={data.contact.whatsapp} onChange={v=>persist({...data,contact:{...data.contact,whatsapp:v}})}/><Field label="Email" value={data.contact.email} onChange={v=>persist({...data,contact:{...data.contact,email:v}})}/><Field label="Instagram" value={data.contact.instagram} onChange={v=>persist({...data,contact:{...data.contact,instagram:v}})}/><Field label="Facebook" value={data.contact.facebook} onChange={v=>persist({...data,contact:{...data.contact,facebook:v}})}/><Field label="Alamat" value={data.contact.address} onChange={v=>persist({...data,contact:{...data.contact,address:v}})} textarea/></section>}
    {saved && <div className="saved-toast"><Check size={15}/> Tersimpan</div>}
  </main></div></div>;
}

function Admin({ data, setData }) {
  const [authed, setAuthed] = React.useState(() => sessionStorage.getItem("kpn_admin") === "1");
  if (!authed) return <AdminLogin onSuccess={() => {sessionStorage.setItem("kpn_admin","1");setAuthed(true)}}/>;
  return <AdminDashboard data={data} setData={setData} logout={() => {sessionStorage.removeItem("kpn_admin");setAuthed(false)}}/>;
}

function App() {
  const [data, setData] = React.useState(readStore);
  const [route, setRoute] = React.useState(window.location.hash.replace(/^#/, "") || "home");
  React.useEffect(() => { const h=()=>setRoute(window.location.hash.replace(/^#/, "") || "home"); window.addEventListener("hashchange",h); return ()=>window.removeEventListener("hashchange",h); }, []);
  React.useEffect(() => { saveStore(data); }, [data]);
  if (route === "admin") return <Admin data={data} setData={setData}/>;
  if (route === "berita-semua") return <AllNews news={data.news} contactData={data.contact}/>;
  if (route.startsWith("project/")) return <DetailPage type="project" item={data.projects.find(p => String(p.id) === route.split("/")[1])} data={data}/>;
  if (route.startsWith("berita/")) return <DetailPage type="news" item={data.news.find(n => String(n.id) === route.split("/")[1])} data={data}/>;
  return <PublicHome data={data}/>;
}

createRoot(document.getElementById("root")).render(<App/>);
