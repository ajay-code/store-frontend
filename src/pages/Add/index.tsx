import { getHTMLReplacer } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { tags } from "./tags";
import { env } from "@/config";
import { toast } from "react-toastify";

const allowedFileTypes = ["image/gif", "image/png", "image/jpeg"];
const addStoreSchema = z.object({
    name: z.string(),
    description: z.string(),
    photo: z
        .custom<FileList>()
        .refine((val) => val.length > 0, "Photo is required")
        .refine((val) => allowedFileTypes.includes(val?.[0]?.type)),
    location_address: z.string(),
    location_coordinates: z.preprocess((val: any) => {
        return val.map((str: string) => parseFloat(str));
    }, z.tuple([z.number(), z.number()])),
    tags: z.preprocess((val: any) => {
        return val.join(",");
    }, z.string()),
});

function AddStore() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(addStoreSchema),
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        const formData = new FormData();
        for (var key in data) {
            if (key == "photo") {
                formData.append(key, data.photo[0]);
            } else {
                formData.append(key, data[key]);
            }
        }

        const res = await fetch(`${env.API_URL}/add`, {
            method: "POST",
            body: formData,
            credentials: "include",
        });

        if (res.status >= 400) {
            const { error } = await res.json();
            toast.error(error.msg);
        } else if (res.status <= 300) {
            toast.success("Store Added");
            reset();
        }
    };

    return (
        <>
            <h2>Add Store</h2>
            <form
                className="card"
                encType="multipart/form-data"
                onSubmit={handleSubmit(onSubmit)}
            >
                <pre>{JSON.stringify(errors, getHTMLReplacer(), 2)}</pre>
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name")} />
                <label htmlFor="description">Description</label>
                <textarea {...register("description")} rows={4} />
                <label htmlFor="photo">
                    Photo
                    <input
                        type="file"
                        // name="photo"
                        id="photo"
                        accept="image/gif, image/png, image/jpeg"
                        {...register("photo")}
                    />
                </label>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    {...register("location_address")}
                />
                <label htmlFor="lng">Address Lng</label>
                <input
                    type="number"
                    step="any"
                    id="lng"
                    {...register("location_coordinates.0")}
                    required
                />
                <label htmlFor="lat">Address Lat</label>
                <input
                    type="number"
                    step="any"
                    id="lat"
                    {...register("location_coordinates.1")}
                    required
                />
                <ul className="tags">
                    {tags.map((tag) => (
                        <div className="tag tag__choice" key={`tag-${tag.id}`}>
                            <input
                                type="checkbox"
                                id={tag.tag}
                                defaultValue={tag.id}
                                {...register("tags")}
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

export default AddStore;
