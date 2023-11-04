import React from 'react';
import {
  BriefcaseIcon,
  NewspaperIcon,
  PhotoIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import {
  HandThumbUpIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathRoundedSquareIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {
  EllipsisHorizontalIcon as EllipseHorizontalMini,
  PencilSquareIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';

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
  follow: <PlusIcon className={'h-6 w-6 text-rose-600'} />,
  control: <EllipsisHorizontalIcon className={'h-6 w-6 text-gray-600'} />,
  close: <XMarkIcon className={'h-6 w-6 text-gray-600'} />,
  plus: <PlusIcon className={'h-6 w-6 text-gray-600'} />,
  smile: <FaceSmileIcon className={'h-6 w-6 text-gray-600'} />,
  star: <StarIcon className={'h-6 w-6 text-gray-600'} />,
  controlMini: <EllipseHorizontalMini className={'h-5 w-5 text-gray-600'} />,
  pencil: <PencilSquareIcon className={'h-5 w-5 text-gray-600'} />,
  up: <ChevronUpIcon className={'h-5 w-5 text-gray-600'} />,
  down: <ChevronDownIcon className={'h-5 w-5 text-gray-600'} />,
};
