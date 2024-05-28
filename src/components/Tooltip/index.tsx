import React from 'react';
import useTooltip from "../../hook/useTooltip";
import styled from "styled-components";
import { TbAlertCircle } from "react-icons/tb";
import tooltipMsg from './TooltipMsg'

interface TooltipType{
    pgx:number
    pgy:number
    pgr:number
}

const StyleTooltip = styled.div<TooltipType>`
  padding:5px 10px 5px 8px;
  font-size: 11px;
  font-weight: 400;
  position: fixed;
  top:${(props)=>(props.pgy - 15) + 'px' || 0};
  left:${(props)=>(props.pgx + 15) + 'px' || 0};
  z-index: 1000;
  background-color: #000;
  color:#fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-shadow: 1px 5px 10px rgba(0,0,0,.3);
  &.dirR {
    left:auto;
    right:${(props)=>(props.pgr + 15) + 'px' || 0};
  }
  svg {
    margin:0 6px 0 0;
    font-size: 14px;
  }
`

const CusTomTooltip = () => {
    const {tooltip, isShow} = useTooltip();
    let right = (tooltip.winWidth - tooltip.x)
    return <>
        {(isShow && tooltip.content) &&
            <StyleTooltip pgr={right} pgx={tooltip.x} pgy={tooltip.y} className={`${tooltip.winWidth < (tooltip.x + 300) && 'dirR'}`}>
                {/*<TbAlertCircle />*/}
                {tooltipMsg[tooltip.content]}
            </StyleTooltip>
        }
    </>

}

export default CusTomTooltip;