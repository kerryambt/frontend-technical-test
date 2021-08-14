import React from 'react';
import { render } from '@testing-library/react';
import Vehicle from '..';
import useData from '../useData';

jest.mock('../useData');

const mockResults = [
    {
        id:"xe",
        media:[
           {
              url:"/images/16x9/xe_k17.jpg"
           },
           {
              url:"/images/1x1/xe_k17.jpg"
           }
        ],
        price:"£30,000",
        description:"The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
        meta: {
           passengers:5,
           drivetrain:[
              "AWD",
              "RWD"
           ],
           bodystyles:[
              "saloon"
           ],
           emissions:{
              template:"CO2 Emissions $value g/km",
              value:99
           }
        }
     }
  ];

  describe("<Vehicle/> Tests", () => {
    it("should render", () => {
        useData.mockReturnValue([false, false, mockResults]);
        const { queryByTestId } = render(<Vehicle vehicle={mockResults}/>);

        expect(queryByTestId("vehicle")).not.toBeNull();
    });
  });