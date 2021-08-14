import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MultiImage from '..';
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

  describe("<MultiImage/> Tests", () => {
    it("should render two images (as CSS is not used to hide one in tests)", () => {
        useData.mockReturnValue([false, false, mockResults]);
        const { queryAllByRole } = render(<MultiImage vehicle={mockResults}/>);

        expect(queryAllByRole("button").length).toBe(2);
    });

    it("should fire event on click and open modal", () => {
        useData.mockReturnValue([false, false, mockResults]);
        const { queryAllByRole } = render(<MultiImage vehicle={mockResults}/>);

        const image = queryAllByRole("button")[0];
        fireEvent.click(image);
        expect(screen.getByText("close")).not.toBeNull();
    })
  });