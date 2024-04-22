import React from "react";

const Top = () => {
  return (
    <>
      {/* {desktop view} */}

      <div
        className="h-screen bg-center bg-cover relative flex items-center justify-center"
        style={{
          backgroundImage: `url("src/assets/BEIGE_Mushrooms_Top 1.png")`,
        }}
      >
        <div className="text-center">
          <h1 className="font-sans text-4xl text-white">CRAFTING YOURS</h1>

          <h1 className="font-serif font-bold text-4xl text-white">
            MASTERPIECE
          </h1>
        </div>
      </div>
    </>
  );
};

export default Top;
