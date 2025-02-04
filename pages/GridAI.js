import React, { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MicIcon from "../public/assets/Icon/mic-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import AIDropdown from "./AIDropdown";
import ImageCarousel from "./ImageCarousel";
import ArrToCaro from "./ArrToCaro";
import ContainerCarousel from "./ContainerCarousel";
import HiddenNavbar from "components/HiddenNavbar";

const GridAI = ({}) => {
  const sectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("Home");
    useEffect(() => {
      const path = router.pathname.split("/")[1];
      setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
    }, [router.pathname]);

  const headingPhrases = [
    "Craft prompts for any task",
    "Simplify your work",
    "Unlock your creativity",
  ];
  const placeholderPhrases = [
    "Create an image of a dog running through a grossy field during sunset",
    "Write a story with mythical creatures that teaches a lesson about bravery",
    "Plan a meal with chocolate dessert that goes well with water",
    "Teach me about quantum physics and explain it like I'm 5 years old",
  ];

  // States for heading animation
  const [headingText, setHeadingText] = useState("");
  const [isDeletingHeading, setIsDeletingHeading] = useState(false);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [isTypingAnimationActive, setIsTypingAnimationActive] = useState(true);
  // States for placeholder animation
  const [placeholderText, setPlaceholderText] = useState("");
  const [isDeletingPlaceholder, setIsDeletingPlaceholder] = useState(false);
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [text, setText] = useState("");
  // Typing speeds
  const typingSpeed = 40;
  const deletingSpeed = 40;

  const calculateWidth = (text) => {
    const spaceCount = (text.match(/ /g) || []).length; // Count spaces in the string
    const percentage = (spaceCount / 12) * 100; // Example: 12 spaces = 100%
    return `${Math.min(percentage, 100)}%`; // Cap the width at 100%
  };

  const [width, setWidth] = useState(calculateWidth(placeholderText));

  // Typing effect for the heading
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = headingPhrases[currentHeadingIndex];

      if (isDeletingHeading) {
        setHeadingText((prev) => prev.slice(0, -1));
      } else {
        setHeadingText((prev) => currentPhrase.slice(0, prev.length + 1));
      }

      if (!isDeletingHeading && headingText === currentPhrase) {
        setTimeout(() => setIsDeletingHeading(true), 1000);
      } else if (isDeletingHeading && headingText === "") {
        setIsDeletingHeading(false);
        setCurrentHeadingIndex((prev) => (prev + 1) % headingPhrases.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeletingHeading ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [headingText, isDeletingHeading, currentHeadingIndex, headingPhrases]);

  // Typing effect for the placeholder
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = placeholderPhrases[currentPlaceholderIndex];

      if (isDeletingPlaceholder) {
        setPlaceholderText((prev) => prev.slice(0, -1));
      } else {
        setPlaceholderText((prev) => currentPhrase.slice(0, prev.length + 1));
      }

      if (!isDeletingPlaceholder && placeholderText === currentPhrase) {
        setTimeout(() => setIsDeletingPlaceholder(true), 3000);
      } else if (isDeletingPlaceholder && placeholderText === "") {
        setIsDeletingPlaceholder(false);
        setCurrentPlaceholderIndex(
          (prev) => (prev + 1) % placeholderPhrases.length
        );
      }
    };

    setWidth(calculateWidth(placeholderText));

    const timer = setTimeout(
      handleTyping,
      isDeletingPlaceholder ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [
    placeholderText,
    isDeletingPlaceholder,
    currentPlaceholderIndex,
    placeholderPhrases,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        setIsSticky(sectionTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const FeaturesArr = [
    {
      icon: "/assets/Icon/mdi_explore.svg",
      title: "Discover",
      body: "Explore upcoming sports events, news, and trending gaming content effortlessly",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/da7b20d7e2784d4bb4f75f4a525c84f9.png",
    },
    {
      icon: "/assets/Icon/clarity_connect.svg",
      title: "Connect",
      body: "Stay connected with fellow gamers, create teams, and chat",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/fd81deb9dcb34ae79c50f0b3f689d45d.png",
    },
    {
      icon: "/assets/Icon/pixelarticons_tournament.svg",
      title: "Tournament Management",
      body: "Organize, schedule and promote eSports tournaments with powerful event management tools",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/e72fbed7d85d422c93fbf7e0d0141967.png",
    },
    {
      icon: "/assets/Icon/fluent_people.svg",
      title: "Team Creation",
      body: "Assemble and manage sports teams efficiently, enhancing your competitve gaming experience",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/ade197b5265444938f6935b647d4b1aa.png",
    },
    {
      icon: "/assets/Icon/entypo_gameController.svg",
      title: "Gaming Database",
      body: "Access a vast repository of games including, stats, guides and eSports insights",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/3610cb6f40a4455c8d536866aac3bd33.png",
    },
    {
      icon: "/assets/Icon/mingcute_brackets.svg",
      title: "Dynamic Bracketology",
      body: "Experience real-time bracket updates and results for your favorite eSports tournaments",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/3b9c71567e2d41eaa5fce37aea631b63.png",
    },
  ];

  const LastArr = [
    {
      icon: "/assets/Icon/mdi_explore.svg",
      title: "Shape the future of AI with Copilot Labs",
      body: "Be among the first to try new Copilot features and help us shape the future of AI. Copilot Pro grants you access to experimental AI features before they are generally available. Including features like Copilot Vision and Think Deeper.",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/6ab6c535d3de4a1c8488506aaf8cf851.png",
    },
    {
      icon: "/assets/Icon/clarity_connect.svg",
      title: "Talk about what’s on your mind,​ whenever you want",
      body: "When you want to talk, Copilot is ready. Having a conversation with Copilot feels natural — whether you're prepping for an interview, debating playoff matchups, or practicing for a tricky conversation. Simply click icon to get started.",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/d7dd0439529c4c1f906806643aaebfd2.png",
    },
    {
      icon: "/assets/Icon/pixelarticons_tournament.svg",
      title: "Start your day in the know​",
      body: "Copilot Daily is the perfect way to start your day. Personalized news, weather, sports, reminders for upcoming events, and more — coffee not included.",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2f36efb598d041ed9edff6f7ace6b05f.png",
    },
    {
      icon: "/assets/Icon/fluent_people.svg",
      title: "@Copilot, only in Edge",
      body: "Now it’s even easier to access Copilot directly from the Microsoft Edge browser by simply typing @copilot into the address bar.",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/1a54e77578f14ec39e089a49afbd9596.png",
    },
    {
      icon: "/assets/Icon/entypo_gameController.svg",
      title: "Browse smarter with contextual search and summaries",
      body: "Copilot is here to help while you're browsing. It can quickly summarize the article you're reading or answer questions the content may spark.",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/6ab6c535d3de4a1c8488506aaf8cf851.png",
    },
    {
      icon: "/assets/Icon/mingcute_brackets.svg",
      title: "From your mind to a masterpiece",
      body: "Dream it. Create it. Copilot can help you turn your big ideas into real images — whether that’s a birthday card, a poster, or maybe just an image of turtles in a marching band. Why not? Whatever you’re imagining, let Copilot bring it to life.",
      image:
        "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/78cb6fa6d47549959c268b5d0779dead.png",
    },
  ];

  return (
    <div>
      <div className="relative bg-[white] z-20 flex items-center justify-between px-6 xl:px-40 py-4">
          {/* Left Section: Logo and Links */}
          <div className="flex items-center space-x-4">
            {/* Microsoft Logo */}
            <a href="/">
              <img
                src="assets/grid_logo_dark3.png"
                alt="Grid Logo"
                className="h-12"
              />
            </a>
            {/* Separator */}
            <span className="text-gray-400">|</span>
            {/* Title */}
            {/* UMER CHANGE: Removing the GRID text in navbar when Screen is Medium (SiM) (why would we have that in the first place?) */}
            {/* <span className="hidden lg:inline font-medium text-[black] text-lg">
              Gamers
            </span> */}

            {/* UMER CHANGE: Change spacing to be closer when SiM */}
            {/* Dropdown Links */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
              {/* <button className="text-gray-600 hover:text-gray-900">
            For personal use
          </button> */}
              <div className="relative group">
                <div className="flex items-center">
                  <p className={"text-[black]"}>For Individuals</p>
                  <img
                    className="mx-2"
                    src="/assets/dropdown_img.png"
                    height="10px"
                    width="15px"
                  />
                </div>
                {/* Dropdown Menu */}
                <div className="bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2 text-black">
                    <li>
                      <Link href="/GridAI">
                        <a
                          className="block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          Grid AI
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/GridAI">
                        <a
                          className="block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          Grid Mobile
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <button className="text-gray-600 hover:text-gray-900">
              For organizations
            </button> */}
              <div className="relative group">
                <div className="flex items-center">
                  <p className={"text-[black]"}>For Organizations</p>
                  <img
                    className="mx-2"
                    src="/assets/dropdown_img.png"
                    height="10px"
                    width="15px"
                  />
                </div>
                {/* Dropdown Menu */}
                <div className="bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2 text-black">
                    <li>
                      <Link href="/GridAI">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          Grid AI Pro
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/GridAI">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          Grid Web
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("")}
                        >
                          GRID Scheduler
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <div className="flex items-center">
                  <p className={"text-[black]"}>Company</p>
                  <img
                    className="mx-2"
                    src="/assets/dropdown_img.png"
                    height="10px"
                    width="15px"
                  />
                </div>
                <div className="bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2 text-black">
                    <li>
                      <Link href="/CareersPage">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("CareersPage")}
                        >
                          Careers
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Accessibility">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("Accessibility")}
                        >
                          Accessibility 
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/DevicesSafety">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("DevicesSafety")}
                        >
                          Sustainability
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/AccessibilityNewPg">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("AccessibilityNewPg")}
                        >
                          New page
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* UMER CHANGE: New Dropdown added when SiM (GRID text comes back in spirit) made new component because of added state*/}
            <HiddenNavbar />
          </div>

          {/* Right Section: Buttons */}
          <div className="hidden xsm:flex items-center space-x-4">
            {/* Try GRID Button */}
            {/* <a href="https://chatbot-new-ui.netlify.app/#/admin/dashboard">
            <button 
              
              className="bg-[black] text-white-300 px-4 py-2  font-medium hover:bg-gray-800">
              Try GRID AI
            </button>
            </a> */}
            {/* Sign In Link */}
            <a href="https://adminweb.stage.gridgamers.com/#/auth/sign-in/default">
            <button className="bg-[black] text-white-300 px-4 py-2  font-medium hover:bg-gray-800 rounded-md">
              Sign in
            </button>
            </a>
          </div>
        </div>

      <div
        style={{
          backgroundImage: "linear-gradient(180deg, #FFFAE3, #FFFFFF 80%)",
        }}
      >
        <div
          className={`max-w-7xl mx-auto px-6 lg:h-[80vh] md:h-[50vh] lg:px-12 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform`}
        >
          <img
            src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/11ba1dd49a7f4edbb1eebe9556f8859e.png"
            height="100px"
            width="100px"
          />
          <h1 className="text-5xl lg:text-7xl font-semibold text-gray-900 my-8">
            Hi, I'm Copilot in Edge!
          </h1>
          <div className="flex items-center h-10 justify-center mb-10">
            <div className="w-max">
              <p className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 text-3xl text-[black]">
                {headingText}
              </p>
            </div>
          </div>

          <div className="bg-[#f2f2f2] flex px-4 py-2 rounded-[40px] jutify-between items-center shadow-xl">
            <img
              className="mx-2"
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/11ba1dd49a7f4edbb1eebe9556f8859e.png"
              height="5px"
              width="30px"
            />
            <span className="text-3xl font-light">+</span>
            <input
              className="bg-[white] rounded-3xl px-2 mx-3 h-10"
              placeholder="Message Copliot..."
              disabled
            />
            <MicIcon />
          </div>
        </div>
      </div>

      <div>
        {/* Non-sticky section */}
        <div
          ref={sectionRef}
          className="relative bg-[white] min-[1490px]:px-40"
        >
          <div className="hidden min-[1140px]:flex justify-between items-center px-6 lg:px-12 py-4">
            {/* Left: Navigation Tabs */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() =>
                  document.getElementById("Copilot-in-Edge").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-800 font-medium hover:text-blue-600 relative"
              >
                Copilot in Edge
                <div className="absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"></div>
              </button>
              <button
                onClick={() =>
                  document.getElementById("Discover-Cards").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Discover Cards
              </button>
              <button
                onClick={() =>
                  document.getElementById("Prompt-Builder").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Prompt Builder
              </button>
              <button
                onClick={() =>
                  document.getElementById("Scenarios").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-800 font-medium hover:text-blue-600 relative"
              >
                Scenarios
                <div className="absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"></div>
              </button>
              <button
                onClick={() =>
                  document.getElementById("Features").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </button>
              <button
                //   onClick={() =>
                //     document.getElementById("Copilot-Pro").scrollIntoView({
                //       behavior: "smooth",
                //     })
                //   }
                className="text-gray-600 hover:text-blue-600"
              >
                Copilot Pro
              </button>
            </div>
            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                Download the app
              </button>
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                Try Copilot
              </button>
            </div>
          </div>
          <div className="flex min-[1140px]:hidden bg-[white] ">
            <AIDropdown />
          </div>
        </div>

        {/* Sticky navbar */}
        <div
          className={`${
            isSticky ? "fixed top-0 left-0 w-full bg-[white] z-50 " : "hidden"
          } transition-all duration-300`}
        >
          <div className="hidden min-[1140px]:flex justify-between items-center px-6 py-4">
            {/* Left: Navigation Tabs */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() =>
                  document.getElementById("Copilot-in-Edge").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-800 font-medium hover:text-blue-600 relative"
              >
                Copilot in Edge
                <div className="absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"></div>
              </button>
              <button
                onClick={() =>
                  document.getElementById("Discover-Cards").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Discover Cards
              </button>
              <button
                onClick={() =>
                  document.getElementById("Prompt-Builder").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Prompt Builder
              </button>
              <button
                onClick={() =>
                  document.getElementById("Scenarios").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Scenarios
              </button>
              <button
                onClick={() =>
                  document.getElementById("Features").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </button>
              <button
                //   onClick={() =>
                //     document.getElementById("Copilot-Pro").scrollIntoView({
                //       behavior: "smooth",
                //     })
                //   }
                className="text-gray-600 hover:text-blue-600"
              >
                Copilot Pro
              </button>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                Download the app
              </button>
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                Try Copilot
              </button>
            </div>
          </div>
          <div className="flex min-[1140px]:hidden bg-[white] ">
            <AIDropdown />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(180deg, #F5F0EE, #F5F6F6, #D5ECF5)",
        }}
      >
        <div
          id="Copilot-in-Edge"
          className={`max-w-7xl mx-auto md:py-[120px] flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform px-4`}
        >
          <h1 className="text-5xl lg:text-5xl font-semibold text-gray-900 my-8">
            What is Copilot in Edge?
          </h1>
          <p className="text-[black] text-2xl mb-6 ">
            With Microsoft Edge, Copilot is built right into your browser, ready
            to help. Whether you're reading an article, watching a video, or
            exploring a website, you can ask Copilot anything and get quick,
            relevant answers without ever leaving the page. Simply click to get
            started.
          </p>
          <div className="px-8">
            <img
              className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/1989a4365b9a45fda5b1e14a3ee8e785.png"
            />
          </div>
        </div>

        <div
          id="Discover-Cards"
          className="py-14 text-center m-auto 2xl:max-w-screen-2xl  justify-center items-center  "
        >
          <h1 className="text-5xl lg:text-5xl font-semibold text-gray-900 my-8 w-[95%] mx-auto pb-4 md:pb-0">
            Explore with personalized
            <br /> discover cards designed just for you
          </h1>
          <p className="text-center text-[black] font-normal text-2xl w-[95%] mx-auto pb-3 md:pb-0">
            Use discover cards as a little spark of inspiration tailored just
            for you. The more you use Copilot,
            <br /> the more helpful it will be. Explore some of Copilot’s most
            popular asks.​
          </p>
          {/* <Swiper
            modules={[Navigation]}
            className="border-0 mt-[24px] lg:mt-[80px] px-30 relative"
            spaceBetween={45}
            pagination={{ clickable: true }}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <div className="swiper-button-prev absolute top-1/2 left-[-200px] transform -translate-y-1/2 text-[black] p-8 bg-[white] rounded-full shadow-md hover:shadow-xl z-10 cursor-pointer"></div>
            <div className="swiper-button-next absolute top-1/2 right-[-200px] transform -translate-y-1/2 text-[black] p-8 bg-[white] rounded-full shadow-md hover:shadow-xl z-10 cursor-pointer"></div>

            {FeaturesArr.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="w-full aspect-[3/2] rounded-[50px] overflow-hidden">
                    <img
                      src={data.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper> */}
          <ImageCarousel imageArr={FeaturesArr} />
        </div>
        <div
          id="Prompt-Builder"
          className="py-14 text-center  m-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl  justify-center items-center "
        >
          <h1 className="text-5xl lg:text-5xl font-semibold text-gray-900 my-8">
            Craft prompts for any task
          </h1>
          <p className="text-center text-[black] font-normal text-2xl  my-8">
            From straight forward questions to intricate plans. Do it all with
            Microsoft Copilot in Edge.
          </p>
          <div className=" bg-[white] rounded-[70px] ">
            <div className="flex justify-center space-x-4 py-10">
              {["Create", "Write", "Plan", "Learn"].map((item, index) => (
                <h2
                  key={index}
                  className={`text-lg font-medium text-gray-900 pb-2 ${
                    index === 0
                      ? "border-b-2 border-black"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {item}
                </h2>
              ))}
            </div>
            <textarea
              className="bg-[#f8f8f8] rounded-[60px] text-[#1a1a1a] border-none p-7 outline-none text-5xl resize-none"
              style={{
                fontSize: "2.6rem",
                lineHeight: "1.5",
                width: "80%",
              }}
              rows="4"
              placeholder={isTypingAnimationActive ? placeholderText : ""}
              onFocus={() => setIsTypingAnimationActive(false)}
              onBlur={() => setIsTypingAnimationActive(true)}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex justify-center pt-8">
              <div className="w-1/4 bg-[#f8f8f8] rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 rounded-full"
                  style={{
                    height: "8px",
                    width: `${
                      isTypingAnimationActive ? width : calculateWidth(text)
                    }`,
                    onFocus: `${calculateWidth(width)}`,
                    transition: "width 0.5s ease",
                    backgroundImage:
                      "linear-gradient(90deg, #02a8d9, #24b9c2, #44caab)",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex w-1/4 justify-between">
                <span className="text-[black] font-bold">Basic</span>
                <span className="text-[black] font-bold">Advanced</span>
              </div>
            </div>
            <a href="https://chatbot-new-ui.netlify.app/#/admin/dashboard">
            <button className="bg-[black] text-white-300 px-12 py-3 my-8 rounded-3xl font-bold hover:bg-blue-800">
              Go
            </button>
            </a>
          </div>
        </div>

        <div
          id="Scenarios"
          className={`max-w-7xl mx-auto my-14 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform`}
        >
          <h1 className="text-5xl lg:text-5xl font-semibold text-gray-900 my-8">
            Use Copilot for any task, any idea
          </h1>
          <p className="text-[black] text-2xl mb-6 ">
            Explore these different scenarios to discover how Copilot can assist
            with any task or idea, enhancing your work with seamless, intuitive
            conversations. Try it now and see what Copilot can do for you.
          </p>
          {/* Moved to AddToCaro */}
          <ArrToCaro />
          {/* <div className="flex p-8 bg-[white] rounded-[50px] w-full justify-between">
            <div className="">
              <img
                src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b2d8b087d1c44d46a3610ba4da6cb290.png"
                height="200px"
                width="200px"
              />
              <p className="text-[black] font-bold">Prepare for a pet</p>
            </div>
            <div className="">
              <img
                src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/fa28de91a3c1429e8c52fec3b1376816.png"
                height="200px"
                width="200px"
              />
              <p className="text-[black] font-bold">Get a pros vs. cons list</p>
            </div>
            <div className="">
              <img
                src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/bf2da9b421774258afd238777c007cd9.png"
                height="200px"
                width="200px"
              />
              <p className="text-[black] font-bold">Plan a trip</p>
            </div>
            <div className="">
              <img
                src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/d0dcb72a360a4879b569f3f0eb74664f.png"
                height="200px"
                width="200px"
              />
              <p className="text-[black] font-bold">Write something</p>
            </div>
            <div className="">
              <img
                src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/63b0cf4b50514ecaac0ac9b8b51ae40f.png"
                height="200px"
                width="200px"
              />
              <p className="text-[black] font-bold">Ask for feedback</p>
            </div>
          </div> */}
        </div>
{/* Carousel fixed */}
        <div
          id="Features"
          className="py-14 text-center  m-auto w-full 2xl:max-w-screen-2xl  justify-center items-center "
        >
          {/* Moved to the component */}
          <ContainerCarousel imageArr={LastArr} />
          {/* <Swiper
            modules={[Navigation]}
            className="border-0 mt-[24px] lg:mt-[80px] bg-[#f1f8fa] rounded-[50px]"
            spaceBetween={0}
            pagination={{ clickable: true }}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {LastArr.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="rounded-3xl sm:grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-5 gap-16 p-4  my-[80px]">
                    <div className=" flex flex-col col-span-2 ml-20 justify-center items-start text-start row-start-2 sm:row-start-1">
                      <p className="text-[black] mt-[30px] mb-6 text-md font-semibold px-6 py-1 rounded-2xl bg-[#D8ECA3]">
                        Copilot
                      </p>
                      <h1
                        // style={{ fontFamily: "Sigmar One" }}
                        className="text-3xl font-semibold text-black"
                      >
                        {data.title}
                      </h1>
                      <p
                        style={{ fontFamily: "Inter" }}
                        className="text-[black] mt-[30px] mb-6 text-[16px]"
                      >
                        {data.body}
                      </p>
                    </div>
                    <div className=" flex col-span-3 justify-end mr-20">
                      <img
                        className="rounded-xl w-full h-full object-cover shadow-xl"
                        src={data.image}
                        alt="Image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-button-prev text-[black] p-8 bg-[white] rounded-full shadow-md hover:shadow-xl"></div>
            <div className="swiper-button-next text-[balck] p-8 bg-[white] rounded-full shadow-md hover:shadow-xl"></div>
          </Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default GridAI;
