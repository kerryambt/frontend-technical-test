// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/*
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.

export default async function getData() {
  let vehicleListFixed = [];

  let vehicleList = await request("/api/vehicles.json")
    .then(response => { return response });

  for (let index = 0; index < vehicleList.length; index++) {
    let vehicleData = await request(vehicleList[index].apiUrl)
      .then(response => { return response });
      if (vehicleData){
        if (!vehicleData.price) {
          console.log("no price data");
        }
        else { 
            vehicleList[index].price = vehicleData.price;
            vehicleList[index].description = vehicleData.description;
            vehicleList[index].meta = JSON.parse(JSON.stringify(vehicleData.meta));

            vehicleListFixed.push(vehicleList[index]);
        }
      }
  }
  
  return vehicleListFixed;
}
