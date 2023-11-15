interface User {
  id: number;
  name: string;
  email: string;
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  userId: number;
  likes: Like[]
}

interface Like {
  userId: number;
  postId: number;
}

interface LikePayload {
  userId: number;
  postId: number;
}
export type { User, Post, Like, LikePayload };