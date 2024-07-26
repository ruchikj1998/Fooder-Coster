import { render, screen } from "@testing-library/react"
import ResCards, {promotedResCards} from "../ResCards"
import MOCK_DATA from "./mocks/resCardMock.json"
import "@testing-library/jest-dom";

test('should render Restaurant card component with props Data', () => {
  render(
    <ResCards resData={MOCK_DATA} />
  );

  const resName = screen.getByText("Sandwich N Shakes");

  expect(resName).toBeInTheDocument();
})


test('should render Restaurant card component with Promoted Label', () => {

    const PromotedResCards = promotedResCards(ResCards);

    render(
      <PromotedResCards resData={MOCK_DATA} />
    );
  
    const resName = screen.getByText("Sandwich N Shakes");
  
    expect(resName).toBeInTheDocument();
  })