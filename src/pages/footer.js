import React from "react";

export default function Footer() {
  return (
    <div className=" w-fit flex flex-col justify-self-center py-10  ">
      <div className="flex justify-between flex-wrap bg-foot-bg px-28 py-20 text-gray-600 ">
        <div className="space-y-5">
          <div>
            <h1 className="font-bold text-2xl">Subscribe to Our Newsletter</h1>
          </div>
          <div className="space-y-3 font-light ">
            <h1>Email*</h1>
            <input
              type="text"
              className="border border-black bg-transparent w-[200px] h-10"
            />
          </div>
          <div className="flex gap-5 font-light">
            <div className="">
              <input type="checkbox" id="1" />
              <label for="1"> Yes, subscribe me to your newsletter.</label>
            </div>
            <button className="bg-bg-42 px-5 py-2">Subscribe</button>
          </div>
        </div>

        <div className=" p-5 space-y-5 ">
          <div className="space-x-5 ">
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
          <div className="flex gap-1">
            <a href="#">info@mysite.com</a>
            <p>123-456-7890</p>
          </div>
          <div>
            <p>Office: 500 Terry Francine Street, San Francisco, CA 94158</p>
          </div>
        </div>
      </div>

      <p className="text-center py-3 font-light">
        © 2035 by PLUSONE. Powered and secured by Wix
      </p>
    </div>
  );
}
