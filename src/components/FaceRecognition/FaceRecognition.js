import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, boxes }) => {

    const renderedBoxes = boxes.map((box, i) => {
    return(
    <div key={i} className='bounding-box' style={{ top: boxes[i].topRow, right: boxes[i].rightCol, bottom: boxes[i].botRow, left: boxes[i].leftCol }}></div>
        )
    });
    
    return (
        <div className='container'>
            <div className='recognition'>
                <img id='inputeImage' alt='' src={imageURL} width='500px' height='auto' />
                {renderedBoxes}
            </div>
        </div>
    )
}

export default FaceRecognition;