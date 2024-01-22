import { createClient } from "@supabase/supabase-js";
import { getTimestampToday } from "../../../build/_common/lib/timeFormats.mjs";

const DATABASE_URL = process.env.DATABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export const createMessageRecord = async (messageDetails, isSent) => {
  const supabase = createClient(DATABASE_URL, SUPABASE_KEY);


  const recipientPhoneNumber = messageDetails.phoneNumber;
  const createdAt = getTimestampToday();
  const bodyText = messageDetails.bodyText;

  const { data, error } = await supabase
    .from("messages")
    .insert({
      phone_number: `${recipientPhoneNumber}`,
      created_at: `${createdAt}`,
      body_text: `${bodyText}`,
      sent: isSent,
    })
    .select();
    console.log('Checking supabase data: ', data);
    console.log('Checking supabase error: ', error);
};

export default { createMessageRecord };
