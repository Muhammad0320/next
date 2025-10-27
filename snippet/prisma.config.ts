import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";
import path from "path";

// Load the .env file next to this config file so Prisma can read DATABASE_URL
// even if the process is started from a different working directory.
dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
