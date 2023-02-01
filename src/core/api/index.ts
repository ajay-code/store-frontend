import { NavigateFunction, Navigator } from "react-router-dom";
import { env } from "../../config";

export async function apiFetch(
    navigate: NavigateFunction,
    url: RequestInfo | URL,
    options?: RequestInit | undefined
): Promise<any> {
    if (typeof url === "string") {
        url = url.startsWith("/") ? url.substring(1, url.length) : url;
        url = url.endsWith("/") ? url.substring(0, url.length - 1) : url;
    }

    const apiUrl = `${env.API_URL}/${url}`;
    const res = await fetch(apiUrl, options);

    if (res.status < 400) {
        return res;
    }

    if (res.status == 401) {
        console.log("/logout#401");
        navigate("/logout#401");
    }

    return res;
}

export async function fetchJSON(url: string) {
    const res = await fetch(url);
    return res.json();
}

export async function getStores(page = 1) {
    page = page || 1;
    let url = `${env.API_URL}/stores/page/${page}`;
    return fetchJSON(url);
}

export async function getPaginatedStores({ request }: { request: any }) {
    let page = new URL(request.url).searchParams.get("page") || "";
    return getStores(parseInt(page));
}

export async function getTopStores() {
    let url = `${env.API_URL}/top`;
    return fetchJSON(url);
}

export async function getStoresByTag({ params: { tag } }: any) {
    const url = `${env.API_URL}/tags/${tag ? tag : ""}`;
    return fetchJSON(url);
}

export async function getStoreBySlug({ params: { slug } }: any) {
    const url = `${env.API_URL}/store/${slug ? slug : ""}`;
    return fetchJSON(url);
}
