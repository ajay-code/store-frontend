function Add() {
    const tags = [
        {
            id: 1,
            tag: "Wifi",
        },
        {
            id: 2,
            tag: "Open Late",
        },
        {
            id: 3,
            tag: "Family Friendly",
        },
        {
            id: 4,
            tag: "Vega",
        },
        {
            id: 5,
            tag: "Licensed",
        },
    ];

    return (
        <>
            <h2>Add Store</h2>
            <form
                className="card"
                action="/add/"
                method="POST"
                encType="multipart/form-data"
            >
                <pre></pre>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="description">Description</label>
                <textarea name="description" defaultValue={""} />
                <label htmlFor="photo">
                    Photo
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        accept="image/gif, image/png, image/jpeg"
                    />
                </label>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="location_address" />
                <label htmlFor="lng">Address Lng</label>
                <input
                    type="text"
                    id="lng"
                    name="location_coordinates[0]"
                    required
                />
                <label htmlFor="lat">Address Lat</label>
                <input
                    type="text"
                    id="lat"
                    name="location_coordinates[1]"
                    required
                />
                <ul className="tags">
                    {tags.map((tag) => (
                        <div className="tag tag__choice" key={`tag-${tag.id}`}>
                            <input
                                type="checkbox"
                                id={tag.tag}
                                defaultValue={tag.tag}
                                name={tag.tag}
                            />
                            <label htmlFor={tag.tag}>{tag.tag}</label>
                        </div>
                    ))}
                </ul>
                <input className="button" type="submit" defaultValue="Save →" />
            </form>
        </>
    );
}

export default Add;
