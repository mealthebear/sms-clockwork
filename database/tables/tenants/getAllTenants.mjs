import { createClient } from "@supabase/supabase-js";

const DATABASE_URL = process.env.DATABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export const getAllTenants = async () => {
  const supabase = createClient(DATABASE_URL, SUPABASE_KEY);

  const { data, error } = await supabase.from("tenants").select();

  if (data) {
    const tenantList = [];

    for (let index = 0; index < data.length; index++) {
      const phoneNumber = data[index].phone_number;
      const bodyText = data[index].body_text;
      const tenantDetails = {
        phoneNumber: `${phoneNumber}`,
        bodyText: `${bodyText}`,
      };
      tenantList.push(tenantDetails);
    }
    return tenantList;
  } else {
    return error;
  }
};

export default { getAllTenants };
