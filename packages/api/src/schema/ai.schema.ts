import { z, type TypeOf } from 'zod';

/*------------------------------------*/

export const generateTextInput = z.object({
  prompt: z.string(),
});
export type GenerateTextInputType = TypeOf<typeof generateTextInput>;

/*------------------------------------*/
