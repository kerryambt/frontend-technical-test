import React, { useState } from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from './vehicle';
import AdditionalModal from './additionalModal/additionalModal';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState();

  const setAdditionalModal = (vehicle) => {
    setModalVisible(true);
    setCurrentVehicle(vehicle);
  }

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div data-testid="results" className="container">
      {modalVisible ? <AdditionalModal vehicle={currentVehicle} setVisible={setModalVisible} /> : ""}

      {vehicles.map((vehicle) =>(
        <React.Fragment key={`vehicle${vehicle.id}`}>
          <Vehicle vehicle={vehicle} setAdditionalModal={setAdditionalModal}/>
        </React.Fragment>
      ))}
    </div>
  );
}
