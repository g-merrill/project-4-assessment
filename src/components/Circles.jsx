import React from 'react';
import './Circles.css';

const Circles = props => {
    return (
        <div className='Circles'>
            {props.circles.map(c => 
                <div 
                    className={c === props.selected ? 'selected' : ''}
                    onClick={() => props.handleSelect(c)}
                >
                    {c}
                </div>
            )}
        </div>
    );
}

export default Circles;