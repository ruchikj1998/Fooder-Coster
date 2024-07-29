import { render, screen } from "@testing-library/react"
import ResCards, {promotedResCards} from "../ResCards"
import MOCK_DATA from "./mocks/resCardMock.json"
import "@testing-library/jest-dom";

describe("Restaurant card test cases", () => {

  beforeAll(() => {
    //console.log("Before All");
  })

  beforeEach(() => {
    //console.log("Before Each");
  })

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

    afterEach(()=> {
      //console.log("After Each");
    })

    afterAll(()=> {
      //console.log("After All");
    })

})

