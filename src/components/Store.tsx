import { ReactComponent as ReviewIcon } from "@/assets/icons/review.svg";
import { getDefaultImgUrl, getImageUrl } from "@/utils";

export function Store({ store }: any) {
    return (
        <div className="store">
            <div className="store__hero">
                <div className="store__actions">
                    <div className="store__action store__action--count">
                        <ReviewIcon />
                        <span>{store.review_count}</span>
                    </div>
                </div>
                <img
                    src={
                        store.photo
                            ? getImageUrl(store.photo)
                            : getDefaultImgUrl()
                    }
                />
                <h2 className="title">
                    <a href={`store/${store.slug}`}>{store.name}</a>
                </h2>
            </div>
            <div className="store__details">
                <p>{store.description}</p>
            </div>
        </div>
    );
}
