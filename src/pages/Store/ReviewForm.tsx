export function ReviewForm() {
    return (
        <form
            className="reviewer"
            action="/reviews/58c065dbbbb1a51e0d43a04f"
            method="POST"
        >
            <textarea
                name="text"
                placeholder="Did you try this place? Have something to say? Leave a review..."
                defaultValue={""}
            />
            <div className="reviewer__meta">
                <div className="reviewer__stars">
                    <input
                        type="radio"
                        required
                        id="star5"
                        name="rating"
                        defaultValue={5}
                    />
                    <label htmlFor="star5">5 Stars</label>
                    <input
                        type="radio"
                        required
                        id="star4"
                        name="rating"
                        defaultValue={4}
                    />
                    <label htmlFor="star4">4 Stars</label>
                    <input
                        type="radio"
                        required
                        id="star3"
                        name="rating"
                        defaultValue={3}
                    />
                    <label htmlFor="star3">3 Stars</label>
                    <input
                        type="radio"
                        required
                        id="star2"
                        name="rating"
                        defaultValue={2}
                    />
                    <label htmlFor="star2">2 Stars</label>
                    <input
                        type="radio"
                        required
                        id="star1"
                        name="rating"
                        defaultValue={1}
                    />
                    <label htmlFor="star1">1 Stars</label>
                </div>
                <input
                    className="button"
                    type="submit"
                    defaultValue="Submit Review →"
                />
            </div>
        </form>
    );
}
