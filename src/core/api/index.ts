import { env } from "../../config";

export async function getStores() {
  const res = await fetch(env.API_URL);
  return res.json();
}
