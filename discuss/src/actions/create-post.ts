"use server";

import { Post } from "@/app/generated/prisma/client";
import { auth } from "@/auth";
import db from "@/db";
import paths from "@/path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

interface CreatePostFormStatus {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

export const createPost = async (
  slug: string,
  formStatus: CreatePostFormStatus,
  formData: FormData
): Promise<CreatePostFormStatus> => {
  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You are nott allowed to do this."],
      },
    };
  }

  const topic = await db.topic.findUnique({
    where: { slug },
    select: { id: true },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find topic"],
      },
    };
  }

  const results = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!results.success) {
    return {
      errors: results.error.flatten().fieldErrors,
    };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: results.data.title,
        content: results.data.content,
        topicId: topic.id,
        userId: session.user.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Cannot create post"],
        },
      };
    }
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));
};
