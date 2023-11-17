import { getMemberInfo } from '@/app/api/member';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { TopCard } from '@/app/with/components';
import { Container } from '@/components/ui/layouts';

export default async function MemberPage({ params }: { params: { member: string } }) {
  const member = await getMemberInfo(params.member);

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
    <main className='pt-5'>
      <Container>
        <TopCard member={member} />
      </Container>
    </main>
  );
}
