import { FlexIprops } from "./styledUseType";

export const size = {
  tablet: "640px",
  laptop: "1200px",
  desktop: "1800px",
};

export const inputSize = {
  lager: "52px",
  middle: "42px",
  small: "28px",
};

export const theme = {
  color: {
    primary: "#6ABD8C",
    secondary: "#CCDFB0",
    darkGray: "#595959",
    lightGray: "#939292",
    superLightGray: "#F1F2F5",
  },
};

export const mixin = {
  flex: (prop: FlexIprops) => `
        display:flex;
        flex-direction : ${prop?.direction || "row"};
        justify-content : ${prop?.justify || "start"};
        align-items : ${prop?.align || "start"}
    `,
};
