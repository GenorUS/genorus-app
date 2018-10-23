// Ideally, this will come from an API call to the db
const scholarships = [
  {
    id: 1,
    scholarship_name: "Accessibility Scholarship",
    company_name: "amazon",
    description: "At Amazon, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigamazon.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/amazon/apply"
  },
  {
    id: 2,
    scholarship_name: "Accessibility Scholarship",
    company_name: "att",
    description: "At AT&T, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigat&t.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/att/apply"
  },
  {
    id: 3,
    scholarship_name: "Accessibility Scholarship",
    company_name: "bp",
    description: "At BP, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigbp.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/bp/apply"
  },
  {
    id: 4,
    scholarship_name: "Accessibility Scholarship",
    company_name: "comcast",
    description: "At Comcast, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigcomcast.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/comcast/apply"
  },
  {
    id: 5,
    scholarship_name: "The console.log(Scholarship)",
    company_name: "google",
    description: "At Google, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/biggoogle.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.2 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018."
    ],
    amount: "2,500 US",
    url: "/scholarship/google/apply"
  },
  {
    id: 6,
    scholarship_name: "PNC Scholarship",
    company_name: "pncbank",
    description: "At PNC Bank, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigpnc.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/pncbank/apply"
  },
  {
    id: 7,
    scholarship_name: "Sunoco Scholarship",
    company_name: "sunoco",
    description: "At Sunoco, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigsunoco.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/sunoco/apply"
  },
  {
    id: 8,
    scholarship_name: "Target Scholarship",
    company_name: "target",
    description: "At Target, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigtarget.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/target/apply"
  },
  {
    id: 9,
    scholarship_name: "The TD Scholarship",
    company_name: "tdbank",
    description: "At TD Bank, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigtdbank.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/tdbank/apply"
  },
  {
    id: 10,
    scholarship_name: "The Achiever Scholarship",
    company_name: "penn",
    description: "At the University of Pennsylvania, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigupenn.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/penn/apply"
  },
  {
    id: 11,
    scholarship_name: "The Verizon Scholarship",
    company_name: "verizon",
    description: "At Verizon, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigverizon.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/verizon/apply"
  },
  {
    id: 12,
    scholarship_name: "The Walmart Scholarship",
    company_name: "walmart",
    description: "At Walmart, we believe information should be universally accessible. We are also committed to helping the innovators of the future make the most of their talents by providing scholarships for future computer science students.",
    image: "../../../assets/images/sponsors/bigsponsorpics/bigwalmart.jpg",
    application_period: "The application process will remain open until 6th December, 2018 at 11:59 pm GMT.",
    how_to_apply: [
      "Fill out general information on our form",
      "Upload a copy of your transcripts",
      "Request a letter of reference"
    ],
    eligibility: [
      "Applicants must have at least a 3.0 GPA or higher",
      "Applicants must be a graduating high school senior from Pennsylvania",
      "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania",
      "Applicants must be 18 year of age or older as of 17th September 2018.",
      "Applicants must come from a household with a median income of $35,000 or lower."
    ],
    amount: "5,000 US",
    url: "/scholarship/walmart/apply"
  }
]

export default scholarships;