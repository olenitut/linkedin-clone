import { Typography, TypographyVariant } from '@/components/ui/typography';
import { Button, ButtonVariant } from '@/components/ui/buttons';
import { MemberData } from '@/app/api/member';

export function ContactInfo({ member }: { member: MemberData }) {
  return (
    <div className='flex items-center gap-6'>
      <Typography variant={TypographyVariant.Base}>{member.location}</Typography>
      <Button variant={ButtonVariant.Ghost} className='!text-red-700 underline'>
        Contact Info
      </Button>
    </div>
  );
}
