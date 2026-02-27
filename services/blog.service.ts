import { env } from "@/env"

const API_URL = env.API_URL

export const blogService = {
      getBlogPosts: async function () {
            try {
                  const res = await fetch(`${API_URL}/posts`);
            } catch (error) {
                  
            }
      }
}