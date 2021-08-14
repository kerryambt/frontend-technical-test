import React from 'react';

const AdditionalModalArrayOutput = (props) => {
    const { array } = props;

    return array.map((a, index) => (<span key={index}>{a}{index === array.length - 2 ? ", " : ""}</span>));
}
 
export default AdditionalModalArrayOutput;