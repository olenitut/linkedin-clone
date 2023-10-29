import buttonVariants from "./button-variants";

type Props = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  children: string | React.ReactNode;
};

const Button = ({ variant = "primary", children, size = "medium" }: Props) => {
  const classes = buttonVariants({ intent: variant, size });

  return <div className={classes}>{children}</div>;
};

export default Button;
