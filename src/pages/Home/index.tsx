import { useLoaderData } from "react-router-dom";
import { Store } from "@/components/Store";
function Home() {
    const loaderData = useLoaderData() as any;
    const stores = loaderData.data;
    console.log(loaderData);
    return (
        <>
            <h2>Stores</h2>
            <div className="stores">
                {stores.map((store: any) => (
                    <Store store={store} key={store.id} />
                ))}
            </div>
        </>
    );
}

export default Home;
