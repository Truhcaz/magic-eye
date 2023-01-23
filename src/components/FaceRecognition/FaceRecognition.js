import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
    return (
        <div className='container'>
            <div className='recognition'>
                <img id='inputeImage' alt='' src={imageURL} width='500px' height='auto' />
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.botRow, left: box.leftCol }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;