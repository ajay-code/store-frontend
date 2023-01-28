import { env } from "../../config";

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

export async function getTopStores() {
    let url = `${env.API_URL}/top`;
    const res = await fetch(url);
    return res.json();
}

export async function getStoresByTag({ params: { tag } }: any) {
    const url = `${env.API_URL}/tags/${tag ? tag : ""}`;
    const res = await fetch(url);
    return res.json();
}

export async function getStoreBySlug({ params: { slug } }: any) {
    const url = `${env.API_URL}/store/${slug ? slug : ""}`;
    const res = await fetch(url);
    return res.json();
}
