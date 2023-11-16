import Image from 'next/image';
import Link from 'next/link';

import { Container, Footer } from '@/components/ui/layouts';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import HeroImage from 'public/assets/images/hero.webp';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';
import { Logo } from '@/components/ui/layouts/Header/components';

import '../css/home.css';

export default function Home() {
  return (
    <>
      <main className='grow'>
        <Container>
          <div className='flex flex-col items-center justify-center py-8'>
            <Typography variant={TypographyVariant.h2} as='h1' className='max-w-md text-center'>
              Welcome to Work<span className='text-red-700'>W</span>ave{' '}
              <Typography variant={TypographyVariant.h4} as='span' className='text-red-700'>
                Where Professionals Connect!
              </Typography>
            </Typography>
            <div className='flex items-center justify-between'>
              <div className='flex basis-2/4 flex-col items-center justify-between gap-8'>
                <Typography variant={TypographyVariant.Large}>
                  Unlock endless opportunities for career growth, networking, and industry insights.
                  Join our vibrant community of professionals from around the world. Whether
                  you&apos;re looking for your next career move, eager to expand your professional
                  network, or seeking valuable industry knowledge,{' '}
                  <Typography
                    variant={TypographyVariant.Large}
                    as='span'
                    className='font-medium text-red-700'
                  >
                    WorkWave
                  </Typography>{' '}
                  is your gateway to success.
                </Typography>
                <Link href='signup'>
                  <Button
                    variant={ButtonVariant.Primary}
                    size={ButtonSize.Large}
                    className='animated-button !w-[160px] uppercase tracking-wide'
                  >
                    <span />
                    <span />
                    <span />
                    <span />
                    Join
                  </Button>
                </Link>
              </div>

              <div className='basis-2/4'>
                <Image src={HeroImage} alt='hero' width={511} height={511} />
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <Typography variant={TypographyVariant.h4} as='h2'>
                Why Join WorkWave?
              </Typography>
              <ul className='flex list-disc flex-col items-start justify-center gap-1.5 pt-4'>
                <li>Connect with like-minded professionals in your industry.</li>
                <li>Discover exciting job opportunities tailored to your skills.</li>
                <li>Stay informed with the latest trends and insights in your field.</li>
                <li>Build a strong online presence and showcase your professional journey.</li>
              </ul>
            </div>
            <div className='flex flex-col items-start justify-center self-start pt-16'>
              <Typography variant={TypographyVariant.h4} as='h3'>
                How it works?
              </Typography>
              <ul className='flex list-disc flex-col items-start justify-center gap-1.5 pt-4'>
                <li>
                  <span className='font-medium'>Step 1: Sign Up </span> - Create your account with a
                  few simple details.
                </li>
                <li>
                  <span className='font-medium'>Step 2: Build Your Profile </span> - Showcase your
                  skills, experience, and achievements.
                </li>
                <li>
                  <span className='font-medium'>Step 3: Connect </span> - Start building your
                  professional network by connecting with colleagues and industry professionals.
                </li>
              </ul>
            </div>
            <div className='relative flex w-full items-center justify-between self-start'>
              <Typography variant={TypographyVariant.h3} as='h4'>
                Connect to your colleagues
              </Typography>
              <div className='h-[400px] w-[700px] bg-home-team bg-cover bg-right bg-no-repeat' />
            </div>
            <div className='relative flex w-full items-center gap-20 self-start'>
              <div className='top-[400px] h-[400px] w-[550px] bg-home-group bg-cover bg-left bg-no-repeat' />
              <Typography variant={TypographyVariant.h3}>and friends on WorkWave</Typography>
            </div>
            <Link href='/signup'>
              <Button variant={ButtonVariant.Primary} size={ButtonSize.Large} className='w-[200px]'>
                Get Started
              </Button>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
