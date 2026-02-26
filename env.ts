import { createEnv } from "@t3-oss/env-nextjs"; // or core package
import { z } from "zod";

export const env = createEnv({
      server:{
            BACKEND_URL
      },
      runtimeEnv
})