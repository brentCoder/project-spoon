import React, { useState } from 'react';
import Div from './style';
import Tile from './Tile';
import CurrentPost from '../CurrentPost';

interface Props {
    filter: string
};

function Content({filter}:Props) {
    const fileCount = 2;
    const fileMap = new Array(fileCount).fill(0);;
    let currentFilter = filter || 'one';
    const [currentImage, setCurrentImage] = useState<string>('');
    const [isHidden, setHidden] = useState<boolean>(true);

    function toggleModal(status:true) {
        setHidden(status);
        document.body.style.overflow = 'auto'
    }

    return (
        <Div>
            {!isHidden ? <CurrentPost currentImage={currentImage} closeModal={toggleModal} /> : <span />}
            {fileMap.map((item, i) => <Tile 
                key={i} 
                setCurrentImage={setCurrentImage}
                url={`./assets/${currentFilter}/${i}/image.jpeg`} 
                id={i}
                toggleModal={toggleModal}
            />)}
                
                
        </Div>
    )
}

export default Content;