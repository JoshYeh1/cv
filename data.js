/* =========================================================================
   SITE CONTENT — edit this file to update the website.
   -------------------------------------------------------------------------
   Media: drop files into assets/img or assets/video, then list them in a
   project's `media` array. Supported entries:
     { type: "image",   src: "assets/img/goniometer-1.jpg", caption: "..." }
     { type: "video",   src: "assets/video/demo.mp4",       caption: "..." }
       (videos can also take poster: "assets/img/frame.jpg" and a short silent
        teaser: "assets/video/demo-teaser.mp4" that loops on the card cover)
     { type: "youtube", id:  "dQw4w9WgXcQ",                 caption: "..." }
   Add fit: "contain" to an image to show it whole (no cropping) on the card,
   or fit: "top" to crop from the top instead of the center.
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
      subtitle: "Capstone · Software & Systems Lead",
      date: "Jan 2025 – May 2026",
      icon: "gonio",
      tags: ["Arduino C++", "Stepper Motors", "DRV8825", "Microstepping", "SCPI", "EEPROM", "Hall Sensors", "Op-Amp Design", "PCB Design"],
      summary:
        "A motorized two-axis goniometer that rotates graphene samples to precise angles inside a dilution refrigerator, where rotating the sample in a strong magnetic field reveals quantum Hall physics.",
      description:
        "Our client, Dr. Erik Henriksen, studies graphene at millikelvin temperatures in strong magnetic fields, and rotating the sample relative to the field separates spin and orbital effects. On a team of three, I led software and systems integration for a 2× scale prototype with an aluminum strut frame, 3D-printed motor housings, and a belt-driven dual-pulley stage. The firmware converts user-selected angles into coordinated motor motion, even though the gearbox couples the two axes. It also holds the wires within safe limits and exposes everything through a SCPI command interface. With the prototype working, a half-size, gold-plated version has been built for the fridge.",
      highlights: [
        { value: "360°", label: "Full rotation on both axes" },
        { value: "±1°", label: "Repeatable positioning error" },
        { value: "0.06°", label: "Theoretical resolution (1/32 microstep)" },
        { value: "±180°", label: "Enforced limits to protect sample wiring" },
      ],
      bullets: [
        "Derived the coupled kinematics between motor angles {α, β} and sample orientation {Ψ, ω}, since the gearbox makes Ψ rotation also drive ω, and added a field-reference mode {θ, φ} at the client's request.",
        "Replaced two-phase motion with a single-phase “skip-step” algorithm: the motor with fewer steps skips at a computed interval so both axes start and finish together along a near-direct path.",
        "Wrote Arduino C++ firmware with 1/32 microstepping on DRV8825 drivers, acceleration/deceleration ramps, limit-switch homing, and EEPROM position recovery after power loss.",
        "Built a SCPI-style command set (*IDN?, MOVE:ABS, HOME, CONF:ORIENTMODE, …) so the system works like standard lab instrumentation.",
        "Diagnosed Kevlar-string slippage that masked software errors and moved the drivetrain to bearings and belts. Also analyzed dead-reckoning drift, step loss, and backlash.",
        "Designed a differential amplifier and the Hall Amp V2 PCB to condition 3-axis Hall-sensor signals for future closed-loop orientation sensing.",
      ],
      media: [
        { type: "image", src: "assets/img/gonio-motor-housings.jpg", caption: "Stepper motors in 3D-printed housings on the strut frame, belt-coupled to the stage below" },
        { type: "image", src: "assets/img/gonio-stage.jpg", caption: "3D-printed two-axis goniometer stage with bevel gearbox" },
        { type: "image", src: "assets/img/gonio-belt-upgrade.jpg", caption: "Prototype revision: Kevlar strings and springs replaced with bearings and belts to stop slippage" },
        { type: "image", src: "assets/img/gonio-rotation-angles.png", caption: "Motor angles α, β and sample rotation angles Ψ, ω, which are coupled through the gearbox" },
        { type: "image", src: "assets/img/gonio-angle-relations.png", caption: "Derived relations between motor, sample-frame, and field-frame angles" },
        { type: "image", src: "assets/img/gonio-skip-step-algorithm.png", caption: "Single-phase skip-step algorithm for coordinated two-motor motion" },
        { type: "image", src: "assets/img/gonio-scpi-interface.png", caption: "SCPI command interface with sample and magnetic-field orientation modes" },
        { type: "image", src: "assets/img/gonio-diff-amp-schematic.png", caption: "Differential amplifier for conditioning Hall-sensor signals" },
        { type: "image", src: "assets/img/hall-amp-layout.png", caption: "Hall Amp V2: two-layer PCB layout in EasyEDA" },
        { type: "image", src: "assets/img/hall-amp-pcb.jpg", caption: "Assembled Hall amplifier PCB under test" },
        { type: "image", src: "assets/img/hall-amp-breadboard.jpg", caption: "Breadboard prototype of the op-amp signal chain" },
        { type: "image", src: "assets/img/gonio-cryo-model.jpg", caption: "Half-size, gold-plated goniometer built for the dilution refrigerator" },
        { type: "image", src: "assets/img/gonio-ese-day-poster.jpg", caption: "Presenting the project with my teammates at WashU ESE Day" },
      ],
      links: [],
    },
    {
      id: "photodiode",
      title: "Silicon Photodiode Fabrication",
      subtitle: "Semiconductor Fabrication Lab · ESE 4361",
      date: "Jan 2025 – May 2026",
      icon: "wafer",
      tags: ["Cleanroom", "Thermal Oxidation", "Photolithography", "RIE", "Ion Implantation", "Sentaurus TCAD", "Keysight B1500A"],
      summary:
        "Designed, fabricated, simulated, and tested silicon p–n photodiodes in a Class 100/1000 cleanroom, from thermal oxidation to aluminum contacts.",
      description:
        "A front-to-back photodiode project. I ran thermal oxidation, photolithography, reactive ion etching, boron ion implantation, annealing, and aluminum back-end contact formation in the cleanroom, and simulated the same process in Synopsys Sentaurus TCAD. My main wafer was lost to an oxide over-etch during RIE, which I traced to photoresist adhesion and hard-bake issues. I then characterized comparison devices on a probe station using dark/illuminated I–V sweeps and calibrated responsivity measurements at three laser wavelengths.",
      highlights: [
        { value: "285 nm", label: "Thermal SiO₂ grown (300 nm target)" },
        { value: "4 fA", label: "Simulated dark current at −5 V" },
        { value: "3 λ", label: "Responsivity at 405 / 520 / 635 nm" },
        { value: "$4.11", label: "Modeled cost per photodiode" },
      ],
      bullets: [
        "Grew a 285.3 nm thermal oxide (target 300 nm) with a 10 h dry oxidation at 1100 °C, verified on a Woollam α-SE ellipsometer.",
        "Simulated the full process in Sentaurus TCAD (SProcess + SDevice): 100 keV, 1×10¹³ cm⁻² boron implant; compared 10 / 100 / 1000 keV cases (junction depth 2.14 – 3.61 µm).",
        "Root-caused a complete oxide over-etch to photoresist hard-bake/adhesion and specified tighter bake, descum, and RIE-time control.",
        "Measured dark and illuminated I–V curves with a Keysight B1500A and responsivity with a Thorlabs PM100D2 (peak 0.0226 A/W at 520 nm on a comparison die).",
        "Built a production cost model from tool rates and runsheets: ≈ $2,055 per wafer, ≈ $4.11 per photodiode.",
        "Maintained industry-standard wafer runsheets and digital lab notebooks documenting every process parameter.",
      ],
      media: [
        { type: "image", src: "assets/img/photodiode-wafer.jpg", caption: "Silicon wafer with patterned photodiode die" },
        { type: "image", src: "assets/img/photodiode-process-flow.png", caption: "Simplified process flow: oxidation → lithography → boron implant → anneal → nitride → contacts → aluminum" },
        { type: "image", src: "assets/img/photodiode-tcad-structure.png", caption: "Final simulated device structure from Sentaurus SProcess (net active doping)" },
        { type: "image", src: "assets/img/photodiode-dopant-profile.png", caption: "Simulated boron profile before and after the 1100 °C anneal" },
        { type: "image", src: "assets/img/photodiode-iv-curves.png", caption: "Measured I–V curves under different light sources (comparison device, Die 10): illuminated curves show photocurrent" },
        { type: "image", src: "assets/img/photodiode-ellipsometer.jpg", caption: "Woollam α-SE ellipsometer used to measure oxide thickness" },
      ],
      links: [{ label: "Read the full lab paper (PDF)", url: "assets/papers/Yeh_Silicon_Photodiode_Paper.pdf" }],
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
      tags: ["Multimodal", "Egocentric", "Project Aria", "PyTorch", "Hugging Face", "VLM Evaluation", "Label Studio"],
      summary:
        "A multimodal egocentric benchmark of goal-oriented assistance for blind and low-vision users, captured on Meta Project Aria glasses.",
      description:
        "VISTA is a 997-sample benchmark captured with Meta Project Aria glasses. Each sample has five synchronized modalities (vision, audio, eye tracking, inertial signals, and spatial tracking) and three annotation formats, covering ten categories of goal-oriented assistive tasks. The benchmark runs zero-shot evaluations of representative vision-language models and a lightweight multimodal world-model baseline that uses all five modalities. Current models can often describe egocentric scenes, but they still struggle to give context-aware, goal-directed guidance.",
      highlights: [
        { value: "997", label: "Multimodal egocentric samples" },
        { value: "5", label: "Synchronized sensor modalities" },
        { value: "3", label: "Annotation formats" },
        { value: "10", label: "Assistive task categories" },
      ],
      bullets: [
        "Built VISTA at the Harvard Ophthalmology AI Lab, a vision-audio dataset for VLM benchmarking and fine-tuning, captured on Meta Aria smart glasses.",
        "Managed and trained a team of annotators and wrote the guidelines for high-quality annotations in Label Studio.",
        "Designed annotation tools and benchmarking scripts; hosted data via Hugging Face and GitHub.",
      ],
      sections: [
        {
          title: "Earlier work: independent research pilot",
          meta: "ESE 4991 · Presented at WashU ESE Day · Spring 2026",
          text: "About six months before the ICLR submission, I ran my own pilot of VISTA as independent research. It used an earlier cut of the data and an RGB-only benchmark that I built myself. It's less complete than the final benchmark, but it's where the core finding first showed up: models describe scenes well but struggle to give actionable guidance.",
          highlights: [
            { value: "1,003", label: "Raw recordings (~700 annotated)" },
            { value: "8", label: "Annotators" },
            { value: "0.90", label: "Inter-annotator BERTScore (QA)" },
            { value: "3", label: "VLMs benchmarked" },
          ],
          bullets: [
            "Built a custom Label Studio interface for clip- and frame-level annotation: scene descriptions, Q/A pairs, and action goals with instructions.",
            "Measured inter-annotator agreement on 30 overlapping clips: BERTScore 0.90 (QA) and 0.88 (scene), SBERT 0.63–0.67.",
            "Wrote an evaluation pipeline in PyTorch + Hugging Face Transformers (8 frames per clip, task-specific prompts), scored with BERTScore, QA F1, and a Qwen-2.5-7B LLM judge.",
          ],
          table: {
            caption: "Pilot zero-shot results (RGB only; not the ICLR submission results)",
            head: ["Model", "Scene BERT", "Guide BERT", "QA F1", "Scene Judge", "Guide Judge"],
            rows: [
              ["BLIP-2", "0.849", "0.833", "0.128", "2.49", "2.01"],
              ["LLaVA-1.5", "0.861", "0.832", "0.280", "2.59", "2.25"],
              ["Qwen-VL", "0.830", "0.817", "0.232", "2.79", "3.03"],
            ],
          },
        },
      ],
      media: [
        { type: "image", src: "assets/img/vista-task-examples.jpg", fit: "top", caption: "Example assistive scenarios, the five Aria sensor streams (RGB, audio, IMU, SLAM, eye tracking), and scene / Q&A / action-guidance annotations" },
        { type: "image", src: "assets/img/vista-aria-sensors.png", fit: "contain", caption: "Meta Project Aria Gen 1 sensor layout (RGB, SLAM & eye-tracking cameras, 7 mics, IMUs, barometer, magnetometer) used for VISTA data collection. Diagram: Meta" },
        { type: "image", src: "assets/img/vista-ese-day-poster.jpg", caption: "My independent-research poster presented at WashU ESE Day (pilot, spring 2026)" },
        { type: "image", src: "assets/img/vista-pipeline.png", caption: "Pilot pipeline: Aria capture → video/audio/IMU processing → annotation → VLM benchmarking" },
        { type: "image", src: "assets/img/vista-pilot-similarity-qa.png", caption: "Pilot results: semantic similarity and QA F1 across three VLMs" },
        { type: "image", src: "assets/img/vista-pilot-llm-judge.png", caption: "Pilot results: LLM-judge usefulness ratings for scene descriptions and guidance" },
        { type: "image", src: "assets/img/vista-pilot-iaa.png", caption: "Pilot inter-annotator agreement (BERTScore and SBERT)" },
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
        { type: "video", src: "assets/video/robot-autonomous-run.mp4", teaser: "assets/video/robot-autonomous-run-teaser.mp4", poster: "assets/img/robot-timed-run.jpg", caption: "Timed autonomous run: lane following down the hallway, stopping at an obstacle" },
        { type: "video", src: "assets/video/robot-camera-feed.mp4", poster: "assets/img/robot-camera-feed.jpg", caption: "Live onboard camera feed and servo/pin configuration streamed over SSH" },
        { type: "video", src: "assets/video/robot-motor-test.mp4", poster: "assets/img/robot-car.jpg", caption: "Bench test of drive motors and steering servos" },
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
