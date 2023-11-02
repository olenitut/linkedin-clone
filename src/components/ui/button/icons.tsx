import React from 'react';
import { BriefcaseIcon, NewspaperIcon, PhotoIcon } from '@heroicons/react/24/solid';
import {
  HandThumbUpIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathRoundedSquareIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

type Icon = {
  [key: string]: React.ReactNode;
};

export const icons: Icon = {
  share: <PhotoIcon className={'h-6 w-6 text-blue-500'} />,
  job: <BriefcaseIcon className={'h-6 w-6 text-purple-500'} />,
  article: <NewspaperIcon className={'h-6 w-6 text-orange-500'} />,
  like: <HandThumbUpIcon className={'h-6 w-6 text-gray-600'} />,
  comment: <ChatBubbleBottomCenterTextIcon className={'h-6 w-6 text-gray-600'} />,
  repost: <ArrowPathRoundedSquareIcon className={'h-6 w-6 text-gray-600'} />,
  send: <PaperAirplaneIcon className={'h-6 w-6 text-gray-600'} />,
};
