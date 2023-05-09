import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button, ButtonSize, Icon, IconCatalog, TextInput } from 'side-ui';
import {
  DottedBackground,
  DottedBgSeparation,
  DottedBgSize,
  Logo,
  LogoSize,
  LogoType,
  LogoVariant,
  TextGradient,
  TweetCard,
} from '~/components';

const Landing: NextPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Twon - Unleash your Tweeting Potencial</title>
        <meta name="description" content="Unleash your Tweeting Potencial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex h-full w-full flex-none flex-col items-center justify-between gap-16 overflow-hidden bg-black p-10">
        {/* HERO SECTION */}
        <section className=" animate-fade-in z-10 mb-4 flex flex-col items-center gap-10 text-white opacity-0">
          <Logo variant={LogoVariant.light} size={LogoSize.md} type={LogoType.complete} />
          <TextGradient gradientStartColor="from-[#e8b066]" gradientEndColor="to-[#df12ff]">
            <h1 className="text-shadow-glow text-fluid-base z-10 max-w-[14ch] text-center font-bold leading-none">
              Unleash your Tweeting Potencial
            </h1>
          </TextGradient>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <TextInput
              className="w-64 bg-slate-950"
              onChange={handleEmailChange}
              placeholder="Your email"
              value={email}
            />
            <Link
              href={`https://magic.beehiiv.com/v1/1287b73a-7dd6-41ed-afad-1bf77fa121c8?email=${email}&redirect_to=https://twon.app&utm_source=landing&utm_medium=hero`}
            >
              <Button size={ButtonSize.sm}>Get Early Access</Button>
            </Link>
          </div>
        </section>

        {/* INPUT AND OUTPUT TWEET */}
        <section className="z-10 grid grid-cols-1 items-start justify-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-2 text-xl font-medium text-slate-50">Input Tweet</div>
            <TweetCard
              className="animation-delay-500 opacity-0 lg:max-h-[200px]"
              tweetText="Do you want to charge more than $7/month for your product? You can try offering aone-time payment for life, show it to new users, and measure the results... I bet it will work."
            />
          </div>

          <div>
            <div className="mb-2 text-xl font-medium text-slate-50">Output Tweet</div>
            <TweetCard
              speedCount={1}
              className="shadow-center animation-delay-1000 opacity-0 shadow-secondary-400 md:min-h-[400px] lg:min-h-[300px]"
              commentCount={32}
              likeCount={50}
              retweetCount={12}
              viewCount={3650}
              isTypingAnimationEnabled={true}
              tweetText={`Charging under $7/month for your product? 🤔

            Consider this: Shift to a single payment and provide lifetime access, a year of updates, or one-time use. Show it exclusively to new users as an experiment.

            My guess: conversion rates and lifetime value will soar! 💸`}
            />
          </div>
        </section>

        <div className="z-10 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
          <Link href="https://github.com/serudda/twon" target="_blank">
            <Icon icon={IconCatalog.gitHub} className="h-6 w-6 text-white" isSolid />
          </Link>
          <div className="mx-2 h-[30px] w-[0.5px] rotate-[20deg] transform bg-neutral-700"></div>
          <div className="flex items-center gap-x-1 text-xs sm:text-base">
            <span className="text-slate-400">Made with</span>
            <Icon icon={IconCatalog.heart} className="h-4 w-4 text-red-500" isSolid />
            <span className="text-slate-400">by the</span>
            <Link
              className="font-medium text-slate-400 underline decoration-dashed decoration-0 underline-offset-4 transition-colors hover:text-primary-200"
              href="https://github.com/Indie-Creator-Community"
              target="_blank"
            >
              Indie Creators HQ
            </Link>
          </div>
        </div>
        <DottedBackground
          className="absolute -top-40 md:hidden"
          dotsSize={DottedBgSize.base}
          dotsColors="from-slate-500"
          dotsSeparation={DottedBgSeparation.sm}
          maskTransparency={90}
          isLinear={true}
        />
        <DottedBackground
          className="absolute -top-40 hidden md:block"
          dotsSize={DottedBgSize.base}
          dotsSeparation={DottedBgSeparation.sm}
          dotsColors="from-slate-500"
          maskTransparency={80}
        />
      </main>
    </>
  );
};

export default Landing;
