import React from "react";
import * as ST from "../../styled/style";
import { LabelIprops } from "../../types/type";

const Label = ({ text, icon, bg, color, iconColor, textColor }: LabelIprops) => {
  return (
    <ST.SapnItem $background={bg} $fc={color}>
      {icon && <ST.Icon $fc={iconColor}>{icon}</ST.Icon>}
      <ST.SapnItem $fc={textColor}>{text}</ST.SapnItem>
    </ST.SapnItem>
  );
};

export default Label;
