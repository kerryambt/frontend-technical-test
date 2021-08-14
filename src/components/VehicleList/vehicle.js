import React from 'react';
import TextDisplay from './textDisplay';
import MultiImage from './multiImage';

const Vehicle = (props) => {
    const { vehicle, setAdditionalModal } = props;

    return ( 
        <div className="carBlock" key={`vehicle${vehicle.id}`} data-testid="vehicle">
          <div className="container">
            <div className="imageBlock">
              <MultiImage vehicle={vehicle} setAdditionalModal={setAdditionalModal}/>
            </div>
            <div className="infoBlock">
              <div className="container container--infoBlock">
                <div className="row">
                  <TextDisplay text={vehicle.id} type="title"/>
                </div>
                <div className="row">
                  <TextDisplay text={vehicle.price} type="price"/>
                </div>
                <div className="row">
                  <TextDisplay text={vehicle.description} type="description"/>
                </div>
              </div>
            </div>          
          </div>
        </div>
     );
}
 
export default Vehicle;