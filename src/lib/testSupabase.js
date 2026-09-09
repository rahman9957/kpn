import { supabase } from './supabaseClient'

export async function testSupabaseConnection() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .limit(1)

  if (error) {
    console.error('Supabase error:', error)
    return
  }

  console.log('Supabase berhasil terhubung:', data)
}
