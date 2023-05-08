import { accountRouter } from './router/account';
import { aiRouter } from './router/ai';
import { authRouter } from './router/auth';
import { postRouter } from './router/post';
import { userRouter } from './router/user';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  account: accountRouter,
  ai: aiRouter,
  auth: authRouter,
  user: userRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
