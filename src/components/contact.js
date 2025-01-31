import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="">
      <div className="p-24 text-center text-5xl font-bold text-gray-700">
        Let's Get Moving
      </div>
      <div className="flex justify-center flex-wrap py-10">
        <div className="  p-20 space-y-5  ">
          <div>
            <h2 className="text-3xl text-gray-600  font-bold">
              Join us on mobile!
            </h2>
          </div>
          <div>
            <p className="  w-[300px] font-light text-md ">
              Download the Spaces by Wix app and join “” to easily stay updated
              on the go.
            </p>
          </div>
          <div className=" flex gap-4">
            <img
              src="https://static.wixstatic.com/media/3e41b8_a0bf062897f64090b91f438ce6bf69ba~mv2.png/v1/fill/w_202,h_60,al_c,lg_1,q_85,enc_avif,quality_auto/apple.png"
              alt=""
              className="w-[150px]"
            />
            <img
              src="https://static.wixstatic.com/media/3e41b8_c7dfb607579c44039e9f8c2610f15d3d~mv2.png/v1/fill/w_202,h_60,al_c,lg_1,q_85,enc_avif,quality_auto/Google.png"
              alt=""
              className="w-[150px]"
            />
          </div>
        </div>
        <div className=" px-20 flex flex-col flex-wrap gap-5 max-md:w-[500px] ">
          <div className="first-input flex gap-5">
            <div className="text-1">
              <h1>First Name*</h1>
              <input type="text" />
            </div>
            <div className="text-1">
              <h1>Last Name*</h1>
              <input type="text" />
            </div>
          </div>

          <div className=" space-y-5">
            <div className="text-2 space-y-5">
              <h1>Email*</h1>
              <input type="text" />
            </div>
            <div className="text-3 flex flex-col gap-y-5">
              <h1>Message</h1>
              <input type="text" />
              <button className="place-self-end w-[200px] bg-gray-300 p-2">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
