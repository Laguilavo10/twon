import { generateTextHandler } from '../controllers/ai.controller';
import { generateTextInput } from '../schema/ai.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const aiRouter = createTRPCRouter({
  generateText: publicProcedure
    .input(generateTextInput)
    .mutation(async ({ ctx, input }) => generateTextHandler({ ctx, input })),
});
