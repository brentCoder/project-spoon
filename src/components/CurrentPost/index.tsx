import React from 'react';
import Div from './style';
import ReactDOM from 'react-dom';

interface Props {
    closeModal: Function,
    currentImage: string
}

function CurrentPost({closeModal, currentImage}:Props) {
    document.body.style.overflow = 'hidden'
    
    return ReactDOM.createPortal(
        <Div>
            <div className="container">
                <button 
                    className="button" 
                    onClick={() => closeModal(true)} 
                    type="button">
                        close
                </button>
                <div className="panel">
                    <img className="post-image" src={currentImage} alt={"post text"} />
                </div>
                <div className="panel" ></div>
            </div>
        </Div>,
        document.getElementById('modal')!
    )
}

export default CurrentPost;