import { Comment, PrismaPromise } from "@prisma/client";
import { prisma } from ".";
import { commentsFixture } from "../fixtures/comment";

export const comments = () => {
  const comments: PrismaPromise<Comment>[] = [];
  for (const data of commentsFixture()) {
    const comment = prisma.comment.create({ data });
    comments.push(comment);
  }
  return comments;
};

