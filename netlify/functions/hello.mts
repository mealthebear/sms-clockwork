import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const fruitName = Netlify.env.get("FRUIT_NAME");
  const optionsObject = { status: 200, statusText: `Hello! My fruit is ${fruitName}` };
  // const returnObject = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: `Hello! My fruit is ${fruitName}`,
  //     req: req,
  //     context: context,
  //   }),
  // };
  return new Response("Hello, world!", optionsObject);
};

export const config: Config = {
  path: ["/hello-fruit", "/wow-fruit"],
};
