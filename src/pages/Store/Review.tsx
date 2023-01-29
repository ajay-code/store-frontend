import { DateTime } from "luxon";
import { getGravatar } from "./getGravatar";

export function Review({ review }: any) {
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
