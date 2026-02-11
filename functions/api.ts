import serverless from "serverless-http";
import { app } from "../server/app";

// The app in server/app.ts already has middleware and routes registered.
export const handler = serverless(app);
