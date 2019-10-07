import React from 'react';
import './CircleSelector.css';

const CircleSelector = props => {
    return (
        <div className='CircleSelector'>
            {props.circles.map(c => 
                <button 
                    className={c === props.selected ? 'selected' : ''}
                    key={c}
                    onClick={() => props.handleSelect(c)}
                >
                    Select Circle {c}
                </button>
            )}
        </div>
    );
}

export default CircleSelector;