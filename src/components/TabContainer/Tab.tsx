import React from 'react';
import Div from './TabStyle';

interface Props {
    name: string,
    isSelected: boolean,
    setSelected: Function
}

function Tab({name, isSelected, setSelected}:Props) {

    function handleClick(target:string) {
        window.history.pushState('page2', 'Title', target)
        setSelected(name)
    };

    return (
        <Div>
            <button 
                className="tabButton" 
                onClick={() => handleClick(`/${name}`)}
                style={isSelected ? {color: '#282626', borderStyle: 'solid'} : {color: '#817777', borderStyle: 'solid', borderColor: '#ead6d5'}}
            >
                {name}
            </button>
        </Div>
    )
}

export default Tab;