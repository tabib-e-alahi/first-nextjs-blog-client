import { createEnv } from "@t3-oss/env-nextjs"; // or core package
import { z } from "zod";

export const env = createEnv({
    server: {
        BACKEND_API: z.url(),
        FRONTEND_API: z.url(),
        API_URL: z.url(),
        AUTH_URL: z.url(),
    },
    runtimeEnv:{
        BACKEND_API: z.url(),
        FRONTEND_API: z.url(),
        API_URL: z.url(),
        AUTH_URL: z.url(),
    }
});
