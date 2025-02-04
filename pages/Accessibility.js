import React from "react";
import OtherHeader from "components/OtherHeader";
const Accessibility = ({}) => {

  //TODO: Fix Navbar Component
  const promotingDisability = [
    {
      title: "Our commitment",
      detail:
        "We are committed to create and grow usage of accessible technology, expand skilling and hiring opportunities for people with disabilities, and advocate for policies that advance accessibility as a fundamental right.",
      btn: "Learn about our approach",
    },
    {
      title: "Accessibility training and resources",
      detail:
        "There are many ways to support your colleagues, classmates, friends, and family members with disabilities.",
      btn: "See accessibility training essentials",
    },
    {
      title: "Technical support",
      detail:
        "Disability Answer Desk provides product support for our customers with disabilities, including Microsoft Office, Windows, and Xbox",
      btn: "Contact the Disability Answer Desk",
    },
  ];

  const accessibleTechnology = [
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Windows-v2-120x120?wid=120&hei=120",
      name: "Windows",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-M365-v2-120x120?wid=120&hei=120",
      name: "Microsoft 365",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Teams-v2-120x120?wid=120&hei=120",
      name: "Microsoft Teams",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Xbox-v1-120x120?wid=120&hei=120",
      name: "Xbox",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-VisualStudio-v2-120x120?wid=120&hei=120",
      name: "Visual Studio",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-AdaptiveAccessories-v1-120x120?wid=120&hei=120",
      name: "Adaptive accessories",
    },
  ];

  const designedList = [
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Vision-v1-200x200?wid=111&hei=111&fit=crop",
      title: "Vision",
      detail:
        "Need a larger screen? A brighter screen? A narrator to read text? Find out about accessibility tools and features for people who are blind, color blind, or have low vision.",
      btn: "Learn about vision-related tools",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Hearing-v1-200x200?wid=111&hei=111&fit=crop",
      title: "Hearing",
      detail:
        "For those who are hard of hearing, have hearing loss, or have deafness, our specialized features can provide solutions including closed captioning, mono sound, and live call transcription.",
      btn: "Explore hearing-assistive tools",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Neurodiversity-v1-200x200?wid=111&hei=111&fit=crop",
      title: "Neurodiversity",
      detail:
        "Innovative tools such as dictation and Windows Hello sign-in can make the digital world more accessible for those who with dyslexia, seizures, autism, or other cognitive differences.",
      btn: "Discover tools for neurodiversity",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Learning-v1-200x200?wid=111&hei=111&fit=crop",
      title: "Learning",
      detail:
        "Our applications for people living with learning disabilities can help increase focus, concentration, and understanding—and include tools to improve reading and writing skills.",
      btn: "Uncover tools for learning",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Mobility-v1-200x200?wid=111&hei=111&fit=crop",
      title: "Mobility",
      detail:
        "Our suite of products helps people living with arthritis, quadriplegia, spinal cord injuries, and other mobility issues to navigate the digital world in new ways.",
      btn: "Find mobility-assistive tools",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-MentalHealth-v1-200x200?wid=111&hei=111&fit=crop",
      title: "Mental health",
      detail:
        "Learn more about assistive technologies for people living with issues such as bipolar disorder, anxiety, PTSD, depression, or ADHD. Our products can help reduce distraction and improve concentration and reading.",
      btn: "Try mental health assistive tools",
    },
  ];

  return (
    <div className="bg-[white]">
      {/* Navbar */}
      <div className="bg-[white] py-5">
        <OtherHeader text=""/>
      </div>

      {/* Banner */}
      <div className="bg-[#0067b8] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white-300 text-sm md:text-base text-center">
            Simple and intuitive event planning, dynamic bracketology system,
            Try it now.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-Hero-v1-1600x600:VP4-1399x600')] bg-cover bg-right">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="bg-[white] p-8 md:p-12 max-w-lg">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[black] mb-6">
              Raising the bar on accessibility
            </h1>
            <p className="text-[black] text-base mb-6">
              Together, we can build a more accessible future. Learn how the
              disability community drives innovation that benefits us all.
            </p>
            <button className="text-[#0067b8] text-base font-medium">
              Watch the video
            </button>
          </div>
        </div>
      </div>

      {/* Promoting Disability Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[black] mb-6">
            Promoting disability inclusion
          </h2>
          <p className="text-[black] text-base max-w-3xl mx-auto">
            In today's connected world, access to technology is central to the
            way we operate, and it is fundamental to a more equitable future.
            Accessibility is the vehicle for inclusion of people with
            disabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotingDisability.map((item, index) => (
            <div key={index} className="bg-[white] md:p-6 xs:p-3">
              <h3 className="text-xl font-semibold text-[black] mb-4">
                {item.title}
              </h3>
              <p className="text-[black] text-base mb-4">{item.detail}</p>
              <button className="text-[#0067b8] text-base font-medium">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[black] mb-4">
            Accessible products and technology
          </h2>
          <p className="text-[black] text-base mb-6">
            We are committed to designing accessible products with and for
            people with disabilities.
          </p>
          <button className="text-[#0067b8] text-base font-medium">
            Our approach to inclusive technology
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {accessibleTechnology.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.icon} alt={item.name} className="mb-4" />
              <button className="text-[#0067b8] text-base">{item.name}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-black-500 max-w-7xl mx-auto my-8"></div>

      {/* Designed For You Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[black] mb-4">
            Designed for you
          </h2>
          <p className="text-[black] text-base mb-6">
            Find products and tools based on your needs.
          </p>
          <button className="text-[#0067b8] text-base font-medium">
            Explore more tips and tools
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designedList.map((item, index) => (
            <div key={index} className="flex gap-6 bg-[white]">
              <img src={item.icon} alt={item.title} className="w-28 h-28" />
              <div>
                <h3 className="text-xl font-semibold text-[black] mb-4">
                  {item.title}
                </h3>
                <p className="text-[black] text-base mb-4">{item.detail}</p>
                <button className="text-[#0067b8] text-base font-medium">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact and Unique Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="order-2 md:order-1">
            <img
              className="w-full h-auto"
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-SFeature-v2-1040x585:VP5-800x450"
              alt="Driving impact"
            />
          </div>
          <div className="bg-[white] order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-[black] mb-6">
              Driving impact together
            </h2>
            <p className="text-[black] text-base mb-6">
              Our grant program supports researchers, startups, nonprofits, and
              assistive technology companies around the world to develop
              innovative technologies that empower people living with
              disabilities.
            </p>
            <button className="text-[#0067b8] text-base font-medium">
              Learn about our grant program
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[white] order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-[black] mb-6">
              Unique unites us
            </h2>
            <p className="text-[black] text-base mb-6">
              When we have the tools we need to thrive, our unique contributions
              can shine. Explore the stories behind people with disabilities who
              are driving innovation and moving the world of work forward.
            </p>
            <button className="text-[#0067b8] text-base font-medium">
              Explore more tips and tools
            </button>
          </div>
          <div className="order-2">
            <img
              className="w-full h-auto"
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-Unique-Unites-Us-800x450:VP5-800x450"
              alt="Unique unites us"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#fff8f3] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[black] mb-6">
            Embracing responsibility
          </h2>
          <p className="text-[black] text-base max-w-3xl mx-auto">
            We believe companies that can do more, should. Learn about our
            commitments to ensure the technology we create benefits everyone on
            the planet, including the planet itself.
            <br />
            <br />
            Truly a super-app to connect gamers by!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
