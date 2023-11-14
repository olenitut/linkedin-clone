import { Container } from '@/components/ui/layouts';
import { Typography, TypographyVariant } from '@/components/ui/typography';

export default function Feed() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center pt-[100px]'>
        <Typography variant={TypographyVariant.h2}>Welcome</Typography>
      </div>
    </Container>
  );
}
