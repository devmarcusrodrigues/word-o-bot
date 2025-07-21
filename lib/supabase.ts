import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://xwrrynzkongosfjgfkum.supabase.co"
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our auth
export interface User {
  id: string
  email: string
  user_metadata: {
    full_name?: string
    first_name?: string
    last_name?: string
  }
  created_at: string
}

export interface AuthError {
  message: string
  status?: number
}
