import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div className="ImageLinkForm">
            <p className="introduction">
                {'This Magic Eye will detect faces in your pictures. Give it a try !'}
            </p>
            <div className="container">
                <div className="form">
                    <input className="text-input" type='text' onChange={onInputChange} />
                    <button className="submit-btn" onClick={onPictureSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;