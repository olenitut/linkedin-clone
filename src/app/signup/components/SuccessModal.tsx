import Link from 'next/link';

import { Modal } from '@/components/ui/modals';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';

type SuccessModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
};

export function SuccessModal({ isModalOpen, setIsModalOpen }: SuccessModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      handleClose={() => setIsModalOpen(false)}
      title='Welcome to Your Professional Network!'
      description="Congratulations! Your account on WorkWave has been successfully created. You're now part of a global community of professionals."
    >
      <Link href='/signin'>
        <Button variant={ButtonVariant.Primary} size={ButtonSize.Small}>
          Sign In
        </Button>
      </Link>
    </Modal>
  );
}
