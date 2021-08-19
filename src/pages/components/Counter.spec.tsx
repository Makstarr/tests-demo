import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { fireEvent, waitFor } from "@testing-library/dom";
import user from "@testing-library/user-event";

describe("Counter", () => {
  describe("Initialized witg defCount=10 and description WWW", () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description={"WWW"} />);
    });
    it("renders Current Count: 10", () => {
      expect(screen.getByText("Current counter: 10")).toBeInTheDocument();
    });
    it("renders title as WWW", () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });
    describe("when the incrementor changes to 5 and + is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Increment" }));
      });
      it("renders Current Count: 15", async () => {
        await waitFor(() => {
          expect(screen.getByText("Current counter: 15")).toBeInTheDocument();
        });
      });
    });
    describe("when the incrementor changes to 25 and - is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}25");
        user.click(screen.getByRole("button", { name: "-" }));
      });
      it("renders Current Count:- 15", () => {
        expect(screen.getByText("Current counter: -15")).toBeInTheDocument();
      });
    });
  });

  describe("Initialized witg defCount=0 and description My counter", () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description={"My counter"} />);
    });
    it("renders Current Count: 0", () => {
      expect(screen.getByText("Current counter: 0")).toBeInTheDocument();
    });
    it("renders title as My Counter", () => {
      expect(screen.getByText(/My counter/)).toBeInTheDocument();
    });
    describe("When + is clicked", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Increment" }));
      });
      it("clic + adds 1", async () => {
        await waitFor(() => {
          expect(screen.getByText("Current counter: 1")).toBeInTheDocument();
        });
      });
    });
    describe("When - is clicked", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "-" }));
      });
      it("clic - removes 1", () => {
        expect(screen.getByText("Current counter: -1")).toBeInTheDocument();
      });
    });
  });
});
