import React from "react";

import { render, fireEvent } from "@testing-library/react";

import Todo from "./Todo";

describe("Tests from Todo component", () => {
  it("Should add new task when form has been submitted", async () => {
    //render todo
    const { getByTestId, getByText } = render(<Todo />);
    const fieldNode = await getByTestId("form-field");

    const newTask = "testing";
    fireEvent.change(fieldNode, { target: { value: newTask } });
    expect(fieldNode.value).toEqual(newTask);

    const btnNode = await getByTestId("form-btn");
    fireEvent.click(btnNode);

    const tdNode = await getByText(newTask);

    expect(tdNode).toBeDefined();
  });
});
