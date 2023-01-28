import md5 from "md5";

export function getGravatar(email: string): string {
    return `https://gravatar.com/avatar/${md5(email)}?s=200`;
}
