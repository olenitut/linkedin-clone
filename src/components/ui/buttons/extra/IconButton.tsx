import { ButtonVariant, Button, ButtonProps } from '../main';
import { icons, IconName } from './icons';

type IconButtonProps = ButtonProps & {
  iconName: IconName;
  height?: 'normal' | 'mini';
};

export function IconButton({ iconName, height = 'normal', ...delegated }: IconButtonProps) {
  return (
    <Button
      variant={height === 'normal' ? ButtonVariant.Circle : ButtonVariant.CircleMini}
      type='button'
      {...delegated}
    >
      {icons[iconName]}
    </Button>
  );
}
