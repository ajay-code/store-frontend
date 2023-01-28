import { getImageUrl } from "@/utils";
import { useLoaderData } from "react-router-dom";

function Top() {
    const loadedData = useLoaderData() as any;
    const stores = loadedData.data;
    return (
        <>
            <h1>Top 10 Stores</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>photo</td>
                        <td>ranking</td>
                        <td>name</td>
                        <td>reviews</td>
                        <td>Average Rating</td>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store: any, index: number) => (
                        <Store
                            store={store}
                            ranking={index + 1}
                            key={store.id}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Top;
function Store({ store, ranking }: any) {
    return (
        <tr>
            <td>
                <a href={`store/${store.slug}`}>
                    <img
                        width="200"
                        src={getImageUrl(store.photo)}
                        alt={store.name}
                    />
                </a>
            </td>
            <td>{ranking}</td>
            <td>
                <a href={`store/${store.slug}`}>{store.name}</a>
            </td>
            <td>3</td>
            <td>{Math.round(store.avg_rating * 10) / 10} / 5</td>
        </tr>
    );
}
