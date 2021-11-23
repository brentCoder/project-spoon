import React from 'react';
import TileStyle from './TileStyle';

interface Props {
    url: string,
    id: number,
    setCurrentImage: Function,
    toggleModal: Function
}

function Tile({url, id, setCurrentImage, toggleModal}:Props) {

    function showModal(isHidden:boolean) {
        setCurrentImage(url);
        toggleModal(false);
    }
    
    return (
        <TileStyle>
            <button 
                type="button" 
                className="button"
                onClick={() => showModal(true)}
            >
                <img 
                    className="tile-image"
                    src={url}
                    alt={"item"}
                />
            </button>
        </TileStyle>
    )
}

export default Tile;