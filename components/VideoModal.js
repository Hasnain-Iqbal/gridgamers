import { useState, useRef } from "react";
import Modal from "react-modal";
import Image from "next/image";
import YouTube from "react-youtube";

const VideoModal = ({
  addThumNail,
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="flex justify-center">
      {/* Video thumbnail */}

    
      <button
        className="group relative flex items-center justify-center rounded-3xl focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
      >
        {addThumNail &&(
        <img
          className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out text-transparent"
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt="img"
        />
        )}
        {/* Play icon */}
        <svg
          className="pointer-events-none absolute transition-transform duration-300 ease-in-out group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
        >
            <circle
            cx="36"
            cy="36"
            r="36"
            fill="white"  // Force white fill
            fillOpacity=".9"  // Ensure it's fully opaque
            />
          <path
            className="fill-indigo-500 drop-shadow-2xl"
            d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
          />
        </svg>
      </button>

      {/* End: Video thumbnail */}

      {/* Modal using react-modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center px-4 py-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        ariaHideApp={false} // To prevent warnings during SSR
        >
        <div className="relative max-w-5xl w-full lg:p-10 xs:p-6 bg-[#f2f2f2] rounded-lg">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-2 right-2 bg-white text-2xl text-black rounded-lg lg:p-2 xs:p-0"
          >
            ✕
          </button>
          <YouTube
                  videoId={"tKK1W3ADNCA"} // defaults -> ''
                  id={"tKK1W3ADNCA"} // defaults -> ''
                  style={{ outline: "none", border: "none", boxShadow: "none" }}
                  className="container rounded-md"
                  iframeClassName={"responsive-iframe"} // defaults -> ''
                  loading={"eager"}
                />
        </div>
      </Modal>
    </div>
  );
};

export default VideoModal;
