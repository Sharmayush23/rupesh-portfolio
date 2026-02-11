import serverless from "serverless-http";
import { app, init } from "../server/app";

let initialized = false;
const serverlessHandler = serverless(app);

export const handler = async (event: any, context: any) => {
    if (!initialized) {
        await init();
        initialized = true;
    }
    return serverlessHandler(event, context);
};
