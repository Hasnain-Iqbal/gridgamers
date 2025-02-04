import React from "react";
import LayoutPage from "../../../../components/LayoutPage";
import Section from "../../../../components/Section";

/**
 * Renders the GRID Gamers welcome and setup guide
 */
const Page1 = () => {
  const mainContent = (
    <div className="space-y-8 md:space-y-12">
      {/* Welcome Section */}
      <Section
        title="Welcome to GRID Gamers!"
        id="welcome"
        level={1}
        centered={true}
        className="text-[#2B7FEA]"
      >
        <p className="text-[#1B2559] text-base md:text-lg max-w-3xl mx-auto">
          We are excited to welcome you to the esports global community! As part
          of the GRID Gamers network, your school will soon be hosting and
          organizing esports tournaments, building a strong community of gamers,
          and providing students with exciting opportunities. This welcome
          package will guide you through everything you need to get started.
        </p>
      </Section>

      {/* Getting Started Section */}
      <Section 
        title="How to Get Started" 
        id="how-to-get-started" 
        level={1}
        className="text-[#2B7FEA]"
      >
        <p className="text-[#1B2559] text-base md:text-lg mb-4">
          Each school needs to designate a Tournament Organizer (TO), who will
          manage your school's esports program. The TO will:
        </p>
        <ul className="text-[#1B2559] list-disc pl-4 md:pl-6 space-y-2">
          <li>Establish a school league</li>
          <li>Host tournaments</li>
          <li>Set up a gaming facility (GC)</li>
          <li>Select the gaming consoles and games</li>
          <li>Manage student signups, training, and tournament events</li>
        </ul>
      </Section>

      {/* Steps for TO Section */}
      <Section
        title="Steps for the Tournament Organizer (TO)"
        id="steps-for-TO"
        level={1}
        className="text-[#2B7FEA]"
      >
        <ol className="list-decimal pl-4 md:pl-16 space-y-8 ml-3">
          {/* App Download Step */}
          <li>
            <Section
              title="Download the GRID Gamers App"
              id="download-app"
              level={2}
              className="text-[#1B2559]"
            >
              <p className="text-[#1B2559] mb-4">
                Start by downloading our tournament management app on your
                mobile device.
              </p>
              <img
                src="/iOSGRID.png"
                alt="Screenshot of the GRID Gamers mobile app download page"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
              />
            </Section>
          </li>

          {/* Player Sign Up Step */}
          <li>
            <Section 
              title="Sign Up as a Player" 
              id="sign-up-player" 
              level={2}
              className="text-[#1B2559]"
            >
              <p className="text-[#1B2559] mb-4">Once the app is installed, sign up as a player.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-center items-center">
                  <img
                    src="/DocumentImages/IMG_1559.PNG"
                    alt="Sign up process step 1"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/DocumentImages/IMG_1560.PNG"
                    alt="Sign up process step 2"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </Section>
          </li>
        </ol>
      </Section>

      {/* Gaming Facility Section */}
      <Section
        title="Setting Up a Gaming Facility (GC)"
        id="setup-gaming-facility"
        level={1}
        className="text-[#2B7FEA]"
      >
        <ul className="space-y-8">
          {/* Location Selection */}
          <li>
            <Section 
              title="Choose a Location" 
              id="choose-location" 
              level={2}
              className="text-[#1B2559]"
            >
              <p className="text-[#1B2559] mb-4">Identify where the gaming center will be.</p>
              <img 
                src="/DocumentImages/Venues.png" 
                alt="Gaming facility locations"
                className="w-full md:w-1/2 mx-auto rounded-lg shadow-md" 
              />
            </Section>
          </li>
          {/* Equipment Setup */}
          <li>
            <Section 
              title="Equip the Facility" 
              id="equip-facility" 
              level={2}
              className="text-[#1B2559]"
            >
              <p className="text-[#1B2559] mb-4">
                Ensure the facility has the necessary power and internet
                capacity.
              </p>
              <img 
                src="/DocumentImages/energy.webp" 
                alt="Facility equipment setup"
                className="w-full md:w-1/2 mx-auto rounded-lg shadow-md"
              />
            </Section>
          </li>
        </ul>
      </Section>

      {/* Final Event Scheduling Section */}
      <Section 
        title="Scheduling the First Event" 
        id="schedule-event" 
        level={1}
        className="text-[#2B7FEA]"
      >
        <p className="text-[#1B2559] mb-6">
          Now that everything is set up, you're ready to create your first
          tournament event! Use the Scheduler to plan the event based on your
          facility's setup and availability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <img
              src="/DocumentImages/Schedule1.png"
              alt="Event scheduling step 1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/DocumentImages/Schedule2.png"
              alt="Event scheduling step 2"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/DocumentImages/Schedule3.png"
              alt="Event scheduling step 3"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </Section>
    </div>
  );

  return <LayoutPage mainContent={mainContent} />;
};

export default Page1;