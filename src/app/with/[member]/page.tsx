import { getMemberInfo } from '@/app/api/member';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { Container } from '@/components/ui/layouts';
import { getAboutInfo } from '@/app/api/member/about';

import { AboutSection, SidePanel, TopCard } from '../components';

export default async function MemberPage({ params }: { params: { member: string } }) {
  const member = await getMemberInfo(params.member);
  const about = await getAboutInfo(params.member);

  if (!member) {
    return (
      <main className='p-8'>
        <section className='mx-auto max-w-[600px] border border-gray-150 shadow-md'>
          <div className='p-4'>
            <p>Profile not found</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className='pt-5 md:p-8'>
      <Container className='flex items-start justify-between gap-5'>
        <div className='flex flex-col justify-center gap-5'>
          <TopCard member={member} />
          {about && <AboutSection about={about} />}
        </div>
        <SidePanel />
      </Container>
    </main>
  );
}
