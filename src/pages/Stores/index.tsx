import Pagination from "@/components/Pagination";
import { Store } from "@/components/Store";
import { useLoaderData, useSearchParams } from "react-router-dom";

function Stores() {
    const loaderData = useLoaderData() as any;
    const stores = loaderData.data;
    const [sp] = useSearchParams();
    let currentPage = sp.get("page") || "";

    return (
        <>
            <h2>Stores</h2>
            <div className="stores">
                {stores.map((store: any) => (
                    <Store store={store} key={store.id} />
                ))}
            </div>
            <Pagination
                pages={loaderData.pages}
                total={loaderData.count}
                currentPage={parseInt(currentPage) || 1}
            />
        </>
    );
}

export default Stores;
