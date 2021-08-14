import React from 'react';
import { render, screen } from '@testing-library/react';
import AdditionalModalArrayOutput from "../additionalModal/additionalModalArrayOutput";

describe("<AdditionalModalArrayOutput/> Tests", () => {
    it("should display passed in data data", () => {
        const component = render(<AdditionalModalArrayOutput array={["test1", "test2"]} />);

        expect(screen.findAllByText("test1")).not.toBeNull();
    });

    it("should display a comma as there are multiple values", () => {
        const component = render(<AdditionalModalArrayOutput array={["test1", "test2"]} />);

        expect(screen.findAllByText(",")).not.toBeNull();
    });
});
