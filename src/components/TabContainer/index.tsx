import React, {useEffect, useState} from 'react';
import Div from './style';
import Tab from './Tab';
import { nanoid } from 'nanoid';

interface tabButton {
    id: string,
    name: string,
}

interface Props {
    setFilter: Function
}

function TabContainer({setFilter}:Props) {
    const [tabs, setTabs] = useState<Array<tabButton>>([
        {
            id: nanoid(),
            name: "one",
        },

        {
            id: nanoid(),
            name: "two",
        },

        {
            id: nanoid(),
            name: "three"
        }
    ]);

    const [selected, setSelected] = useState<string>(tabs[0].name);

    function findByName(name:string) {
        tabs.map(tab => {
            if(tab.name === name) {
                setSelected(name);
                setFilter(name);
            }
        })
    }

    useEffect(() => {
        let query = window.location.href.substring(1);
        let token = query.split("/");
        let id = "";
        
        if(token[3] !== undefined) {
            id = token[3];
        }

        else {
            id = "one";
        }

        findByName(id);
    }, [selected]);

    return (
        <Div>
            {tabs.map(tab => (
                <Tab key={tab.id} name={tab.name} setSelected={setSelected} isSelected={tab.name === selected}/>
            ))}
        </Div>
    )
}

export default TabContainer;