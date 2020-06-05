/// <reference types="next" />
/// <reference types="next/types/global" />

interface Post {
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
}

interface Comment {
  id: number;
  title: string;
  body: string;
}