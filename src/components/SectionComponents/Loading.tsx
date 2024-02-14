import React from "react";

const Loading = ({
  loading,
  loadingAnimation,
}: {
  loading: boolean;
  loadingAnimation: boolean;
}) => {
  return (
    <>
      {/* Loading */}
      {loading ? (
        <div className="w-screen h-screen font-FiraCode overflow-hidden absolute z-50">
          <div
            className={
              !loadingAnimation
                ? "overflow-hidden duration-700 h-[50vh] w-screen flex justify-center items-end bg-[#202123]"
                : "overflow-hidden duration-700 h-[50vh] w-screen flex justify-center items-end bg-[#202123] -translate-y-[100%]"
            }
          >
            <div className="text-[18vw] md:text-[14vw] lg:text-[10vw] font-Poppins font-black leading-none translate-y-[50%]">
              welcome
            </div>
          </div>

          <div
            className={
              !loadingAnimation
                ? "overflow-hidden duration-700 h-[50vh] w-screen flex justify-center items-start bg-[#202123]"
                : "overflow-hidden duration-700 h-[50vh] w-screen flex justify-center items-start bg-[#202123] translate-y-[100%]"
            }
          >
            <div className="text-[18vw] md:text-[14vw] lg:text-[10vw] font-Poppins font-black duration-300 leading-none -translate-y-[50%]">
              welcome
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loading;
