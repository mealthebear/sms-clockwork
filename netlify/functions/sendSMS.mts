import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context): Promise<Response> => {
  const TWILIO_SID = Netlify.env.get("TWILIO_SID");
  const TWILIO_TOKEN = Netlify.env.get("TWILIO_TOKEN");
  const SENDER_PHONE_NUMBER = Netlify.env.get("SENDER_PHONE_NUMBER");
  const { phone_number: recipientPhoneNumber } = context.params;

  const client = require("twilio")(TWILIO_SID, TWILIO_TOKEN);

  try {
    const message = await client.messages.create({
      from: `${SENDER_PHONE_NUMBER}`,
      to: `${recipientPhoneNumber}`,
      body: "Hello, World!",
    });
    console.log("Successfully sent SMS message: ", message);
    return new Response(JSON.stringify(message));
  } catch (err) {
    console.log("Error sending SMS message: ", err);
    return new Response(JSON.stringify(err));
  }
};

export const config: Config = {
  path: ["/send/:phone_number"],
};
