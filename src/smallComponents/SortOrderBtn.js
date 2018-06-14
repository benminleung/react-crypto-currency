import React from 'react';

const SortOrderBtn = (props) => {
    // console.log(props.ascending);
    const azDir = (topBottom) => {
        const a = <div>A</div>
        const z = <div>Z</div>
        return topBottom === 'top'
        ?   props.ascending ? a : z
        :   props.ascending ? z : a

        
    }

    return (<label className="sortOrder sortBtn btnShadow" onClick={() => props.ascendingChange()}>
            <div className="sortArrow"> &#8595; </div>
            {azDir('top')}
            {azDir()}
        </label>)
}

export default SortOrderBtn;