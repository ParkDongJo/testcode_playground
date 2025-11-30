import { Comment } from "@prisma/client";

export const commentsFixture = (): Omit<Comment, "id" | "createdAt" | "updatedAt">[] => [
  {
    userId: 1,
    postId: 1,
    content: "정말 유익한 글이네요! 감사합니다.",
  },
  {
    userId: 2,
    postId: 1,
    content: "잘 읽었습니다. 다음 편도 기대하겠습니다!",
  },
  {
    userId: 1,
    postId: 2,
    content: "좋은 내용 공유해주셔서 감사합니다.",
  },
];



