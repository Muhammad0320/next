import { Post } from "@/app/generated/prisma/client";
import db from "@/db";

type PostWithData = Post & {
  topic: { slug: string };
  _count: { comment: number };
  user: { name: string | null };
};

export const fetchPostByTopicSlug = async (
  slug: string
): Promise<PostWithData[]> => {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
};
