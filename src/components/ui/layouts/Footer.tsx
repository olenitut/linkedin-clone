import { Container } from '@/components/ui/layouts/Container';
import { Logo } from '@/components/ui/layouts/Header/components';
import { Typography, TypographyVariant } from '@/components/ui/typography';

export function Footer() {
  return (
    <footer className='mt-10 bg-red-10 pb-10 pt-10 md:mt-20'>
      <Container>
        <div className='flex items-center justify-between'>
          <Logo className='hidden self-start sm:block' />
          <div>
            <Typography variant={TypographyVariant.Base} className='pb-2 font-medium'>
              Authors
            </Typography>
            <ul>
              <li>
                <a
                  href='https://www.linkedin.com/in/anastasiia-hordieieva-295319259/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Anastasiia Hordieieva
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/olia-dovbush/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Olha Dovbush{' '}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant={TypographyVariant.Base} className='pb-2 font-medium'>
              About us
            </Typography>
            <ul>
              <li>Terms of use</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
