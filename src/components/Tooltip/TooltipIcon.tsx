import React from 'react';
import {TbAlertCircle, TbQuestionMark} from "react-icons/tb";
import styled from "styled-components";

interface IconType {
    mg?:string
}

const StyleTooltipIcon = styled.span<IconType>`
  width:14px;
  height:14px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  position: relative;
  margin:${(props) => props.mg || '-2px 0 0 0'};
  cursor:help;
  //border:1px solid var(--color05);
  background-color: var(--line01);
  border-radius: 50%;
  svg {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -46%);
    font-size: 12px;
    color:var(--white)
  }
`;
const TooltipIcon = ({...rest}) => {
    return (
        //<TbQuestionMark />
            <StyleTooltipIcon {...rest}><TbQuestionMark /></StyleTooltipIcon>
    );
}

export default TooltipIcon;