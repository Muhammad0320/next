"use server";

import { z } from "zod";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import paths from "@/path";
import { Topic } from "@/app/generated/prisma/client";
import db from "@/db";

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, "Name must be lowercase letters or dashes without space"),
  description: z.string().min(10),
});

export const createTopic = async (
  errors: CreateTopicFormState,
  formdata: FormData
): Promise<CreateTopicFormState> => {
  const result = createTopicSchema.safeParse({
    name: formdata.get("name"),
    description: formdata.get("description"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You are nott allowed to do this."],
      },
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: { slug: result.data.name, description: result.data.description },
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
          _form: ["Something went wrong!"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
};
