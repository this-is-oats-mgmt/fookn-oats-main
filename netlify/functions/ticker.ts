import { getStore } from "@netlify/blobs";

const STORE_NAME = "ticker";
const BLOB_KEY = "current";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const store = getStore({ name: STORE_NAME, consistency: "strong" });

  // GET — return current ticker text
  if (req.method === "GET") {
    const data = await store.get(BLOB_KEY, { type: "json" });
    const ticker = data ?? { text: "", enabled: false };
    return new Response(JSON.stringify(ticker), {
      headers: { ...corsHeaders, "content-type": "application/json", "cache-control": "no-cache" },
    });
  }

  // POST — update ticker text (requires TICKER_PASSWORD env var match)
  if (req.method === "POST") {
    const password = process.env.TICKER_PASSWORD;
    const authHeader = req.headers.get("Authorization");
    const providedPassword = authHeader?.replace("Bearer ", "");

    if (password && providedPassword !== password) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "content-type": "application/json" },
      });
    }

    try {
      const body = await req.json();
      const tickerData = {
        text: typeof body.text === "string" ? body.text : "",
        enabled: typeof body.enabled === "boolean" ? body.enabled : true,
        updatedAt: new Date().toISOString(),
      };

      await store.setJSON(BLOB_KEY, tickerData);

      return new Response(JSON.stringify(tickerData), {
        headers: { ...corsHeaders, "content-type": "application/json" },
      });
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
        headers: { ...corsHeaders, "content-type": "application/json" },
      });
    }
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
};
