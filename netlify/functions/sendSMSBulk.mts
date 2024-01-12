import type { Context, Config } from "@netlify/functions";
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
  }

  try {
    return new Response("Placeholder value");
  } catch (err) {
    return new Response(JSON.stringify(err));
  }
};
