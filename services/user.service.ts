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

            return { data: session, error: null };
        } catch (error) {
            console.error(error);
            return {data: null, error: {mess}}
        }
    },
};
