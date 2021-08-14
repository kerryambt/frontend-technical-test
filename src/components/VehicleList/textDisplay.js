import React from 'react';

const TextDisplay = (props) => {
    const { text, type } = props;
    
    return ( 
        <div className={`infoBlock__${type}TextDisplay`}>
            {type === "price" ? "From " : ""}{text}
        </div>
     );
}
 
export default TextDisplay;