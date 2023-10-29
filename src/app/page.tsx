import Button from "@/components/ui/button";
import {
  IButtonSizes,
  IButtonVariants,
} from "@/components/ui/button/button-variants";

export default function Home() {
  return (
    <main>
      <Button>Primary Med</Button>
      <Button variant={IButtonVariants.PRIMARY} size={IButtonSizes.SMALL}>
        Secondary Small
      </Button>
    </main>
  );
}
