"use server";

import { z } from "zod";

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
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

  return { errors: {} };

  // TODO: revalidate the home page
};
