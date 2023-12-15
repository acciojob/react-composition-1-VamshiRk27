import React,{useState} from 'react';
import TabData from "./TabData";



const Tabs=()=>{
    // Here initial value should be displayed so we use TabData[0]
    const [activeTab,setActiveTab]=useState(TabData[0]);
    return (
        <div>
            <ul>
                {
                TabData.map((tab)=>(
                    <li onClick={()=>setActiveTab(tab)}>{tab.title}</li>
                ))
                }
            </ul>
            <div>
                {
                    <p>{activeTab.content}</p>
                }
            </div>
            <showData clickedTab={activeTab}/>
        </div>
    )
}

export default Tabs;