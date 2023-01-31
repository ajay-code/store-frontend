import { create } from "zustand";
import { devtools, persist, combine } from "zustand/middleware";
type User = {
    id: number;
    name: string;
    email: string;
};
type AuthStore = {
    login: (user: User) => void;
    logout: () => void;
} & (
    | {
          isLoggedIn: false;
          user: null;
      }
    | {
          isLoggedIn: true;
          user: User;
      }
);

export const useAuthStore = create<AuthStore>(
    //@ts-ignore
    devtools(
        persist(
            (set) => ({
                isLoggedIn: false,
                user: null,
                login: (user: User) =>
                    set((state) => ({ ...state, isLoggedIn: true, user })),
                logout: () => set({ isLoggedIn: false, user: null }),
            }),
            { name: "auth" }
        )
    )
);
