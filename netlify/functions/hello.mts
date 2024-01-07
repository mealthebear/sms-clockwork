import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context): Promise<Response> => {
  const fruitName = Netlify.env.get("FRUIT_NAME");
  const optionsObject = { status: 200, statusText: `Hello! My fruit is ${fruitName}` };
  return new Response(JSON.stringify(optionsObject));
};

export const config: Config = {
  path: ["/hello-fruit", "/wow-fruit"],
};
