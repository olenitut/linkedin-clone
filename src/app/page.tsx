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
      <main className='grow overflow-hidden'>
        <Container>
          <div className='flex flex-col items-center justify-center py-8'>
            <Typography
              variant={TypographyVariant.h2}
              as='h1'
              className='mb-10 max-w-md text-center'
            >
              Welcome to Work<span className='text-red-700'>W</span>ave{' '}
              <Typography
                variant={TypographyVariant.h4}
                as='span'
                className='inline-block pt-3 text-red-700 sm:pt-0'
              >
                Where Professionals Connect!
              </Typography>
            </Typography>
            <div className='flex flex-col items-center justify-between md:flex-row'>
              <div className='flex basis-2/4 flex-col items-center justify-between gap-8'>
                <Typography
                  variant={TypographyVariant.Large}
                  className='mb-4 text-justify sm:mb-8 md:mb-2'
                >
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
            <div className='flex flex-col items-center justify-center md:pt-12'>
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
            <div className='flex flex-col items-start justify-center self-start pt-10 sm:pt-12 md:pt-16'>
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
            <div className='relative mt-10 flex w-full flex-col items-center justify-between self-start md:mt-0.5 md:flex-row'>
              <Typography
                variant={TypographyVariant.h3}
                as='h4'
                className='text-center lg:text-right'
              >
                Connect to your colleagues
              </Typography>
              <div className='h-[280px] w-[460px] bg-home-team bg-cover bg-right bg-no-repeat md:h-[400px] md:w-[700px]' />
            </div>
            <div className='relative mt-5 flex w-full flex-col-reverse items-center self-start sm:mt-7 md:mt-0.5  md:flex-row md:gap-20'>
              <div className='h-[280px] w-[340px] bg-home-group bg-cover bg-left bg-no-repeat sm:h-[400px] sm:w-[550px]' />
              <Typography
                variant={TypographyVariant.h3}
                className='text-center lg:text-right'
                as='h4'
              >
                and friends on WorkWave
              </Typography>
            </div>
            <Link href='/signup' className='mt-10 md:mt-0'>
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
