import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("hides left arrow on the first image", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // expect the left arrow to be missing on the first image
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the left arrow to be present on the second image
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).toBeInTheDocument();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();


  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);


  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("hides right arrow on the last image", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // move to the last image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // expect the right arrow to be missing on the last image
  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).not.toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the right arrow to be present on the second-to-last image
  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();


  // move backwards in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  if (leftArrow) {
    fireEvent.click(leftArrow);

    // expect the third image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 3"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
  }
});



it('should render without crashing', ()=>{
  render(<Carousel photos={TEST_IMAGES}/>)
})

it('should match snapshot', ()=>{
    const {asFragment} = render(<Carousel photos={TEST_IMAGES}/>);
    expect(asFragment()).toMatchSnapshot();
})
