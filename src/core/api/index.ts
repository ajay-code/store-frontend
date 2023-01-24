import { env } from "../../config";
import { useSearchParams } from "react-router-dom";

export async function getStores(page = 1) {
    page = page || 1;
    let url = `${env.API_URL}/stores/page/${page}`;
    const res = await fetch(url);
    return res.json();
}

export async function getPaginatedStores({ request }: { request: any }) {
    let page = new URL(request.url).searchParams.get("page") || "";
    return getStores(parseInt(page));
}
