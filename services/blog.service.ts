import { env } from "@/env";

const API_URL = env.API_URL;

//* No Dynamic and No {cache: no-store } : SSG --> Static Page
//* {cache: no-store } : SSR --> Dynamic Page
//* next: { revalidate: 10 } : ISR --> Mix between static and dyanimc

export const blogService = {
    getBlogPosts: async function () {
        try {
            const res = await fetch(`${API_URL}/posts`, {
                next: { revalidate: 10 },
            });
            const data = await res.json();
            // if(data.sucess){
            //       return {data: null, error:{message:"Data is missing"}}
            // }
            return { data: data, error: null };
        } catch (error) {
            return { data: null, error: { message: "Something went wrong" } };
        }
    },
};
