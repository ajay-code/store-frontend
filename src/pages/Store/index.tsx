import { getImageUrl } from "@/utils";
import { useLoaderData } from "react-router-dom";
import { ReviewForm } from "./ReviewForm";
import { Review } from "./Review";

function Store() {
    const { data } = useLoaderData() as any;
    const store = data[0];
    console.log("map api:", import.meta.env.VITE_MAP_API);
    return (
        <>
            <div className="single">
                <div className="single__hero">
                    <img
                        className="single__image"
                        src={getImageUrl(store.photo)}
                    />
                    <h2 className="title title--single">
                        <a href={`/store/${store.slug}`}>{store.name}</a>
                    </h2>
                </div>

                <div className="single__details inner">
                    <Map store={store} />
                    <p className="single__location">{store.location_address}</p>
                    <p>{store.description}</p>
                    <ul className="tags">
                        {store.tags
                            .split(",")
                            .map((tag: string, index: number) => (
                                <li className="tag" key={`tag-${index}`}>
                                    <a
                                        className="tag__link"
                                        href={`/tags/${tag}`}
                                    >
                                        <span className="tag__text">
                                            #{tag}
                                        </span>
                                    </a>
                                </li>
                            ))}
                    </ul>

                    <ReviewForm></ReviewForm>

                    <div className="reviews">
                        {store.reviews.map((review: any) => (
                            <Review review={review} key={review.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;

function Map({ store }: any) {
    return (
        <>
            <iframe
                width="425"
                height="350"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${calculateBbox(
                    store.location_coordinates
                )}&layer=mapnik&marker=${store.location_coordinates.x},${
                    store.location_coordinates.y
                }`}
                style={{
                    border: "1px solid black",
                    width: "100%",
                    height: "400px",
                    margin: "0",
                    overflow: "hidden",
                }}
            ></iframe>
        </>
    );
}

function calculateBbox(coordinates: { x: number; y: number }) {
    let latitude = coordinates.y;
    let longitude = coordinates.x;
    let distance = 10; // meters
    let latitudeMin = latitude - distance / 111120;
    let latitudeMax = latitude + distance / 111120;
    let longitudeMin =
        longitude - distance / (111320 * Math.cos((latitude * Math.PI) / 180));
    let longitudeMax =
        longitude + distance / (111320 * Math.cos((latitude * Math.PI) / 180));

    // bounding box coordinates
    const bbox = `${latitudeMin},${longitudeMin},${latitudeMax},${longitudeMax}`;
    return bbox;
}
