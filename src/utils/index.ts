import { env } from "@/config";

export const getHTMLReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: any) => {
        if (value instanceof HTMLElement) {
            return;
        }
        return value;
    };
};

export const getImageUrl = (image: string) => {
    return `${env.APP_URL}/uploads/${image}`;
};

export const getDefaultImgUrl = () => {
    return `${env.APP_URL}/uploads/store.png`;
};
