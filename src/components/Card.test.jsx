/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from "@testing-library/react";
import Card from './Card';


describe("Card", () => {
  it("Must display a title", () => {
      const props = {
          id: "26",
          image: "",
          name: "raichu",
          type: "electric",
    };

    const screen = render(<Card {...props} />);
    expect(screen.getByText(`#0${props.id}`)).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(`Type:${props.type}`)).toBeInTheDocument();
   

    
  });
});
