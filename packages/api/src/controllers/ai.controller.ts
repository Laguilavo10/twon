import { TRPCError } from '@trpc/server';
import { Configuration, OpenAIApi } from 'openai';
import { z } from 'zod';
import { Response, TRPCErrorCode, type Params } from '../common';
import type { GenerateTextInputType } from '../schema/ai.schema';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const generateTextHandler = async ({ ctx, input }: Params<GenerateTextInputType>) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: input.prompt,
        },
      ],
    });

    console.log('completion: ', completion);

    return {
      status: Response.SUCCESS,
      data: {
        generatedText: completion.data.choices[0]?.message?.content,
      },
    };
  } catch (error: unknown) {
    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'api:account.create.error.notFound';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      if (error.code === TRPCErrorCode.UNAUTHORIZED) {
        const message = 'common:message.error.unauthorized';
        throw new TRPCError({
          code: TRPCErrorCode.UNAUTHORIZED,
          message,
        });
      }

      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
};
