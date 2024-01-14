import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "First Post" }],
    });
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
