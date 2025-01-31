import { useState } from "react";
import Carousel from "react-simply-carousel";

const Slider = () => {
  const arr = [
    "1I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    "2I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers tell their friends how great you are.",
    "3I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    "4I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers tell their friends how great you are.",
  ];

  //   const [current, setCurrent] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  //   let arrLength = arr.length - 1;

  //   const prevSlide = () => {
  //     if (current == 0 || current < arrLength) {
  //       setCurrent(arrLength - 1);
  //     } else {
  //       setCurrent(current - 1);
  //     }
  //   };
  //   const nextSlide = () => {
  //     if (current == arrLength || current > arrLength - 1) {
  //       setCurrent(0);
  //     } else {
  //       setCurrent(current + 1);
  //     }
  //   };

  return (
    <>
      <div>
        <Carousel
          containerProps={{
            style: {
              display: "flex",
              flexWrap: "wrap",
              // alignSelf: "center",

              width: "400px",
            },
          }}
          preventScrollOnSwipe
          swipeTreshold={60}
          activeSlideIndex={activeSlide}
          activeSlideProps={
            {
              // style: {
              //   background: "blue",
              // },
            }
          }
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: ">",
            style: {
              position: "relative",

              left: "220px",
              top: "-75px",
              fontWeight: "lighter",
              fontSize: "30px",
              margin: "0px",
              color: "gray",
            },
          }}
          backwardBtnProps={{
            children: "<",
            style: {
              position: "relative",
              fontWeight: "lighter",
              right: "215px",
              top: "50px",
              paddingRight: "10px",
              fontSize: "30px",
              margin: "0px",
              color: "gray",
            },
          }}
          //   dotsNav={{
          //     show: true,
          //     itemBtnProps: {
          //       style: {
          //         height: 16,
          //         width: 16,
          //         borderRadius: "50%",
          //         border: 0,
          //       },
          //     },
          //     activeItemBtnProps: {
          //       style: {
          //         height: 16,
          //         width: 16,
          //         borderRadius: "50%",
          //         border: 0,
          //         background: "black",
          //       },
          //     },
          //   }}
          itemsToShow={2}
          speed={400}
          centerMode
        >
          {arr.map((item, index) => (
            <div
              style={{
                width: "400px",

                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "5px",
                  width: "400px",
                  lineHeight: "27px",
                  overflow: "hidden",
                  fontSize: "14px",
                  fontWeight: "lighter",
                }}
                key={index}
              >
                {item}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
