import { Store } from "@/components/Store";
import { Link, useLoaderData } from "react-router-dom";

function Tags() {
    const loadedData = useLoaderData() as any;
    const tags = loadedData.data.tags;
    const stores = loadedData.data.stores;
    return (
        <>
            <h1>Tags</h1>
            <ul className="tags">
                {tags.map(
                    (tag: {
                        id: number;
                        tag: string;
                        store_count?: number;
                    }) => (
                        <li className="tag" key={`tag-${tag.id}`}>
                            <Link className="tag__link" to={`/tags/${tag.tag}`}>
                                <span className="tag__text">{tag.tag}</span>
                                <span className="tag__count">
                                    {tag.store_count}
                                </span>
                            </Link>
                        </li>
                    )
                )}
            </ul>
            <div className="stores">
                {stores.map((store: any) => (
                    <Store store={store} key={`store-${store.id}`} />
                ))}
            </div>
        </>
    );
}

export default Tags;
