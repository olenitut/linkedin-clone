import buttonVariants, { IButtonSizes, IButtonVariants } from './button-variants';

type Props = {
  variant?: IButtonVariants;
  size?: IButtonSizes;
  children: string | React.ReactNode;
};

export function Button({
  variant = IButtonVariants.PRIMARY,
  children,
  size = IButtonSizes.MEDIUM,
}: Props) {
  const classes = buttonVariants({ intent: variant, size });

  return <div className={classes}>{children}</div>;
}
