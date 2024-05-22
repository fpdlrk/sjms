import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    ${reset}
html {
  height:100%;
  webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility
}
html, body {margin:0; padding:0;}
body {height:100%;font-size:14px; color:#333; font-family: 'Noto Sans KR', 'Malgun Gothic', "Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:500;line-height:1.5;}
div, ol, ul, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, fieldset, p, a, iframe, span, img, input, table, th, td {margin:0; padding:0;}
h1, h2, h3, h4, h5, h6 {font-size:16px;color:#191919;}
ol, ul {list-style:none;}
fieldset {border:none;}
legend, caption {display:none;}
i,cite,em,var,address,dfn{font-style:normal;}
img {border:0;vertical-align:middle;}

table, th, td {border-collapse:collapse;}

input, select, textarea, button, input.button, input.check, input.radio {margin:0; padding:0;font-family: 'Noto Sans KR', 'Malgun Gothic', "Helvetica Neue",Helvetica,Arial,sans-serif;vertical-align:middle;font-weight:700;font-size:12px;color:#333;}

/* input.text, textarea.text {border-top:1px solid #a2a2a2;border-right:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;border-left:1px solid #a2a2a2;padding:4px 0 7px 5px;}
input.text {width:200px;}
input.check {vertical-align:middle;margin-top:-2px;}
input[type = radio] {vertical-align:middle;margin-top:-2px;margin-right:2px;}
input[type = checkbox] {vertical-align:middle;margin-top:-2px;margin-right:2px;}
input[type = text]:disabled, select:disabled {background:#eee;}
input.file {height:25px;}
input.button {height:23px;padding:0 10px 0 10px;margin-left:2px;}
button {cursor:pointer;border:1px solid transparent;;background:none;color:#333;padding:0;margin:0;}
button:focus {
	outline:0;
} */


a:link,  a:visited {color:#333;text-decoration:none;}
a:hover,  a:active {color:#333;text-decoration:none;}

*{
   -webkit-box-sizing: border-box;
      -mox-box-sizing: border-box;
               box-sizing:border-box;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-size:12px;
	color:#d1d0d0;
  font-weight:400;
}
textarea::-webkit-input-placeholder {font-size:12px;}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  font-size:12px;
  color:#d1d0d0;
  font-weight:400;
}
textarea:-ms-input-placeholder {font-size:12px;}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select::-ms-expand {display:none;}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}  
`;

export default GlobalStyled;
