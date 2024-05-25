import { ReactNode } from "react";
import * as ST from "../../styled/style";

export type FromIprops = {
  children?: ReactNode;
};

const FormItem = ({ children }: FromIprops) => {
  return children;
};

export default FormItem;
