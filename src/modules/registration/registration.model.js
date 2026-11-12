
import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    // Registered User
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Personal Information
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      match: /^[a-zA-Z\s]+$/,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    mobileNumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },

    // Academic Information
    collegeName: {
      type: String,
      required: true,
      trim: true,
    },

    course: {
      type: String,
      required: true,
      enum: ["B.Tech", "M.Tech", "BCA", "MCA", "BSc", "MSc", "Other"],
    },

    branch: {
      type: String,
      required: true,
      enum: ["CSE", "IT", "ECE", "ME", "CE", "Other"],
    },

    yearOfStudy: {
      type: String,
      required: true,
      enum: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    },

    // Hackathon Information
    domain: {
      type: String,
      required: true,
      enum: [
        "AI/ML",
        "Web Development",
        "IoT",
        "Cyber Security",
        "Blockchain",
        "Other",
      ],
    },

    projectName: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },

    pptLink: {
      type: String,
      required: true,
      trim: true,
    },

    prototypeLink: {
      type: String,
      required: true,
      trim: true,
    },

    demoVideoLink: {
      type: String,
      default: "",
      trim: true,
    },

    // Team Information
    teamSize: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    teamMembers: {
      type: [
        {
          memberName: {
            type: String,
            required: true,
            trim: true,
          },

          memberEmail: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
          },
        },
      ],
      default: [],
      validate: {
        validator: function (members) {
          const expectedCount = this.teamSize === 1 ? 0 : this.teamSize;
          return members.length === expectedCount;
        },
        message: "Team members count must match team size.",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
