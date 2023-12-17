import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const fruitName = Netlify.env.get("FRUIT_NAME");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello! My fruit is ${fruitName}`,
      req: req,
      context: context,
    }),
  };
};

export const config: Config = {
  path: ["/hello-fruit", "/wow-fruit"],
};
