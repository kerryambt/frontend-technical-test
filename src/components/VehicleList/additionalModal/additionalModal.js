import React from 'react';
import AdditionalModalArrayOutput from './additionalModalArrayOutput';
import './style.scss';

const AdditionalModal = (props) => {
    const { vehicle, setVisible } = props;

    return ( 
        <>
            <div className="modalFade" onClick={() => setVisible(false)}></div>

            <div className="modalBlock">
                <div className="modalBlock__image">
                    <img src={vehicle.media[0].url} alt={`${vehicle.id} car large`} role="img"/>
                </div>
                <div className="container container--modal">
                    <div className="row">
                        Number of passengers: <span>{vehicle.meta.passengers}</span>
                    </div>
                    <div className="row">
                        Drivetrain types: <AdditionalModalArrayOutput array={vehicle.meta.drivetrain}/>
                    </div>
                    <div className="row">
                        Body styles: <AdditionalModalArrayOutput array={vehicle.meta.bodystyles}/>
                    </div>
                    <div className="row">
                        CO2 Emissions <span>{vehicle.meta.emissions.value}g/km</span>
                    </div>
                    <div className="row">
                        <button aria-label="close additional information" className="modalBlock__closeButton" autoFocus onClick={() => setVisible(false)} onKeyDown={() => setVisible(false)}>close</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AdditionalModal;