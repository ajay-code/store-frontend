import { ReactComponent as ReviewIcon } from "@/assets/icons/review.svg";
import { ReactComponent as HeartIcon } from "@/assets/icons/heart.svg";
import { ReactComponent as EditIcon } from "@/assets/icons/pencil.svg";
import { useAuthStore } from "@/store";
import { getDefaultImgUrl, getImageUrl } from "@/utils";
import { Link } from "react-router-dom";

export function Store({ store }: any) {
    const user = useAuthStore((state) => state.user);
    return (
        <div className="store">
            <div className="store__hero">
                <div className="store__actions">
                    {user && (
                        <div className="store__action store__action--heart">
                            <HeartIcon />
                        </div>
                    )}
                    {user?.id == store.author && (
                        <div className="store__action store__action--edit">
                            <Link to={`/stores/${store.id}/edit`}>
                                <EditIcon />
                            </Link>
                        </div>
                    )}
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
