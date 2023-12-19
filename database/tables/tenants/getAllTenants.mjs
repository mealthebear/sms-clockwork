import { createClient } from "@supabase/supabase-js";

const DATABASE_URL = process.env.DATABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const supabase = createClient(DATABASE_URL, SUPABASE_KEY);

const { data, error } = await supabase.from("tenants").select();

console.log('Success! Data retrieved: ', data);
console.log('Error! Retrieving rows failed: ', error);
