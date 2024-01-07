import type { Config, Context } from "@netlify/functions";
import pkg from "twilio";
const { Twilio } = pkg;

export default async (req: Request, context: Context): Promise<Response> => {
  const AUTH_TOKEN = Netlify.env.get("AUTH_TOKEN");
  const { creds } = context.params;

  if (creds !== AUTH_TOKEN) {
    const errorBody = JSON.stringify({
      status: 500,
      statusText: "Uh oh, something went wrong.",
    });
    return new Response(errorBody);
  } else {
    const TWILIO_SID = Netlify.env.get("TWILIO_SID");
    const TWILIO_TOKEN = Netlify.env.get("TWILIO_TOKEN");
    const SENDER_PHONE_NUMBER = Netlify.env.get("SENDER_PHONE_NUMBER");
    const { phone_number: recipientPhoneNumber } = context.params;

    const client = new Twilio(TWILIO_SID, TWILIO_TOKEN);

    try {
      const message = await client.messages.create({
        from: `${SENDER_PHONE_NUMBER}`,
        to: `${recipientPhoneNumber}`,
        body: "Hello, World!",
      });
      return new Response(JSON.stringify(message));
    } catch (err) {
      return new Response(JSON.stringify(err));
    }
  }
};

export const config: Config = {
  path: ["/send/:phone_number/:creds"],
};
