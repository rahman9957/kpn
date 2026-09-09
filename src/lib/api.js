import { supabase } from './supabaseClient'
import {
  defaultServices,
  defaultProjects,
  defaultNews,
  defaultClients,
  defaultProducts,
  defaultSiteCopy,
  defaultContact,
} from './seedData'

// =====================================================================
// UPLOAD GAMBAR KE SUPABASE STORAGE (BUCKET: kpn-assets)
// =====================================================================
export async function uploadImage(file) {
  if (!file) return null

  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`
    const filePath = `uploads/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('kpn-assets')
      .upload(filePath, file, { cacheControl: '3600', upsert: true })

    if (uploadError) {
      console.warn('Supabase storage upload error:', uploadError.message)
      // Fallback: create object URL or report error
      return URL.createObjectURL(file)
    }

    const { data: publicUrlData } = supabase.storage
      .from('kpn-assets')
      .getPublicUrl(filePath)

    return publicUrlData.publicUrl
  } catch (err) {
    console.error('Failed to upload image to Supabase:', err)
    return URL.createObjectURL(file)
  }
}

// =====================================================================
// FETCH ALL DATA FROM SUPABASE
// =====================================================================
export async function fetchCMSData() {
  const result = {
    services: defaultServices,
    projects: defaultProjects,
    news: defaultNews,
    clients: defaultClients,
    products: defaultProducts,
    site: defaultSiteCopy,
    contact: defaultContact,
  }

  try {
    // 1. Portfolio / Projects
    const { data: pData, error: pErr } = await supabase.from('portfolio').select('*').order('id', { ascending: true })
    if (!pErr && pData && pData.length > 0) {
      result.projects = pData.map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        year: p.year,
        desc: p.description,
        image: p.image,
      }))
    }

    // 2. Insights / Berita
    const { data: nData, error: nErr } = await supabase.from('insights').select('*').order('id', { ascending: true })
    if (!nErr && nData && nData.length > 0) {
      result.news = nData.map(n => ({
        id: n.id,
        title: n.title,
        category: n.category,
        date: n.date,
        excerpt: n.excerpt,
        content: n.content,
        image: n.image,
      }))
    }

    // 3. Clients
    const { data: cData, error: cErr } = await supabase.from('clients').select('*').order('id', { ascending: true })
    if (!cErr && cData && cData.length > 0) {
      result.clients = cData.map(c => ({
        id: c.id,
        name: c.name,
        image: c.logo || c.image,
      }))
    }

    // 4. Services
    const { data: sData, error: sErr } = await supabase.from('services').select('*').order('id', { ascending: true })
    if (!sErr && sData && sData.length > 0) {
      result.services = sData.map(s => ({
        id: s.id,
        title: s.title,
        tag: s.tag,
        short: s.short_desc || s.short,
        desc: s.description,
        image: s.image,
      }))
    }

    // 5. Products
    const { data: prodData, error: prodErr } = await supabase.from('products').select('*').order('id', { ascending: true })
    if (!prodErr && prodData && prodData.length > 0) {
      result.products = prodData.map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        desc: p.description,
        image: p.image,
      }))
    }

    // 6. Contact Settings
    const { data: ctData, error: ctErr } = await supabase.from('contact_settings').select('*').eq('id', 1).single()
    if (!ctErr && ctData) {
      result.contact = {
        phone: ctData.phone || defaultContact.phone,
        whatsapp: ctData.whatsapp || defaultContact.whatsapp,
        email: ctData.email || defaultContact.email,
        instagram: ctData.instagram || defaultContact.instagram,
        facebook: ctData.facebook || defaultContact.facebook,
        address: ctData.address || defaultContact.address,
      }
    }

    // 7. Site Copy
    const { data: scData, error: scErr } = await supabase.from('site_copy').select('*').eq('id', 1).single()
    if (!scErr && scData) {
      result.site = {
        heroImage: scData.hero_image || defaultSiteCopy.heroImage,
        aboutImage: scData.about_image || defaultSiteCopy.aboutImage,
        heroEyebrow: scData.hero_eyebrow || defaultSiteCopy.heroEyebrow,
        heroTitle: scData.hero_title || defaultSiteCopy.heroTitle,
        heroDesc: scData.hero_desc || defaultSiteCopy.heroDesc,
        aboutTitle: scData.about_title || defaultSiteCopy.aboutTitle,
        aboutText1: scData.about_text1 || defaultSiteCopy.aboutText1,
        aboutText2: scData.about_text2 || defaultSiteCopy.aboutText2,
      }
    }
  } catch (e) {
    console.error('Error fetching CMS data from Supabase:', e)
  }

  return result
}

// =====================================================================
// PORTFOLIO CRUD
// =====================================================================
export async function addProject(project) {
  const payload = {
    title: project.title || 'Project Baru',
    category: project.category || 'General',
    year: project.year || String(new Date().getFullYear()),
    description: project.desc || '',
    image: project.image || '',
  }
  const { data, error } = await supabase.from('portfolio').insert([payload]).select()
  if (error) throw error
  return data?.[0] ? { ...project, id: data[0].id } : project
}

export async function updateProject(project) {
  const payload = {
    title: project.title,
    category: project.category,
    year: project.year,
    description: project.desc,
    image: project.image,
    updated_at: new Date().toISOString(),
  }
  const { error } = await supabase.from('portfolio').update(payload).eq('id', project.id)
  if (error) throw error
  return project
}

export async function deleteProject(id) {
  const { error } = await supabase.from('portfolio').delete().eq('id', id)
  if (error) throw error
}

// =====================================================================
// INSIGHTS / BERITA CRUD
// =====================================================================
export async function addNews(item) {
  const payload = {
    title: item.title || 'Insight Baru',
    category: item.category || 'Berita',
    date: item.date || new Date().toLocaleDateString('id-ID'),
    excerpt: item.excerpt || '',
    content: item.content || item.excerpt || '',
    image: item.image || '',
  }
  const { data, error } = await supabase.from('insights').insert([payload]).select()
  if (error) throw error
  return data?.[0] ? { ...item, id: data[0].id } : item
}

export async function updateNews(item) {
  const payload = {
    title: item.title,
    category: item.category,
    date: item.date,
    excerpt: item.excerpt,
    content: item.content || item.excerpt,
    image: item.image,
    updated_at: new Date().toISOString(),
  }
  const { error } = await supabase.from('insights').update(payload).eq('id', item.id)
  if (error) throw error
  return item
}

export async function deleteNews(id) {
  const { error } = await supabase.from('insights').delete().eq('id', id)
  if (error) throw error
}

// =====================================================================
// CLIENTS CRUD
// =====================================================================
export async function addClient(client) {
  const payload = {
    name: client.name || 'Client Baru',
    logo: client.image || '',
  }
  const { data, error } = await supabase.from('clients').insert([payload]).select()
  if (error) throw error
  return data?.[0] ? { ...client, id: data[0].id } : client
}

export async function updateClient(client) {
  const payload = {
    name: client.name,
    logo: client.image,
    updated_at: new Date().toISOString(),
  }
  const { error } = await supabase.from('clients').update(payload).eq('id', client.id)
  if (error) throw error
  return client
}

export async function deleteClient(id) {
  const { error } = await supabase.from('clients').delete().eq('id', id)
  if (error) throw error
}

// =====================================================================
// SERVICES CRUD
// =====================================================================
export async function addService(service) {
  const payload = {
    title: service.title || 'Layanan Baru',
    tag: service.tag || 'SERVICE',
    short_desc: service.short || '',
    description: service.desc || '',
    image: service.image || '',
  }
  const { data, error } = await supabase.from('services').insert([payload]).select()
  if (error) throw error
  return data?.[0] ? { ...service, id: data[0].id } : service
}

export async function updateService(service) {
  const payload = {
    title: service.title,
    tag: service.tag,
    short_desc: service.short,
    description: service.desc,
    image: service.image,
    updated_at: new Date().toISOString(),
  }
  const { error } = await supabase.from('services').update(payload).eq('id', service.id)
  if (error) throw error
  return service
}

export async function deleteService(id) {
  const { error } = await supabase.from('services').delete().eq('id', id)
  if (error) throw error
}

// =====================================================================
// PRODUCTS CRUD
// =====================================================================
export async function addProduct(product) {
  const payload = {
    title: product.title || 'Produk Baru',
    category: product.category || 'General',
    description: product.desc || '',
    image: product.image || '',
  }
  const { data, error } = await supabase.from('products').insert([payload]).select()
  if (error) throw error
  return data?.[0] ? { ...product, id: data[0].id } : product
}

export async function updateProduct(product) {
  const payload = {
    title: product.title,
    category: product.category,
    description: product.desc,
    image: product.image,
    updated_at: new Date().toISOString(),
  }
  const { error } = await supabase.from('products').update(payload).eq('id', product.id)
  if (error) throw error
  return product
}

export async function deleteProduct(id) {
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) throw error
}

// =====================================================================
// CONTACT & SITE COPY UPDATES
// =====================================================================
export async function updateContact(contact) {
  const payload = {
    id: 1,
    phone: contact.phone,
    whatsapp: contact.whatsapp,
    email: contact.email,
    instagram: contact.instagram,
    facebook: contact.facebook,
    address: contact.address,
    updated_at: new Date().toISOString(),
  }
  const { error } = await supabase.from('contact_settings').upsert(payload)
  if (error) throw error
  return contact
}

export async function updateSiteCopy(site) {
  const payload = {
    id: 1,
    hero_image: site.heroImage,
    about_image: site.aboutImage,
    hero_eyebrow: site.heroEyebrow,
    hero_title: site.heroTitle,
    hero_desc: site.heroDesc,
    about_title: site.aboutTitle,
    about_text1: site.aboutText1,
    about_text2: site.aboutText2,
    updated_at: new Date().toISOString(),
  }
  const { error } = await supabase.from('site_copy').upsert(payload)
  if (error) throw error
  return site
}
