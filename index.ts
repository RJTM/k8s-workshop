import { match } from "ts-pattern";

Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    console.log(`GET - ${url.pathname}`);

    return match(url.pathname)
      .returnType<Response>()
      .with("/", () => new Response("Bun!"))
      .with("/hello", () => new Response("Hello, World!"))
      .with("/fail", () => {
        console.error("Whoops, something failed");
        throw new Response("Failed!", { status: 500 });
      })
      .with("/healthcheck", () => {
        return new Response("OK!");
      })
      .otherwise(() => new Response("Not found!", { status: 404 }));
  },
});
