import { app, httpServer, log, init } from "./app";
import { serveStatic } from "./static";

(async () => {
  await init();

  if (process.env.NODE_ENV === "production") {
    // In local production mode (e.g. npm start), we serve static files.
    // NOTE: On Netlify, this file (index.ts) is NOT used, and static files 
    // are served directly by Netlify via the redirects in netlify.toml.
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // Only start the server when running this file directly (not as a function)
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
