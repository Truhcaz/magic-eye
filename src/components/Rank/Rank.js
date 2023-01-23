import React from "react";
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div className="Rank">
            <div className="container">
                {
                    `${name} your current entry count is...`
                }
            </div>
            <div className="rank-number">
                {
                    `${entries}`
                }
            </div>
        </div>
    )
}

export default Rank;