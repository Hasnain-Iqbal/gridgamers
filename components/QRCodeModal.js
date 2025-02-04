import { useState, useRef } from "react";
import Modal from "react-modal";
import AndroidSVGComponent from "../components/AndroidSVGComponent";
import Apple from "../public/assets/ApplePlayButton.svg";
const QRCodeModal = (props) => {
  const {} = props;
  const [modalOpen, setModalOpen] = useState(false);

  const openLinkAndroid = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.esolutions.grid",
      "_blank"
    );
  };
  const openLinkIOS = () => {
    window.open(
      "https://apps.apple.com/us/app/grid-tournaments-events/id6447766313",
      "_blank"
    );
  };

  return (
    <div className="flex justify-center">
        <button
        className="border border-blue-900 mx-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-800"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
      >
        
        Download the app
      </button>
        <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                className="fixed inset-0 flex items-center justify-center px-4 py-6 z-[1000]"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[999]"
                ariaHideApp={false} // To prevent warnings during SSR
                >
            <div className="relative max-w-2xl w-full lg:p-10 xs:p-6 bg-[#f2f2f2] rounded-xl">
            <button
                onClick={() => setModalOpen(false)}
                className="absolute top-2 right-2 bg-white text-2xl text-black rounded-lg lg:p-2 xs:p-0"
            >
                ✕
            </button>
            <div className="bg-[#f2f2f2] text-center rounded-xl">
                    <h1 className="text-xl font-semibold">
                        Download Grid Mobile
                    </h1>
                <div className=" flex flex-wrap m-5 justify-around items-center">
                    <div className="flex flex-col items-center justify-center xs:mb-4 md:mb-0 p-5 border-[1px] border-gray-400 rounded-2xl">
                        <img 
                            className="mb-5 xs:hidden md:block"
                            width={"200px"}
                            height={"200px"}
                            alt="app-store-img"
                            src="/assets/play-code-img.png"
                            />
                        <img
                            className="cursor-pointer"
                            src={"../assets/GooglePlayButton.png"}
                            onClick={openLinkAndroid}
                            width={"200px"}
                            height={"100px"}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center p-5 border-[1px] border-gray-400 rounded-2xl">
                        <img 
                            className="mb-5 xs:hidden md:block"
                            width={"200px"}
                            height={"200px"}
                            alt="app-store-img"
                            src="/assets/app-store-code.png"
                            />
                        <Apple
                            onClick={openLinkIOS}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
          </div>
        </Modal>
    </div>
  );
};

export default QRCodeModal;