import React from "react";
import Contact from "./contact";
import Footer from "../pages/footer";

export default function About() {
  return (
    <div className="border  border-black ">
      <div className=" mt-20">
        <div className="px-20">
          <div className="our-class">
            <div>
              <h1>About Us</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap py-10 justify-center border">
          <div className=" ">
            <div className="h-full">
              <img
                src="https://static.wixstatic.com/media/2e2a49_78863c39b55149acbe6ce50d56f4fe99~mv2_d_5545_3728_s_4_2.jpg/v1/crop/x_1483,y_0,w_3265,h_3728/fill/w_737,h_842,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_158616065.jpg"
                alt=""
                className="w-full h-[500px] place-self-center"
              />
            </div>
          </div>
          <div className=" flex flex-wrap">
            <div className="w-[500px] p-10 space-y-5">
              <div>
                <h1 className="font-bold text-4xl">Our Story</h1>
              </div>
              <div className="space-y-7 leading-7 font-light">
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </p>
                <p>
                  This is a great space to write a long text about your company
                  and your services. You can use this space to go into a little
                  more detail about your company. Talk about your team and what
                  services you provide. Tell your visitors the story of how you
                  came up with the idea for your business and what makes you
                  different from your competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap py-10  justify-center ">
        <div className=" flex flex-wrap">
          <div className="w-[500px] p-10 space-y-5">
            <div>
              <h1 className="font-bold text-4xl">Our Vision</h1>
            </div>
            <div className="space-y-7 leading-7 font-light">
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p>
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors.
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="h-full">
            <img
              src="https://static.wixstatic.com/media/2e2a49_6fbf081849e547b0a22b81db8659c3e9~mv2_d_5200_3467_s_4_2.jpg/v1/crop/x_1711,y_0,w_3032,h_3467/fill/w_737,h_842,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-83404428.jpg"
              alt=""
              className="w-full h-[500px]"
            />
          </div>
        </div>
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
