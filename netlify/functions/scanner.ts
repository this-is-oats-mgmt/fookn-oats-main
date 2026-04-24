export default async (req: Request) => {
  return new Response(JSON.stringify({ status: "ok" }), {
    headers: { "content-type": "application/json" },
  });
};
