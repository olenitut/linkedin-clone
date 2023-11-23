import Image from 'next/image';

import { IconButton, IconName } from '@/components/ui/buttons';
import { MemberData } from '@/app/api/member';
import DefaultAvatar from 'public/assets/images/default-avatar.png';
import DefaultBG from 'public/assets/images/default-member-bg.jpg';

export function Images({ member }: { member: MemberData }) {
  const avatar = member.avatar ? member.avatar : DefaultAvatar;
  const memberBG = member.bgImage ? member.bgImage : DefaultBG;

  return (
    <>
      <Image
        src={memberBG}
        alt='profile-background'
        height={200}
        width={900}
        style={{
          width: 900,
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          objectFit: 'cover',
        }}
      />

      <div className='absolute left-3 top-[10px] grid h-[152px] w-[152px] place-content-center rounded-[50%] bg-white-full sm:top-[50px] md:left-10 md:top-[15%] lg:top-[24%]'>
        <button className='h-[140px] w-[140px] overflow-hidden rounded-[50%]'>
          <Image
            src={avatar}
            alt={member.name}
            width={140}
            height={140}
            style={{
              width: 140,
              objectFit: 'cover',
            }}
          />
        </button>
      </div>

      <div className='absolute right-5 top-5'>
        <IconButton iconName={IconName.pencil} className='h-9 w-9 bg-white-full' />
      </div>

      <div className='flex h-[60px] w-full items-center justify-between p-3'>
        <div className='basis-1/2' />
        <div className='flex basis-1/2 justify-end'>
          <IconButton iconName={IconName.pencil} />
        </div>
      </div>
    </>
  );
}
