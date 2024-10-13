import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from "../landing_page/home/Hero";

//Test Suite
describe("Hero Component", ()=> {
    test("renders hero image", () => {
        render(<Hero/>);
        const heroImages = screen.getAllByAltText("Hero image");
        expect(heroImages[0]).toBeInTheDocument();
        expect(heroImages[0]).toHaveAttribute("src", "media/homeHero.png");
    });
});



