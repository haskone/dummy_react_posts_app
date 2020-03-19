import { POSTS_URL } from "../constants";

export const getPosts = async (number) => {
    const response = await fetch(POSTS_URL);
    const posts = await response.json();
    return posts.length > number ? posts.slice(number) : posts;
}
