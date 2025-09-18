import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://djuhnuveyiuekjffbjee.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdWhudXZleWl1ZWtqZmZiamVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NDQyNTYsImV4cCI6MjA2MjUyMDI1Nn0.5_FB-GTr1OwRrJzvLUU2Dys8ayvxHY5sI6rUDyCB2yE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
