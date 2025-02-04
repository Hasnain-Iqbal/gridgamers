import nodemailer from "nodemailer";
import multer from "multer";
import { promisify } from "util";

const upload = multer({ storage: multer.memoryStorage() });

// Middleware to handle multipart form data
const uploadMiddleware = promisify(upload.single("resume"));

// Main handler function
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Process multipart form data using multer
    await uploadMiddleware(req, res);

    const { name, email, jobTitle, jobId, coverLetter } = req.body;
    const resume = req.file;

    // Configure SMTP transporter for Gmail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "info@gridgamers.com", // Replace with your Gmail address
        pass: "rjxz maqk avms emat", // Replace with your Gmail app-specific password
      },
    });

    let mailOptions = {
      from: `Job application for ${jobTitle}, ${jobId} <${email}>`,
      to: "info@gridgamers.com", // Replace with the hiring manager's email
      subject: `New Job Application for ${jobTitle}`,
      html: `
        <h3>New Job Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter}</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
}

export const config = {
  api: {
    bodyParser: false, // Disable Next.js built-in body parsing to use multer
  },
};
