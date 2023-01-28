import { getImageUrl } from "@/utils";
import { useLoaderData } from "react-router-dom";
import { DateTime } from "luxon";
import { getGravatar } from "./getGravatar";

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
                    <img
                        className="single__map"
                        src={`https://maps.googleapis.com/maps/api/staticmap?center=${store.location_coordinates.x},${store.location_coordinates.x}&amp;zoom=14&amp;size=800x150&amp;key=&amp;markers=${store.location_coordinates.x},${store.location_coordinates.y}&amp;scale=2`}
                    />
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
function Review({ review }: any) {
    return (
        <div className="review">
            <div className="review__header">
                <div className="review__author">
                    <img
                        className="avatar"
                        src={getGravatar(review.author.email)}
                    />
                    <p>{review.author.name}</p>
                </div>
                <div
                    className="review__stars"
                    title={`Rated ${review.rating} our of 5 stars`}
                >
                    {`★`.repeat(review.rating)}
                    {`☆`.repeat(5 - review.rating)}
                </div>
                <time
                    className="review__time"
                    data-datetime={review.created_at}
                >
                    {DateTime.fromISO(review.created_at).toRelative()}
                </time>
            </div>
            <div className="review__body">
                <p>{review.text}</p>
            </div>
        </div>
    );
}
