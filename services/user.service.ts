import { cookies } from "next/headers";

export const userServie = {
    getSession: async function () {
        try {
            const cookieStore = await cookies();

            const res = await fetch(
                "http://localhost:8000/api/auth/get-session",
                {
                    headers: {
                        Cookie: cookieStore.toString(),
                    },
                    cache: "no-store",
                },
            );

            const session = await res.json();

            return session;
        } catch (error) {
            console.error(error)
        }
    },
};
