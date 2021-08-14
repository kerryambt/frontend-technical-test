import React from 'react';
import { render } from '@testing-library/react';
import TextDisplay from '../textDisplay';

describe("<TextDisplay/> Tests", () => {
    it("should display specified text", () => {
        const { queryByText } = render(<TextDisplay text="testing text"/>);

        expect(queryByText("testing text")).not.toBeNull();
    });

    it("should display 'From ' if type === 'price'", () => {
        const { findByText } = render(<TextDisplay text="testing text" type="price"/>);

        expect(findByText("From ")).not.toBeNull();
    });
});
