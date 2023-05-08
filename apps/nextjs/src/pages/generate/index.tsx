import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Textarea } from 'side-ui';
import { api } from '~/utils/api';

const Generate: NextPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const { mutate: generateText } = api.ai.generateText.useMutation({
    onSuccess: (data) => {
      const value = data?.data.generatedText;
      setOutputValue(value ? value : '');
    },
    onError: (error) => {
      const errorMsg = error.message;
      alert(errorMsg);
    },
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleOutputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOutputValue(e.target.value);
  };

  const handleGenerateText = () => {
    generateText({ prompt: inputValue });
  };

  return (
    <>
      <Head>
        <title>Twon - Generate Tweet</title>
        <meta name="description" content="Generate Tweet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-4xl px-4">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="mb-6 flex w-full items-center justify-center gap-6">
            <Textarea
              minHeight="200px"
              hasAutoSize
              value={inputValue}
              onChange={handleInputValue}
            />
            <Textarea
              minHeight="200px"
              hasAutoSize
              value={outputValue}
              onChange={handleOutputValue}
            />
          </div>
          <div className="flex w-full items-center">
            <Button onClick={handleGenerateText} isFullWidth>
              Generate
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Generate;
