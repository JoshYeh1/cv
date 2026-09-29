/* =========================================================================
   SITE CONTENT — edit this file to update the website.
   -------------------------------------------------------------------------
   Media: drop files into assets/img or assets/video, then list them in a
   project's `media` array. Supported entries:
     { type: "image",   src: "assets/img/goniometer-1.jpg", caption: "..." }
     { type: "video",   src: "assets/video/demo.mp4",       caption: "..." }
     { type: "youtube", id:  "dQw4w9WgXcQ",                 caption: "..." }
   Add fit: "contain" to an image to show it whole (no cropping) on the card.
   The first entry is used as the card cover. Leave `media: []` to show
   the generated schematic-style placeholder instead.
   ========================================================================= */

window.SITE = {
  name: "Josh Yeh",
  role: "Electrical Engineer",
  tagline:
    "Hardware, controls & electromechanical systems — from cleanroom-fabricated photodiodes to cryogenic motion control.",
  location: "Boston, MA",
  email: "j.y.yeh@email.wustl.edu",
  github: "https://github.com/JoshYeh1",
  linkedin: "https://www.linkedin.com/in/joshua-yeh-profile",
  resume: "assets/Josh_Yeh_Resume_EE.pdf", // export your resume to PDF and put it here
  photo: "assets/img/headshot.jpg",        // optional — falls back to initials

  about: [
    "I'm an Electrical Engineering and Engineering Management student at Washington University in St. Louis, with a physics background from Pepperdine.",
    "My work sits where electronics meet the physical world: PCB design and assembly, motor-control electronics, semiconductor fabrication, and embedded control loops — plus multimodal AI systems running on real hardware.",
  ],

  stats: [
    { value: "5", label: "Hardware, systems & research projects" },
    { value: "<1s", label: "Scene-description latency on AR glasses" },
    { value: "Class 100", label: "Cleanroom device fabrication" },
  ],

  projects: [
    {
      id: "goniometer",
      featured: true,
      title: "Two-Axis Cryogenic Goniometer",
      subtitle: "Capstone · Graphene Experiment",
      date: "Jan 2025 – May 2026",
      icon: "gonio",
      tags: ["Stepper Drivers", "Custom PCB", "SCPI", "Motion Control", "Cryogenics"],
      summary:
        "Motorized two-axis goniometer enabling precise sample rotation inside cryogenic, high-magnetic-field environments.",
      bullets: [
        "Led systems integration for a goniometer enabling precise rotation in cryogenic, high magnetic field environments.",
        "Developed and tested motor-control electronics using stepper drivers, custom PCBs, and SCPI-based controls.",
        "Analyzed and mitigated stepper motor error sources, including dead-reckoning drift, step loss, and backlash.",
      ],
      media: [
        { type: "image", src: "assets/img/hall-amp-layout.png", caption: "Hall Amp V2: two-layer PCB layout in EasyEDA" },
        { type: "image", src: "assets/img/hall-amp-pcb.jpg", caption: "Assembled Hall amplifier PCB under test" },
        { type: "image", src: "assets/img/hall-amp-breadboard.jpg", caption: "Breadboard prototype of the op-amp signal chain" },
      ],
      links: [],
    },
    {
      id: "photodiode",
      title: "Silicon Photodiode Fabrication",
      subtitle: "Semiconductor Fabrication Lab",
      date: "Jan 2025 – May 2026",
      icon: "wafer",
      tags: ["Cleanroom", "p–n Junction", "Lithography", "Device Characterization"],
      summary:
        "Fabricated and characterized silicon p–n photodiodes end-to-end in a Class 100/1000 cleanroom.",
      bullets: [
        "Fabricated silicon p–n photodiodes in a Class 100/1000 cleanroom using a full process flow.",
        "Maintained industry-standard wafer runsheets and digital lab notebooks documenting process parameters.",
        "Characterized fabricated devices using electrical test equipment and analyzed measurement results.",
      ],
      media: [
        { type: "image", src: "assets/img/photodiode-wafer.jpg", caption: "Finished silicon wafer with patterned photodiode die" },
      ],
      links: [],
    },
    {
      id: "aria",
      title: "Meta Glasses AI Assistant",
      subtitle: "Real-time Assistive Eyewear",
      date: "May 2025 – Jun 2025",
      icon: "glasses",
      tags: ["Python", "Whisper", "Qwen VLM", "Flask", "GPU Inference"],
      summary:
        "Multimodal assistant on Meta's Aria glasses that speaks concise scene descriptions in under a second.",
      bullets: [
        "Engineered real-time assistive eyewear on Meta's Aria glasses, delivering concise scene descriptions in <1 s.",
        "Integrated Whisper (STT), Qwen (VLM), and TTS into a multimodal pipeline through a Flask server.",
        "Reduced captioning latency by 40% through GPU inference optimization and efficient image resizing.",
      ],
      media: [
        { type: "image", src: "assets/img/aria-workstation.jpg", caption: "Meta Project Aria glasses at the development workstation" },
        { type: "image", src: "assets/img/aria-live-capture.jpg", caption: "Live Aria RGB capture streamed to the laptop for VLM scene captioning" },
      ],
      links: [],
    },
    {
      id: "vista",
      title: "VISTA Benchmark",
      subtitle: "Research · Under review at ICLR 2027",
      date: "2025 – 2026",
      icon: "vista",
      tags: ["Multimodal", "Egocentric", "Project Aria", "VLM Evaluation", "Label Studio", "Hugging Face"],
      summary:
        "A multimodal egocentric benchmark of goal-oriented assistance for blind and low-vision users, captured on Meta Project Aria glasses.",
      description:
        "VISTA contains 997 samples captured with Meta Project Aria glasses. Each sample has five synchronized modalities (vision, audio, eye tracking, inertial signals, and spatial tracking) and three annotation formats, covering ten categories of goal-oriented assistive tasks. We run zero-shot evaluations of representative vision-language models and build a lightweight multimodal world-model baseline that uses all five modalities. Current models can often describe egocentric scenes but still struggle to give context-aware, goal-directed guidance.",
      bullets: [
        "Co-built the dataset at the Harvard Ophthalmology AI Lab: 997 samples × 5 synchronized sensor modalities.",
        "Managed and trained a team of annotators and wrote the annotation guidelines in Label Studio.",
        "Designed annotation tools and benchmarking scripts; hosted data via Hugging Face and GitHub.",
      ],
      media: [
        { type: "image", src: "assets/img/vista-aria-sensors.png", fit: "contain", caption: "Meta Project Aria Gen 1 sensor layout (RGB, SLAM & eye-tracking cameras, 7 mics, IMUs, barometer, magnetometer) used for VISTA data collection. Diagram: Meta" },
      ],
      links: [],
    },
    {
      id: "robot",
      title: "Autonomous Robot Car",
      subtitle: "Raspberry Pi · Vision + PID",
      date: "Sep 2024 – Dec 2024",
      icon: "robot",
      tags: ["Raspberry Pi", "Python", "Computer Vision", "PID", "PWM"],
      summary:
        "Self-driving Raspberry Pi car with camera-based obstacle avoidance and closed-loop PID speed control.",
      bullets: [
        "Designed the control system for a Raspberry Pi car with integrated sensors and actuators for autonomous driving.",
        "Coded vision-based navigation using a camera to detect obstacles and make real-time directional adjustments.",
        "Developed a PID controller to maintain target speed by adjusting motor PWM signals.",
      ],
      media: [
        { type: "image", src: "assets/img/robot-timed-run.jpg", caption: "Timed autonomous run" },
        { type: "image", src: "assets/img/robot-camera-feed.jpg", caption: "Onboard camera feed and servo/pin configuration over SSH" },
        { type: "image", src: "assets/img/robot-car.jpg", caption: "The Raspberry Pi car in motion" },
      ],
      links: [],
    },
  ],

  experience: [
    {
      role: "Electrical Engineering Researcher",
      org: "Henriksen Lab, Washington University in St. Louis",
      date: "May 2026 – Present",
      bullets: [
        "Continuing capstone development of a motorized two-axis goniometer for graphene experiments.",
        "Refining motion-control software and user interface for angular positioning, calibration, and safety constraints.",
        "Evaluating cryogenic compatibility, mechanical stability, thermal load, and wiring strain for real-world integration.",
      ],
    },
    {
      role: "AI Research Assistant",
      org: "Harvard Ophthalmology AI Lab",
      date: "2025 – 2026",
      bullets: [
        "Built “VISTA,” a vision-audio dataset for VLM benchmarking and fine-tuning using Meta Aria smart glasses.",
        "Managed and trained a team of annotators, creating guidelines for high-quality annotations in Label Studio.",
        "Designed annotation tools and benchmarking scripts; hosted data via Hugging Face and GitHub.",
      ],
    },
    {
      role: "Electrical Engineering Grader",
      org: "Washington University in St. Louis",
      date: "Sep 2025 – Dec 2025",
      bullets: [
        "Graded assignments and exams for Introduction to Electrical and Electronic Circuits.",
        "Applied detailed rubrics to evaluate circuit analysis, design, and problem-solving accuracy.",
        "Reviewed a wide range of analog and digital circuit applications.",
      ],
    },
    {
      role: "Design & Construction Jr. Project Assistant",
      org: "Pepperdine University",
      date: "2021 – 2024",
      bullets: [
        "Conducted audits of active construction projects to ensure compliance and progress tracking.",
        "Organized and streamlined file management systems, improving accessibility and efficiency.",
        "Coordinated with vendors, stakeholders, and university management to support project execution.",
      ],
    },
  ],

  skills: [
    { group: "Hardware & PCB", items: ["EasyEDA", "PCB Design & Layout", "PCB Assembly / Rework", "Soldering", "PSpice", "Multisim"] },
    { group: "Lab & Test", items: ["Oscilloscopes", "Multimeters", "Power Supplies", "Function Generators", "Cleanroom Processing"] },
    { group: "Mechanical & Controls", items: ["SolidWorks", "Embedded Systems", "PID Control", "Stepper Motors", "Motion Control"] },
    { group: "Programming", items: ["Python", "MATLAB", "R"] },
    { group: "AI & Data", items: ["PyTorch", "Label Studio", "Hugging Face", "VLM Benchmarking"] },
  ],

  education: [
    {
      school: "Washington University in St. Louis",
      place: "St. Louis, MO",
      date: "Aug 2024 – May 2027",
      degrees: ["B.S. Electrical Engineering · GPA 3.4", "M.Eng. Engineering Management"],
    },
    {
      school: "Pepperdine University",
      place: "Malibu, CA",
      date: "Jan 2021 – Apr 2024",
      degrees: ["B.S. Physics", "B.A. Natural Science"],
    },
  ],
};
