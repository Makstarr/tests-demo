import { DataGrid } from "@material-ui/data-grid";
import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { Example2, rows } from "./Example2";
import user from "@testing-library/user-event";

jest.mock("@material-ui/data-grid", () => ({
  ...jest.requireActual("@material-ui/data-grid"),
  DataGrid: jest.fn(() => <div>Table</div>),
}));

const mockedDataGrid = mocked(DataGrid);

describe("MyComponent", () => {
  beforeEach(() => {
    mockedDataGrid.mockClear();
  });

  it("Renders example 2 with correct function and applise it to the button", () => {
    const myOnMoney = jest.fn();
    render(<Example2 onMoney={myOnMoney} />);
    user.click(screen.getByRole("button", { name: "Give me 33 dollars" }));
    expect(myOnMoney).toHaveBeenCalledTimes(1);
  });

  it("renders table passing the expected props", () => {
    render(<Example2 onMoney={jest.fn()} />);
    expect(mockedDataGrid).toHaveBeenCalledTimes(1);
    expect(mockedDataGrid).toHaveBeenLastCalledWith({
      rows: rows,
      columns: [
        expect.objectContaining({ field: "id" }),
        expect.objectContaining({ field: "firstName" }),
        expect.objectContaining({ field: "lastName" }),
        expect.objectContaining({ field: "age" }),
      ],
      pageSize: 5,
      checkboxSelection: true,
    });
  });
});
