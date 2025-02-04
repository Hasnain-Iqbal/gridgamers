import React from "react";
import { ApplicationForm } from "../../../components/CarrerComponents";

function ApplyJobPage() {
  const career = {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-Time",
    description:
      "We're looking for a mid-level product designer to join our team. You will work on creating beautiful and user-friendly interfaces, collaborating closely with product managers, engineers, and other designers to deliver exceptional user experiences.",
  };

  return (
    <div className="p-16 text-white-500 bg-black-900 bg-opacity-65 min-h-screen">
      <h1 className=" py-[3.75rem]"></h1>

      <div className="max-w-7xl mx-auto">
        {/* Job Header Section */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold mb-4 text-white-500">
            {career.title}
          </h1>
          <p className="text-2xl text-gray-400">
            {career.department} in {career.location}
          </p>
        </div>

        {/* Apply Button Section */}
        <div className="my-10">
          <button className="bg-primary text-black-900 py-4 px-8 text-2xl font-bold rounded hover:bg-opacity-90">
            Apply Now
          </button>
        </div>

        {/* Job Overview Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-white-500">
            About the Role
          </h2>
          <p className="text-lg text-white-500 mb-4">{career.description}</p>
        </section>

        {/* Candidate Responsibilities Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-white-500">
            What the Candidate Will Do
          </h2>
          <ul className="list-disc list-inside text-lg text-white-500">
            <li className="mb-4">
              Collaborate with product managers and engineers to define and
              implement innovative solutions for the product direction,
              visuals, and experience.
            </li>
            <li className="mb-4">
              Execute all visual design stages from concept to final hand-off
              to engineering.
            </li>
            <li className="mb-4">
              Conceptualize original ideas that bring simplicity and user
              friendliness to complex design roadblocks.
            </li>
            <li className="mb-4">
              Create wireframes, storyboards, user flows, process flows, and
              site maps to effectively communicate interaction and design
              ideas.
            </li>
          </ul>
        </section>

        {/* Requirements Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-white-500">
            Requirements
          </h2>
          <ul className="list-disc list-inside text-lg text-white-500">
            <li className="mb-4">3+ years of experience in product design.</li>
            <li className="mb-4">
              Strong portfolio showcasing user-centered design solutions and
              experience with modern design tools.
            </li>
            <li className="mb-4">
              Experience in creating wireframes, storyboards, user flows, and
              site maps.
            </li>
            <li className="mb-4">
              Excellent visual design skills with sensitivity to user-system
              interaction.
            </li>
          </ul>
        </section>

        {/* Additional Information Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-white-500">
            Additional Information
          </h2>
          <p className="text-lg text-white-500 mb-4">
            We value diversity and inclusion and encourage people from all
            backgrounds to apply. We strive to create an environment where
            everyone can thrive.
          </p>
          <p className="text-lg text-white-500">
            This is a full-time position, and we offer competitive compensation
            and benefits.
          </p>
        </section>

        {/* Application Form Section */}
        <ApplicationForm jobTitle={career.title} jobId={1}/>
      </div>
    </div>
  );
}

export default ApplyJobPage;
