import { createClient } from "@supabase/supabase-js";
import { getTimestampToday } from "../../../build/_common/lib/timeFormats.mjs";

const DATABASE_URL = process.env.DATABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const currentDate = getTimestampToday();
const tenantName = "";
const phoneNumber = "";

const supabase = createClient(DATABASE_URL, SUPABASE_KEY);

const { data, error } = await supabase
  .from("tenants")
  .insert({
    created_at: `${currentDate}`,
    name: `${tenantName}`,
    phone_number: `${phoneNumber}`,
  })
  .select();

console.log("Success! Tenant created: ", data);
console.log("Error! Failed to create tenant: ", error);
