import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewReviewForm from "../components/NewReviewForm";

describe("<NewReviewForm />", () => {
  let getByTestId;

  describe("clicking the submit button", () => {
    let sendHandler;
    beforeEach(async () => {
      sendHandler = jest.fn().mockName("sendHandler");
      ({ getByTestId } = render(<NewReviewForm onSend={sendHandler} />));
      await userEvent.type(getByTestId("reviewText"), "New review");
      userEvent.click(getByTestId("submitButton"));
    });

    it("clears the text field", () => {
      expect(getByTestId("reviewText").value).toEqual("");
    });

    it("call the send handler", () => {
      expect(sendHandler).toHaveBeenCalledWith("New review");
    });
  });
});
