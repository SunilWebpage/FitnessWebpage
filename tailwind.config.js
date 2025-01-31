/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-col": "rgb(141 81 139)",
        "bg-42": " rgb(205,219,219)",
        "foot-bg": " rgb(232,236,237)",
      },
      backgroundImage: {
        "bg-pattarn":
          "url('https://static.wixstatic.com/media/8489c8_150432af4c3c4858867851ef0de4f406~mv2_d_6867_2726_s_4_2.jpg/v1/fill/w_1655,h_1028,al_br,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8489c8_150432af4c3c4858867851ef0de4f406~mv2_d_6867_2726_s_4_2.jpg')",
        "bg-pattarn2":
          "url('https://static.wixstatic.com/media/2e2a49_b43bdcc7dd924d198b81972c05ab9f01~mv2_d_5200_3467_s_4_2.jpg/v1/fill/w_992,h_975,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_b43bdcc7dd924d198b81972c05ab9f01~mv2_d_5200_3467_s_4_2.jpg')",
      },
    },
  },
  plugins: [],
};
