import React from 'react';
import Tab  from "./Tab"
interface TabsProps {
    tabsArray: Array<any>
}

export default function Tabs(props: TabsProps){
    const arrLength = props?.tabsArray?.length;
    const compareIndex = (idx: number):boolean => idx === arrLength - 1
    return (
        <div className="tabs-container">
            {props?.tabsArray?.map((tab, index)=>{
                return (<React.Fragment key={`${tab?.tab?.id}--${index}`}><Tab  {...tab}/>{!compareIndex(index) ? <div className='tab-delimiter'/> : null}</React.Fragment>)
            })}
        </div>
    )
}