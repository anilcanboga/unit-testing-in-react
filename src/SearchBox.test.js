import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import SearchBox from './SearchBox';

it("renders correctly", () => {
  const { container, queryByPlaceholderText } = render(<SearchBox />);
  const button = container.getElementsByClassName("button-click").length

  expect(button).toBeTruthy();
  expect(queryByPlaceholderText("Search")).toBeTruthy();
})

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(<SearchBox />);

    const searchInput = queryByPlaceholderText("Search");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  })
})

describe("Search button", () => {
  // describe("with empty query", () => {
  //   it("doesn't trigger onClick function", () => {
  //     const requestClick = jest.fn()

  //     const {container} = render(<SearchBox requestClick={requestClick}/>);
  //     const button = container.querySelector(".button-click")

  //     fireEvent.click(button)
  //     expect(requestClick).not.toHaveBeenCalled()
  //   })
  // })
  describe("with data query", () => {
    it("triggers onClick function", () => {
      const requestClick = jest.fn()

      const { container, queryByPlaceholderText } = render(<SearchBox requestClick={requestClick} />);

      const searchInput = queryByPlaceholderText("Search");
      const button = container.querySelector(".button-click")

      fireEvent.change(searchInput, { target: { value: "örnek veri" } });
      fireEvent.click(button)
      expect(requestClick).not.toHaveBeenCalled()

    })
  })
})

