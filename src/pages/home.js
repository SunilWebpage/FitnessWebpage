import React from "react";
import "./home.css";
import Card from "../components/card-con";
import Slider from "../components/slider";
import Card2 from "../components/card2";
import useScrollToTop from "../components/useScrollToTop";

const cardsData2 = [
  {
    cardImage2:
      "https://static.wixstatic.com/media/8489c8_23a87a36e27f4f01bd0f906ce92de77b~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_516,h_516,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_23a87a36e27f4f01bd0f906ce92de77b~mv2_d_4498_2833_s_4_2.jpg",
  },
  {
    cardImage2:
      "https://static.wixstatic.com/media/8489c8_8cb73bfe3cd649e9a2d128159a181f6e~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_516,h_516,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_8cb73bfe3cd649e9a2d128159a181f6e~mv2_d_4498_2833_s_4_2.jpg",
  },
  {
    cardImage2:
      "https://static.wixstatic.com/media/8489c8_e759f3cb269540668af302340a211f3d~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_516,h_516,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_e759f3cb269540668af302340a211f3d~mv2_d_4498_2833_s_4_2.jpg",
  },
  {
    cardImage2:
      "https://static.wixstatic.com/media/8489c8_8cb73bfe3cd649e9a2d128159a181f6e~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_516,h_516,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_8cb73bfe3cd649e9a2d128159a181f6e~mv2_d_4498_2833_s_4_2.jpg",
  },
  {
    cardImage2:
      "https://static.wixstatic.com/media/8489c8_23a87a36e27f4f01bd0f906ce92de77b~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_516,h_516,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_23a87a36e27f4f01bd0f906ce92de77b~mv2_d_4498_2833_s_4_2.jpg",
  },
];

const cardsData = [
  {
    headName: "Mommy Time",
    cardImage:
      "https://static.wixstatic.com/media/8489c8_23a87a36e27f4f01bd0f906ce92de77b~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_516,h_516,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_23a87a36e27f4f01bd0f906ce92de77b~mv2_d_4498_2833_s_4_2.jpg",
  },
  {
    headName: "Mon Plus one",
    cardImage:
      "https://static.wixstatic.com/media/8489c8_8cb73bfe3cd649e9a2d128159a181f6e~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_516,h_516,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_8cb73bfe3cd649e9a2d128159a181f6e~mv2_d_4498_2833_s_4_2.jpg",
  },
  {
    headName: "mom super",
    cardImage:
      "https://static.wixstatic.com/media/8489c8_e759f3cb269540668af302340a211f3d~mv2_d_4498_2833_s_4_2.jpg/v1/fill/w_516,h_516,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8489c8_e759f3cb269540668af302340a211f3d~mv2_d_4498_2833_s_4_2.jpg",
  },
];

function Home() {
  useScrollToTop();
  return (
    <div className=" px-28 border max-md:px-5  ">
      <div className="mt-20">
        <div className="m-auto py-10 ">
          <div className="text-div">
            <h1>PLUSONE</h1>
            <p>For Happy & Fit Mommies</p>
            <button>Book Now</button>
          </div>
        </div>
        <img
          src="https://static.wixstatic.com/media/2e2a49_394542b571a64edc9f898ae0ac877ada~mv2_d_6789_3704_s_4_2.jpg/v1/fill/w_1655,h_1230,al_b,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_394542b571a64edc9f898ae0ac877ada~mv2_d_6789_3704_s_4_2.jpg"
          alt="image"
        />
        <div className="text-div-2">
          <h1>PLUSONE</h1>
          <p>For Happy & Fit Mommies</p>
          <button>Book Now</button>
        </div>
      </div>
      <div className="place-items-center py-28 font-bold text-4xl text-gray-600">
        <h1>Our Programs in SF</h1>
      </div>
      <div className="card-img max-md:flex max-md:flex-wrap  ">
        {cardsData.map((val, i) => (
          <Card props={val} key={i} />
        ))}
      </div>
      <div className="py-10  ">
        <div className=" bg-bg-pattarn h-ful  bg-cover bg-center bg-no-repeat max-md:bg-none ">
          <div className="our-loc">
            <div className="loc-box ">
              <div>
                <h1 className="font-bold text-4xl">Our Locations</h1>
              </div>
              <div>
                <h1>San Francisco</h1>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                </p>
              </div>
              <div>
                <h1>Marin</h1>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                </p>
              </div>
              <div>
                <h1>Oakland</h1>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-story">
        <div>
          <h1 className="font-bold text-4xl">Our Story</h1>
        </div>
        <div>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div>
          <button>Read More</button>
        </div>
      </div>
      <div className="text-slider-cont ">
        <div className=" w-[900px] flex justify-center items-center  ">
          <div className="slider-card1  ">
            <div>
              <h1 className="font-bold text-4xl w-[300px] max-md:w-[250px] p-5">
                What Our Mommies Say
              </h1>
            </div>
            <div className="hidden max-lg:flex-col max:lg:flex-wrap gap-5 p-5 max-lg:flex w-[250px]">
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                tell their friends how great you are.”
              </p>
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                tell their friends how great you are.”
              </p>
              <p>
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                tell their friends how great you are.”
              </p>
            </div>
            <div className="max-lg:hidden">
              <Slider />
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="slider-card2 max-md:hidden max-lg:hidden  ">
            <img
              src="https://static.wixstatic.com/media/2e2a49_b43bdcc7dd924d198b81972c05ab9f01~mv2_d_5200_3467_s_4_2.jpg/v1/fill/w_1566,h_975,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_b43bdcc7dd924d198b81972c05ab9f01~mv2_d_5200_3467_s_4_2.jpg"
              alt=""
              className="h-[700px] w-[1000px]"
            />
          </div>
        </div>
      </div>

      <div className="watch-us">
        <div>
          <h1>Watch Us Go</h1>
        </div>
        <div>
          <p>
            Watch Us Go I'm a paragraph. Click here to add your own text and
            edit me. I’m a great place for you to tell a story and let your
            users know a little more about you.
          </p>
        </div>
      </div>

      <div className="py-10 gap-5 flex ">
        {cardsData2.map((val, i) => (
          <Card2 props={val} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
