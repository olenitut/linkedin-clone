/// TEST FOR NOW
import { cva } from "class-variance-authority";

export enum IButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum IButtonSizes {
  MEDIUM = "medium",
  SMALL = "small",
}

const buttonVariants = cva(
  ["font-semibold", "border", "rounded", "w-max", "cursor-pointer"],
  {
    variants: {
      intent: {
        [IButtonVariants.PRIMARY]: [
          "bg-blue-500",
          "text-white",
          "border-transparent",
          "hover:bg-blue-600",
        ],
        [IButtonVariants.SECONDARY]: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
      },
      size: {
        [IButtonSizes.SMALL]: ["text-sm", "py-1", "px-2"],
        [IButtonSizes.MEDIUM]: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      {
        intent: IButtonVariants.PRIMARY,
        size: IButtonSizes.MEDIUM,
        class: "uppercase",
      },
    ],
    defaultVariants: {
      intent: IButtonVariants.PRIMARY,
      size: IButtonSizes.MEDIUM,
    },
  }
);

//USAGE

// button() - returns default variant
// button({ intent: IButtonVariants.SECONDARY, size: IButtonSizes.SMALL });

export default buttonVariants;
