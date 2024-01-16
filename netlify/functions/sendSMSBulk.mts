import type { Context, Config } from "@netlify/functions";
import { getAllTenants } from "../../database/tables/tenants/getAllTenants.mjs";
import { createSMSPromiseList } from "../../build/_common/lib/createBulkSMSSend.mjs";

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
    const tenantList = await getAllTenants();
    createSMSPromiseList(tenantList);

    return new Response("Bulk SMS Sent Successfully!");
  } catch (err) {
    return new Response(JSON.stringify(err));
  }
};

export const config: Config = {
  path: ["/send-bulk/:creds"],
};
