import React, { useState } from "react";
import axios from "axios";

function ApplicationForm({ jobTitle, jobId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email Address is invalid.";
    }
    if (!formData.resume) {
      validationErrors.resume = "Resume is required.";
    } else if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(formData.resume.type)
    ) {
      validationErrors.resume = "Resume must be a PDF or Word document.";
    } else if (formData.resume.size > 5 * 1024 * 1024) {
      validationErrors.resume = "Resume must be less than 5 MB.";
    }

    return validationErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("jobTitle", jobTitle);
    data.append("jobId", jobId);
    data.append("coverLetter", formData.coverLetter);
    data.append("resume", formData.resume);

    try {
      await axios.post("/api/send-email", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="w-full bg-[#02070c] p-12 rounded-md mt-8"
    >
      <input type="hidden" name="job_title" value={jobTitle} />
      <input type="hidden" name="job_id" value={jobId} />

      <div className="mb-6">
        <label className="block text-2xl font-semibold mb-3" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name"
          className={`w-full p-4 rounded bg-[#17171a] text-white-500 border text-xl ${
            errors.name ? "border-[#EF4444]" : "border-gray-500"
          }`}
          required
        />
        {errors.name && <p className="text-[#EF4444] mt-1">{errors.name}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-2xl font-semibold mb-3" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          className={`w-full p-4 rounded bg-[#17171a] text-white-500 border text-xl ${
            errors.email ? "border-[#EF4444]" : "border-gray-500"
          }`}
          required
        />
        {errors.email && <p className="text-[#EF4444] mt-1">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-2xl font-semibold mb-3" htmlFor="resume">
          Upload Resume (PDF or Word, less than 5 MB)
        </label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          id="resume"
          className={`w-full p-4 rounded bg-[#17171a] text-white-500 border text-xl ${
            errors.resume ? "border-[#EF4444]" : "border-gray-500"
          }`}
          required
        />
        {errors.resume && <p className="text-[#EF4444] mt-1">{errors.resume}</p>}
      </div>

      <div className="mb-10">
        <label
          className="block text-2xl font-semibold mb-3"
          htmlFor="cover-letter"
        >
          Cover Letter (optional)
        </label>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          id="cover-letter"
          className="w-full p-4 rounded bg-[#17171a] text-white-500 border border-gray-500 text-xl"
          rows="8"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded bg-primary text-black-900 text-2xl font-bold hover:bg-opacity-90"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

export { ApplicationForm };
