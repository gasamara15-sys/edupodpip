import { sbServer } from "@/lib/supabaseClient";

export async function requireUser() {
  const supabase = sbServer();
  const { data: { user } } = await supabase.auth.getUser();
  return { supabase, user };
}

