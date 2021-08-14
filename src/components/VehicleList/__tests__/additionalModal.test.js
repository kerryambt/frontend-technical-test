import React from 'react';
import { render } from '@testing-library/react';
import AdditionalModal from "../additionalModal/additionalModal";

let mockResult = {
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
     };

describe("<AdditionalModal/> Tests", () => {
    it("should display an image", () => {
        const { queryByRole } = render(<AdditionalModal vehicle={mockResult} />);

        expect(queryByRole("img")).not.toBeNull();
    });

    it("should display meta data", () => {
        const { queryByText } = render(<AdditionalModal vehicle={mockResult} />);

        expect(queryByText(mockResult.meta.passengers)).not.toBeNull();
        expect(queryByText(`${mockResult.meta.emissions.value}g/km`)).not.toBeNull();
    });
});
