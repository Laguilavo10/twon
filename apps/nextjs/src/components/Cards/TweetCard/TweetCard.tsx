import Image from 'next/image';
import cn from 'classnames';
import { Typewriter } from '~/components/Typewriter/Typewriter';
import { Counter } from '../../Counter/Counter';
import { Icon, IconCatalog } from '../../Icon/Icon';

export interface TweetCardProps {
  /**
   * The number of comments at the end of the count animation.
   */
  commentCount?: number;

  /**
   * The CSS class to apply to the component.
   */
  className?: string;

  /**
   * The number of like at the end of the count animation.
   */
  likeCount?: number;

  /**
   * The number of retweets at the end of the count animation.
   */
  retweetCount?: number;

  /**
   * The text of the tweet to be displayed in the TweetCard component.
   */
  tweetText: string;

  /**
   * Whether to enable the typing animation for the tweet text.
   */
  isTypingAnimationEnabled?: boolean;

  /**
   * The number of views at the end of the count animation.
   */
  viewCount?: number;
  
  /**
   * The number in milliseconds of speed the counter.
   */
  speedCount?: number;
}

export const TweetCard = ({
  commentCount = 1,
  className,
  likeCount = 1,
  retweetCount = 0,
  tweetText,
  isTypingAnimationEnabled = false,
  viewCount = 20,
  speedCount = 25
}: TweetCardProps) => {
  const classes = {
    container: cn(
      className,
      'relative grid max-w-xl grid-cols-[50px_1fr] grid-rows-[1fr_50px]',
      'items-start justify-center gap-x-2 rounded-lg',
      'border border-slate-600',
      'bg-black p-4 text-white animate-fade-in',
    ),
    profileImg: cn('hidden w-10 rounded-full', 'min-[420px]:block lg:w-16'),
    body: cn(
      'col-start-1 col-end-3 flex min-h-[120px] flex-col',
      'items-start gap-4 min-[420px]:col-start-2',
    ),
    social: cn(
      'col-start-1 col-end-3 mt-4 flex w-full',
      'items-end max-w-[320px] justify-between',
      'min-[420px]:col-start-2',
      'text-slate-400',
    ),
  };

  return (
    <div className={classes.container}>
      <Image
        src="https://pbs.twimg.com/profile_images/1645933911514681345/zrDbFWCT_400x400.jpg"
        alt="Serudda twitter profile image"
        className={classes.profileImg}
        width="50"
        height="50"
      />
      <div className={classes.body}>
        <div className="flex items-center gap-1">
          <h2 className="text-xl font-bold uppercase">Serudda</h2>

          <Icon icon={IconCatalog.twitterCheck} isSolid={true} className="w-4 fill-[#1d9bf0]" />
          <span className="md:text-fluid-sm text-gray-600">@serudda · Apr 28</span>
        </div>

        {isTypingAnimationEnabled ? <Typewriter text={tweetText} /> : <p>{tweetText}</p>}
      </div>

      {/* Icons Section */}
      <div className={classes.social}>
        <div className="items flex items-center gap-2">
          <Icon icon={IconCatalog.twitterComments} isSolid={true} className="w-4" />
          <Counter start={0} end={commentCount} />
        </div>
        <div className="items flex items-center gap-2">
          <Icon icon={IconCatalog.twitterRetweet} isSolid={true} className="w-4" />
          <Counter start={0} end={retweetCount} />
        </div>
        <div className="items flex items-center gap-2">
          <Icon icon={IconCatalog.twitterHeart} isSolid={true} className="w-4" />
          <Counter start={0} end={likeCount} />
        </div>
        <div className="items max-[360px]:hidden flex items-center gap-2">
          <Icon icon={IconCatalog.twitterView} isSolid={true} className="w-4" />
          <Counter start={0} end={viewCount} speed={speedCount} />
        </div>
      </div>
    </div>
  );
};
