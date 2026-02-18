// Interface for Cloudflare Worker Bindings
interface Env {
  DB: D1Database;
  R2_BUCKET: R2Bucket;
  EMAILS: any; // Add specific types if known
}
