import { MouseEventHandler } from "react";

export interface CustomButtonPops {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  steManufacturer: (manufacturer: string) => void;
}
