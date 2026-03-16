import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fwugdgiqzkymefiwcqfc.supabase.co";
const supabaseKey = "sb_publishable_JGDKT0i12a5lX43FL-TjxQ_BuXTNfJM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
