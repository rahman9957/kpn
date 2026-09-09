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
  MapPin,
  Loader2,
} from "lucide-react";
import "./styles.css";

import {
  fetchCMSData,
  uploadImage,
  addProject,
  updateProject,
  deleteProject,
  addNews,
  updateNews,
  deleteNews,
  addClient,
  updateClient,
  deleteClient,
  addService,
  updateService,
  deleteService,
  addProduct,
  updateProduct,
  deleteProduct,
  updateContact,
  updateSiteCopy,
} from "./lib/api";

import { imageGuide, defaultContact } from "./lib/seedData";

function Img({ src, alt = "", className = "" }) {
  return <img className={className} src={src} alt={alt} loading="lazy" onError={(e) => { e.currentTarget.style.opacity = "0"; }} />;
}

function go(path) { window.location.hash = path.startsWith("#") ? path : `#${path}`; }

function Header({ onMenu, menuOpen, contactData = defaultContact }) {
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
      <h1>{site.heroTitle && site.heroTitle.includes(" Untuk ") ? <>{site.heroTitle.split(" Untuk ")[0]}<br/><span>Untuk {site.heroTitle.split(" Untuk ")[1]}</span></> : site.heroTitle}</h1>
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
  const titleParts = (site.aboutTitle || "").split(" ");
  return <section id="tentang" className="section about-section">
    <div className="about-copy">
      <div className="kicker">WHY KARYA PUTRA NUSANTARA</div>
      <h2>{titleParts.slice(0, 3).join(" ")}<br/><em>{titleParts.slice(3).join(" ")}</em></h2>
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
    <div className="services-mosaic">{(services || []).map((s, i) => <article className={`service-card service-card-${i+1}`} key={s.id}>
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
  const filtered = (projects || []).filter((p) => `${p.title} ${p.category} ${p.desc}`.toLowerCase().includes(query.toLowerCase()));
  return <section id="portfolio" className="portfolio-section">
    <div className="section portfolio-inner"><div className="section-head dark-head"><div><div className="kicker light-kicker">SELECTED PROJECTS</div><h2>Project yang<br/><em>telah kami kerjakan.</em></h2></div><div className="portfolio-search"><Search size={16}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari project..."/></div></div>
      <div className="project-grid">{filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i}/>)}</div>
      {!filtered.length && <div className="empty-state dark-empty">Project tidak ditemukan.</div>}
    </div>
  </section>;
}

function Clients({ clients }) {
  return <section className="section clients-section"><div className="clients-intro"><div><div className="kicker">CLIENTS & PROJECT PARTNERS</div><h2>Dipercaya untuk<br/><em>berbagai kebutuhan proyek.</em></h2></div><p>Beberapa partner di bawah merupakan dokumentasi project KPN. Logo ditampilkan apa adanya tanpa teks tambahan agar tetap clean.</p></div><div className="logo-grid-clean">{(clients || []).map(c => <div className="client-logo-clean" key={c.id}><Img src={c.image} alt={c.name}/></div>)}</div></section>;
}

function NewsCard({ item, feature = false }) {
  return <article className={`news-card ${feature ? "feature" : ""}`} onClick={() => go(`berita/${item.id}`)} role="link" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && go(`berita/${item.id}`)}>
    <div className="news-image"><Img src={item.image} alt={item.title}/><span>{item.category}</span></div>
    <div className="news-copy"><small>{item.date}</small><h3>{item.title}</h3><p>{item.excerpt}</p><span className="news-link">Baca insight <ArrowRight size={14}/></span></div>
  </article>;
}

function News({ news }) {
  return <section id="berita" className="section news-section"><div className="section-head news-head"><div><div className="kicker">KABAR & INSIGHT KPN</div><h2>Informasi terbaru,<br/><em>dari KPN.</em></h2></div><a className="text-link" href="#berita-semua">Lihat semua kabar <ArrowRight size={15}/></a></div><div className="news-layout">{(news || []).slice(0, 3).map((n, i) => <NewsCard key={n.id} item={n} feature={i === 0}/>)}</div></section>;
}

function ContactSection({ contactData = defaultContact }) {
  return <section id="kontak" className="contact-section"><div className="contact-glow"/><div className="contact-copy"><div className="kicker light-kicker">LET'S WORK TOGETHER</div><h2>Punya kebutuhan<br/><em>untuk proyek Anda?</em></h2><p>Ceritakan kebutuhan barang, jasa, atau proyek Anda. Tim KPN siap membantu mencari solusi yang sesuai.</p><a className="btn gold large" href={contactData.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Hubungi KPN</a></div><div className="contact-side"><a href={contactData.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp <strong>{contactData.phone}</strong></a><a href={`mailto:${contactData.email}`}><Mail/> Email <strong>{contactData.email}</strong></a><div><MapPin/> <span>{contactData.address}</span></div></div></section>;
}

function Footer({ contactData = defaultContact }) {
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

function AllNews({ news, contactData = defaultContact }) {
  return <div className="site"><Header menuOpen={false} onMenu={() => {}} contactData={contactData}/><main className="listing-main"><div className="detail-kicker">KABAR & INSIGHT KPN</div><h1>Semua insight KPN.</h1><p className="listing-lead">Artikel, update, dan insight seputar pengadaan, digital display, dan solusi project.</p><div className="news-list-grid">{(news || []).map(n => <NewsCard key={n.id} item={n}/>)}</div></main><Footer contactData={contactData}/></div>;
}

// =====================================================================
// COMPONENT UPLOAD GAMBAR DENGAN SUPABASE STORAGE
// =====================================================================
function ImageField({ value, onChange, label = "Gambar" }) {
  const ref = React.useRef(null);
  const [uploading, setUploading] = React.useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const publicUrl = await uploadImage(file);
      if (publicUrl) {
        onChange(publicUrl);
      }
    } catch (err) {
      console.error("Gagal mengupload gambar:", err);
      alert("Gagal mengupload gambar ke Supabase Storage.");
    } finally {
      setUploading(false);
    }
  };

  return <div className="image-field">
    <label>{label}</label>
    <div className="image-picker">
      <div className="image-preview">
        {uploading ? <Loader2 size={26} className="animate-spin" /> : (value ? <img src={value} alt="Preview"/> : <Upload size={26}/>)}
      </div>
      <div>
        <input ref={ref} type="file" accept="image/*" onChange={handleFile} hidden />
        <button type="button" className="btn small" disabled={uploading} onClick={() => ref.current?.click()}>
          {uploading ? <Loader2 size={15} className="animate-spin"/> : <Upload size={15}/>} 
          {uploading ? " Uploading ke Supabase..." : " Upload gambar ke Supabase"}
        </button>
        <small>Gambar langsung diupload ke Supabase Storage bucket (kpn-assets).</small>
      </div>
    </div>
  </div>;
}

function AdminLogin({ onSuccess }) {
  const [password, setPassword] = React.useState(""); const [error, setError] = React.useState("");
  return <div className="admin-auth"><div className="admin-auth-card"><div className="admin-logo"><Img src={imageGuide.kpnLogo} alt="KPN"/></div><span className="kicker">KPN CMS</span><h1>Admin KPN</h1><p>Kelola isi website terhubung Supabase Database & Storage.</p><input autoFocus type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && ((password === "kpnadmin" || password === "admin123") ? onSuccess() : setError("Password admin salah."))} placeholder="Password admin"/><button className="btn gold" onClick={() => (password === "kpnadmin" || password === "admin123") ? onSuccess() : setError("Password admin salah.")}>Masuk <ArrowRight size={16}/></button>{error && <span className="form-error">{error}</span>}<small>Sistem CMS Admin KPN terhubung langsung ke Supabase.</small></div></div>;
}

function Field({ label, value, onChange, textarea = false }) {
  return <label className="form-field"><span>{label}</span>{textarea ? <textarea value={value || ""} onChange={e => onChange(e.target.value)} rows={4}/> : <input value={value || ""} onChange={e => onChange(e.target.value)}/>}</label>;
}

// =====================================================================
// DATA EDITOR DENGAN INTEGRASI SUPABASE CRUD
// =====================================================================
function DataEditor({ title, items, onAdd, onUpdate, onDelete, fields, imageKey = "image" }) {
  const [loading, setLoading] = React.useState(false);

  const handleUpdate = async (id, key, val) => {
    const target = items.find(i => i.id === id);
    if (!target) return;
    const updated = { ...target, [key]: val };
    try {
      await onUpdate(updated);
    } catch (e) {
      console.error("Update failed:", e);
    }
  };

  const handleAdd = async () => {
    setLoading(true);
    try {
      await onAdd();
    } catch (e) {
      console.error("Add failed:", e);
      alert("Gagal menambah data ke Supabase: " + (e.message || e));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus item ini dari Supabase?")) return;
    setLoading(true);
    try {
      await onDelete(id);
    } catch (e) {
      console.error("Delete failed:", e);
      alert("Gagal menghapus data dari Supabase: " + (e.message || e));
    } finally {
      setLoading(false);
    }
  };

  return <section className="admin-panel">
    <div className="admin-panel-head">
      <div><span className="kicker">SUPABASE DATABASE</span><h2>{title}</h2></div>
      <button className="btn gold small" disabled={loading} onClick={handleAdd}>
        <Plus size={15}/> Tambah Baru
      </button>
    </div>
    <div className="admin-list">
      {(items || []).map(item => <div className="admin-item" key={item.id}>
        <div className="admin-item-title">
          <strong>{item[fields[0].key] || "Item baru"}</strong>
          <button className="icon-btn danger" disabled={loading} onClick={() => handleDelete(item.id)}>
            <Trash2 size={15}/>
          </button>
        </div>
        {imageKey && <ImageField value={item[imageKey]} onChange={v => handleUpdate(item.id, imageKey, v)} />}
        <div className="admin-fields">
          {fields.map(f => <Field key={f.key} label={f.label} value={item[f.key]} onChange={v => handleUpdate(item.id, f.key, v)} textarea={f.textarea} />)}
        </div>
      </div>)}
    </div>
  </section>;
}

function AdminDashboard({ data, setData, logout }) {
  const [tab, setTab] = React.useState("dashboard");
  const [saved, setSaved] = React.useState(false);

  const showSavedNotice = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  // CRUD Handlers
  const handleAddProject = async () => {
    const newItem = await addProject({ title: "Project Baru", category: "Videotron", year: "2026", desc: "Deskripsi project...", image: imageGuide.project1 });
    setData(prev => ({ ...prev, projects: [...prev.projects, newItem] }));
    showSavedNotice();
  };
  const handleUpdateProject = async (proj) => {
    await updateProject(proj);
    setData(prev => ({ ...prev, projects: prev.projects.map(p => p.id === proj.id ? proj : p) }));
    showSavedNotice();
  };
  const handleDeleteProject = async (id) => {
    await deleteProject(id);
    setData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
    showSavedNotice();
  };

  const handleAddNews = async () => {
    const newItem = await addNews({ title: "Insight Baru", category: "Berita", date: "Hari ini", excerpt: "Ringkasan...", image: imageGuide.news1 });
    setData(prev => ({ ...prev, news: [...prev.news, newItem] }));
    showSavedNotice();
  };
  const handleUpdateNews = async (n) => {
    await updateNews(n);
    setData(prev => ({ ...prev, news: prev.news.map(item => item.id === n.id ? n : item) }));
    showSavedNotice();
  };
  const handleDeleteNews = async (id) => {
    await deleteNews(id);
    setData(prev => ({ ...prev, news: prev.news.filter(n => n.id !== id) }));
    showSavedNotice();
  };

  const handleAddClient = async () => {
    const newItem = await addClient({ name: "Partner Baru", image: imageGuide.pertamina });
    setData(prev => ({ ...prev, clients: [...prev.clients, newItem] }));
    showSavedNotice();
  };
  const handleUpdateClient = async (c) => {
    await updateClient(c);
    setData(prev => ({ ...prev, clients: prev.clients.map(item => item.id === c.id ? c : item) }));
    showSavedNotice();
  };
  const handleDeleteClient = async (id) => {
    await deleteClient(id);
    setData(prev => ({ ...prev, clients: prev.clients.filter(c => c.id !== id) }));
    showSavedNotice();
  };

  const handleAddService = async () => {
    const newItem = await addService({ title: "Layanan Baru", tag: "SERVICE", short: "Deskripsi singkat", desc: "Deskripsi lengkap", image: imageGuide.service1 });
    setData(prev => ({ ...prev, services: [...prev.services, newItem] }));
    showSavedNotice();
  };
  const handleUpdateService = async (s) => {
    await updateService(s);
    setData(prev => ({ ...prev, services: prev.services.map(item => item.id === s.id ? s : item) }));
    showSavedNotice();
  };
  const handleDeleteService = async (id) => {
    await deleteService(id);
    setData(prev => ({ ...prev, services: prev.services.filter(s => s.id !== id) }));
    showSavedNotice();
  };

  const handleAddProduct = async () => {
    const newItem = await addProduct({ title: "Produk Baru", category: "Solusi", desc: "Deskripsi produk...", image: imageGuide.service1 });
    setData(prev => ({ ...prev, products: [...(prev.products || []), newItem] }));
    showSavedNotice();
  };
  const handleUpdateProduct = async (p) => {
    await updateProduct(p);
    setData(prev => ({ ...prev, products: (prev.products || []).map(item => item.id === p.id ? p : item) }));
    showSavedNotice();
  };
  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setData(prev => ({ ...prev, products: (prev.products || []).filter(p => p.id !== id) }));
    showSavedNotice();
  };

  const handleSaveSite = async () => {
    await updateSiteCopy(data.site);
    showSavedNotice();
  };

  const handleSaveContact = async () => {
    await updateContact(data.contact);
    showSavedNotice();
  };

  return <div className="admin-app">
    <header className="admin-top">
      <div><span className="admin-kicker">KARYA PUTRA NUSANTARA</span><strong>CMS WEBSITE (SUPABASE)</strong></div>
      <div className="admin-actions">
        <a className="btn small ghost-dark" href="#home">Lihat Website</a>
        <button className="btn small gold" onClick={() => { handleSaveSite(); handleSaveContact(); }}>
          <Save size={15}/> Simpan Perubahan
        </button>
        <button className="btn small outline-light" onClick={logout}>Keluar</button>
      </div>
    </header>
    <div className="admin-layout">
      <aside className="admin-sidebar">
        {[
          ["dashboard","Dashboard"],
          ["projects","Portfolio"],
          ["news","Insight"],
          ["clients","Client / Partner"],
          ["services","Layanan"],
          ["products","Produk / Solusi"],
          ["site","Konten Utama"],
          ["contact","Kontak"],
        ].map(([id,label]) => <button key={id} className={tab===id?"active":""} onClick={()=>setTab(id)}>{label}</button>)}
        <div className="admin-sidebar-note">Semua data dan upload gambar langsung tersimpan ke Supabase Database & Storage.</div>
      </aside>
      <main className="admin-main">
        {tab === "dashboard" && <div className="admin-dashboard">
          <div className="admin-welcome">
            <div>
              <span className="kicker">KPN CMS SUPABASE</span>
              <h1>Kelola website<br/><em>terkoneksi cloud.</em></h1>
              <p>Setiap perubahan data dan gambar langsung terdistribusi ke Supabase.</p>
            </div>
            <div className="admin-stat-grid">
              <div><strong>{data.projects?.length || 0}</strong><span>Portfolio</span></div>
              <div><strong>{data.news?.length || 0}</strong><span>Insight</span></div>
              <div><strong>{data.clients?.length || 0}</strong><span>Partner</span></div>
              <div><strong>{data.services?.length || 0}</strong><span>Layanan</span></div>
            </div>
          </div>
          <div className="admin-tip">
            <Pencil size={18}/>
            <div>
              <strong>CMS Terhubung ke Supabase Database & Storage.</strong>
              <span>Perubahan di Admin langsung terlihat di semua perangkat dan website publik yang dideploy di Vercel.</span>
            </div>
          </div>
        </div>}

        {tab === "projects" && <DataEditor title="Portfolio" items={data.projects} onAdd={handleAddProject} onUpdate={handleUpdateProject} onDelete={handleDeleteProject} fields={[{key:"title",label:"Judul project"},{key:"category",label:"Kategori"},{key:"year",label:"Tahun"},{key:"desc",label:"Deskripsi",textarea:true}]} />}
        {tab === "news" && <DataEditor title="Insight / Berita" items={data.news} onAdd={handleAddNews} onUpdate={handleUpdateNews} onDelete={handleDeleteNews} fields={[{key:"title",label:"Judul"},{key:"category",label:"Kategori"},{key:"date",label:"Tanggal"},{key:"excerpt",label:"Ringkasan",textarea:true}]} />}
        {tab === "clients" && <DataEditor title="Client / Project Partner" items={data.clients} onAdd={handleAddClient} onUpdate={handleUpdateClient} onDelete={handleDeleteClient} fields={[{key:"name",label:"Nama Partner"}]} />}
        {tab === "services" && <DataEditor title="Layanan" items={data.services} onAdd={handleAddService} onUpdate={handleUpdateService} onDelete={handleDeleteService} fields={[{key:"title",label:"Judul layanan"},{key:"tag",label:"Label"},{key:"short",label:"Deskripsi singkat",textarea:true},{key:"desc",label:"Deskripsi detail",textarea:true}]} />}
        {tab === "products" && <DataEditor title="Produk / Solusi" items={data.products} onAdd={handleAddProduct} onUpdate={handleUpdateProduct} onDelete={handleDeleteProduct} fields={[{key:"title",label:"Judul produk"},{key:"category",label:"Kategori"},{key:"desc",label:"Deskripsi produk",textarea:true}]} />}
        
        {tab === "site" && <section className="admin-panel">
          <div className="admin-panel-head"><div><span className="kicker">CONTENT</span><h2>Konten Utama Website</h2></div></div>
          <ImageField label="Foto Hero" value={data.site.heroImage} onChange={v => { setData(d => ({ ...d, site: { ...d.site, heroImage: v } })); updateSiteCopy({ ...data.site, heroImage: v }); showSavedNotice(); }} />
          <ImageField label="Foto Tentang" value={data.site.aboutImage} onChange={v => { setData(d => ({ ...d, site: { ...d.site, aboutImage: v } })); updateSiteCopy({ ...data.site, aboutImage: v }); showSavedNotice(); }} />
          <Field label="Hero Eyebrow" value={data.site.heroEyebrow} onChange={v => setData(d => ({ ...d, site: { ...d.site, heroEyebrow: v } }))} />
          <Field label="Hero Title" value={data.site.heroTitle} onChange={v => setData(d => ({ ...d, site: { ...d.site, heroTitle: v } }))} textarea />
          <Field label="Hero Description" value={data.site.heroDesc} onChange={v => setData(d => ({ ...d, site: { ...d.site, heroDesc: v } }))} textarea />
          <Field label="Judul Tentang" value={data.site.aboutTitle} onChange={v => setData(d => ({ ...d, site: { ...d.site, aboutTitle: v } }))} />
          <Field label="Tentang Paragraf 1" value={data.site.aboutText1} onChange={v => setData(d => ({ ...d, site: { ...d.site, aboutText1: v } }))} textarea />
          <Field label="Tentang Paragraf 2" value={data.site.aboutText2} onChange={v => setData(d => ({ ...d, site: { ...d.site, aboutText2: v } }))} textarea />
          <button className="btn gold" onClick={handleSaveSite} style={{ marginTop: 15 }}><Save size={16}/> Simpan Konten Utama</button>
        </section>}

        {tab === "contact" && <section className="admin-panel">
          <div className="admin-panel-head"><div><span className="kicker">CONTACT</span><h2>Kontak KPN</h2></div></div>
          <Field label="Nomor Phone" value={data.contact.phone} onChange={v => setData(d => ({ ...d, contact: { ...d.contact, phone: v, whatsapp: `https://wa.me/${v.replace(/\D/g, "")}` } }))} />
          <Field label="Link WhatsApp" value={data.contact.whatsapp} onChange={v => setData(d => ({ ...d, contact: { ...d.contact, whatsapp: v } }))} />
          <Field label="Email" value={data.contact.email} onChange={v => setData(d => ({ ...d, contact: { ...d.contact, email: v } }))} />
          <Field label="Instagram" value={data.contact.instagram} onChange={v => setData(d => ({ ...d, contact: { ...d.contact, instagram: v } }))} />
          <Field label="Facebook" value={data.contact.facebook} onChange={v => setData(d => ({ ...d, contact: { ...d.contact, facebook: v } }))} />
          <Field label="Alamat" value={data.contact.address} onChange={v => setData(d => ({ ...d, contact: { ...d.contact, address: v } }))} textarea />
          <button className="btn gold" onClick={handleSaveContact} style={{ marginTop: 15 }}><Save size={16}/> Simpan Kontak</button>
        </section>}

        {saved && <div className="saved-toast"><Check size={15}/> Tersimpan di Supabase</div>}
      </main>
    </div>
  </div>;
}

function Admin({ data, setData }) {
  const [authed, setAuthed] = React.useState(false);
  if (!authed) return <AdminLogin onSuccess={() => setAuthed(true)}/>;
  return <AdminDashboard data={data} setData={setData} logout={() => setAuthed(false)}/>;
}

function App() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [route, setRoute] = React.useState(window.location.hash.replace(/^#/, "") || "home");

  React.useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.replace(/^#/, "") || "home");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const cmsData = await fetchCMSData();
        setData(cmsData);
      } catch (err) {
        console.error("Gagal memuat data CMS dari Supabase:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !data) {
    return <div className="simple-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column' }}>
      <Loader2 size={36} className="animate-spin" style={{ marginBottom: 16 }} />
      <p style={{ color: '#aaa' }}>Memuat data KPN dari Supabase Cloud...</p>
    </div>;
  }

  if (route === "admin") return <Admin data={data} setData={setData}/>;
  if (route === "berita-semua") return <AllNews news={data.news} contactData={data.contact}/>;
  if (route.startsWith("project/")) return <DetailPage type="project" item={(data.projects || []).find(p => String(p.id) === route.split("/")[1])} data={data}/>;
  if (route.startsWith("berita/")) return <DetailPage type="news" item={(data.news || []).find(n => String(n.id) === route.split("/")[1])} data={data}/>;
  return <PublicHome data={data}/>;
}

createRoot(document.getElementById("root")).render(<App/>);
