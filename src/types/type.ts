export interface FlexIprops {
  direction: string;
  justify: string;
  align: string;
}

export interface InputFieldIprops {
  type: "text" | "password" | "number";
  value: string | number;
  size?: string;
}
