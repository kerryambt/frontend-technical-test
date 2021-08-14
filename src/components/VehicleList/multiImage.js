import React from 'react';

const MultiImage = (props) => {
    const { vehicle, setAdditionalModal } = props;

    const checkKey = (key) => {
        if (key !== "Tab") setAdditionalModal(vehicle);
    }

    return ( 
        <>
            <img src={vehicle.media[0].url} className="carBlock__image carBlock__image--16x9" alt={`${vehicle.id} car small`} role="button" tabIndex="0" onClick={() => setAdditionalModal(vehicle)} onKeyDown={(e) => checkKey(e.key)}/>
            <img src={vehicle.media[1].url} className="carBlock__image carBlock__image--1x1" alt={`${vehicle.id} car small`} role="button" tabIndex="0" onClick={() => setAdditionalModal(vehicle)} onKeyDown={(e) => checkKey(e.key)}/>
        </>
     );
}
 
export default MultiImage;