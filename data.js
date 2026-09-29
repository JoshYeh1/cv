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
   or fit: "top" to crop from the top instead of the center, or
   focus: "50% 30%" to choose exactly which point of the image the crop centers on.
   The first entry is used as the card cover. Leave `media: []` to show
   the generated schematic-style placeholder instead.
   ========================================================================= */

window.SITE = {
  name: "Josh Yeh",
  role: "Electrical Engineer",
  focus: "Hardware · Controls · Systems Integration",
  tagline:
    "Hardware, controls, and test, with a focus on taking systems from first prototype through integration and validation.",
  location: "Boston, MA",
  email: "j.y.yeh@email.wustl.edu",
  github: "https://github.com/JoshYeh1",
  linkedin: "https://www.linkedin.com/in/joshua-yeh-profile",
  resume: "assets/Josh_Yeh_Resume_EE.pdf", // export your resume to PDF and put it here
  photo: "assets/img/headshot.jpg",        // optional — falls back to initials

  about: [
    "I'm finishing a B.S. in Electrical Engineering and an M.Eng. in Engineering Management at WashU, after a physics degree from Pepperdine.",
    "My projects sit where electronics meet the physical world: cryogenic motion control, cleanroom device fabrication, and closed-loop robotics. They're multidisciplinary by nature, so I'm used to setting requirements, planning the testing, and carrying a prototype through integration.",
  ],


  // Headline numbers under the hero; each links to its project page
  stats: [
    { value: "±1°", label: "Repeatable positioning on a cryogenic goniometer", project: "goniometer" },
    { value: "997", label: "Multimodal samples in a benchmark under review at ICLR 2027", project: "vista" },
    { value: "Class 100", label: "Cleanroom fabrication of silicon photodiodes", project: "photodiode" },
    { value: "0.07 RPS", label: "Steady-state speed error under load with PID control", project: "robot" },
  ],

  projects: [
    {
      id: "goniometer",
      featured: true,
      title: "Two-Axis Cryogenic Goniometer",
      subtitle: "Capstone → Henriksen Lab · Software & Systems Lead",
      date: "Jan 2026 – Present",
      icon: "gonio",
      tags: ["Arduino C++", "Stepper Motors", "DRV8825", "Microstepping", "SCPI", "EEPROM", "Hall Sensors", "Op-Amp Design", "PCB Design"],
      summary:
        "Two-axis motion control for rotating graphene samples inside a dilution refrigerator, built as a capstone and now continuing in the Henriksen Lab.",
      problem: "Rotating graphene in a strong magnetic field reveals how its electrons respond to field direction. The rotation has to happen at millikelvin temperatures, in vacuum, without adding heat or twisting the sample wiring.",
      role: "Software & systems integration lead on a 3-person team. I owned the firmware and kinematics, integrated the full prototype, and did most of the Hall-sensor PCB design. I'm continuing it in the Henriksen Lab toward fridge installation.",
      built: [
        ["Coupled kinematics.", "The gearbox links the two axes, so I derived the motor-to-sample angle relations instead of driving them independently."],
        ["Skip-step motion.", "Both motors start and stop together along a near-direct path, replacing a slower two-phase move."],
        ["Firmware.", "Arduino C++ with 1/32 microstepping (DRV8825), accel ramps, limit-switch homing, and EEPROM position recovery."],
        ["SCPI interface.", "Lab-instrument-style commands (*IDN?, MOVE:ABS, HOME…)."],
        ["Hall Amp V2 PCB.", "Differential-amplifier board for 3-axis Hall-sensor orientation feedback."],
      ],
      validation: [
        ["Acceptance tests:", "360° on both axes, ±1° repeatability, no drift over long runs."],
        ["Root cause:", "traced motion errors to string slippage and switched to a belt drive so firmware could be verified on its own."],
        ["Cryo readiness:", "evaluating thermal load, wiring strain, and mechanical stability for the fridge."],
      ],
      highlights: [
        { value: "360°", label: "Full rotation on both axes" },
        { value: "±1°", label: "Repeatable positioning error" },
        { value: "0.06°", label: "Theoretical resolution (1/32 microstep)" },
        { value: "±180°", label: "Enforced limits to protect sample wiring" },
      ],
      media: [
        { type: "image", src: "assets/img/gonio-full-setup.jpg", focus: "50% 38%", caption: "Full test setup: belt-driven goniometer between the magnet coils, Hall-sensor signal chain on the breadboard, and bench DMM and power supply" },
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
      links: [{ label: "View code", url: "https://github.com/JoshYeh1/EE_capstone" }],
    },
    {
      id: "photodiode",
      title: "Silicon Photodiode Fabrication",
      subtitle: "Semiconductor Fabrication Lab · ESE 4361",
      date: "Jan 2026 – May 2026",
      icon: "wafer",
      tags: ["Cleanroom", "Thermal Oxidation", "Photolithography", "RIE", "Ion Implantation", "Sentaurus TCAD", "Keysight B1500A"],
      summary:
        "Designed, fabricated, simulated, and tested silicon p–n photodiodes in a Class 100/1000 cleanroom.",
      problem: "Take a bare silicon wafer to a working photodiode, and predict and measure how well it turns light into current.",
      role: "Individual lab project (ESE 4361). I ran the process flow and runsheets, built the TCAD model, tested the devices, and wrote the report.",
      built: [
        ["Process flow.", "Thermal oxidation, lithography, RIE, boron implant (off-site), anneal, and aluminum contacts."],
        ["Thermal oxide.", "285 nm grown against a 300 nm target (10 h at 1100 °C)."],
        ["Sentaurus TCAD model.", "Simulated the full process; compared 10/100/1000 keV implants and predicted ~4 fA dark current."],
        ["Cost model.", "≈ $2,055 per wafer, ≈ $4.11 per photodiode."],
      ],
      validation: [
        ["Metrology:", "oxide thickness verified by ellipsometry."],
        ["Failure analysis:", "traced a full oxide over-etch to photoresist adhesion and set tighter bake and etch controls."],
        ["Device test:", "dark/illuminated I–V (Keysight B1500A) and responsivity at 3 wavelengths, with a peak of 0.0226 A/W at 520 nm."],
      ],
      highlights: [
        { value: "285 nm", label: "Thermal SiO₂ grown (300 nm target)" },
        { value: "4 fA", label: "Simulated dark current at −5 V" },
        { value: "3 λ", label: "Responsivity at 405 / 520 / 635 nm" },
        { value: "$4.11", label: "Modeled cost per photodiode" },
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
      id: "robot",
      title: "Autonomous Robot Car",
      subtitle: "ESE 205 · Raspberry Pi · Team of 2",
      date: "Sep 2024 – Dec 2024",
      icon: "robot",
      tags: ["Raspberry Pi", "Python", "PID Control", "HSV Color Tracking", "PWM", "Ultrasonic Sensing", "Wheel Encoder", "Servos"],
      summary:
        "Self-driving Raspberry Pi car with color tracking, ultrasonic stopping, and closed-loop PID speed control.",
      problem: "Hold a constant speed under load, follow a colored path, and stop before obstacles, with one Raspberry Pi running every sensor at once.",
      role: "Two-person project (ESE 205). We designed the control system, integrated the sensors, and ran the tuning and validation tests together.",
      built: [
        ["PID speed loop", "on a homemade photoresistor wheel encoder."],
        ["Color tracking:", "HSV mask → centroid → steering and camera servo angle, switching from blue to yellow targets."],
        ["Ultrasonic stopping:", "motor power scales down with distance."],
        ["Non-blocking scheduler", "so camera, sensor, and input tasks run concurrently."],
      ],
      validation: [
        ["Step response under load:", "11% overshoot, 0.07 RPS steady-state error; 1.26 s rise with no load."],
        ["Gain study:", "½ Kp was sluggish and 10× Kp overshot."],
        ["FFT of encoder data", "confirmed the 3 Hz target and pinpointed noise sources."],
      ],
      highlights: [
        { value: "1.26 s", label: "Rise time to 3 RPS (no load)" },
        { value: "0.07 RPS", label: "Steady-state error under load" },
        { value: "11%", label: "Overshoot under load" },
        { value: "70 ms", label: "Camera tracking loop period" },
      ],
      media: [
        { type: "video", src: "assets/video/robot-autonomous-run.mp4", teaser: "assets/video/robot-autonomous-run-teaser.mp4", poster: "assets/img/robot-timed-run.jpg", caption: "Timed autonomous run: following the blue tape down the hallway and stopping at the bin" },
        { type: "video", src: "assets/video/robot-camera-feed.mp4", poster: "assets/img/robot-camera-feed.jpg", caption: "Onboard camera view during color tracking: picking out the blue bin and blue tape lane, with servo/pin configuration streamed over SSH" },
        { type: "video", src: "assets/video/robot-motor-test.mp4", poster: "assets/img/robot-car.jpg", caption: "Color tracking: the camera and steering servos turn to follow a blue object" },
        { type: "image", src: "assets/img/robot-camera-flow.png", caption: "Camera steering loop: capture → HSV mask → centroid → servo angle" },
        { type: "image", src: "assets/img/robot-ultrasonic-flow.png", caption: "Ultrasonic loop: distance sets motor PWM and stops the car at a threshold" },
        { type: "image", src: "assets/img/robot-pwm-rps.png", caption: "Measured motor speed vs. PWM with linear fit" },
        { type: "image", src: "assets/img/robot-step-noload.png", caption: "Tuned step response to 3 RPS, stationary with no load (1.26 s rise, 0.3 RPS steady-state error)" },
        { type: "image", src: "assets/img/robot-step-loaded.png", caption: "Tuned step response to 3 RPS while driving under load (11% overshoot, 0.07 RPS steady-state error)" },
        { type: "image", src: "assets/img/robot-step-half-kp.png", caption: "Gain study: ½ Kp with Ki = 0 (slower rise, more steady-state error)" },
        { type: "image", src: "assets/img/robot-step-10x-kp.png", caption: "Gain study: 10× Kp with Ki = 0 (faster rise, large overshoot)" },
      ],
      links: [{ label: "Read the full report (PDF)", url: "assets/papers/Yeh_Wu_Autonomous_Robot_Car_Report.pdf" }],
    },
    {
      id: "vista",
      featured: true,
      title: "VISTA Benchmark",
      subtitle: "Research · Under review at ICLR 2027",
      date: "2025 – 2026",
      icon: "vista",
      tags: ["Multimodal", "Egocentric", "Project Aria", "PyTorch", "Hugging Face", "VLM Evaluation", "Label Studio"],
      summary:
        "Multimodal egocentric benchmark for assistive AI, captured on Meta Aria glasses and under review at ICLR 2027.",
      problem: "AI benchmarks test whether models can describe a scene, not whether they can guide a blind user through a task, and they ignore the audio, motion, and gaze data that smart glasses already capture.",
      role: "Research assistant at the Harvard Ophthalmology AI Lab: I built the dataset, trained and managed the annotators, and wrote the tooling. I ran an earlier pilot as independent research at WashU.",
      built: [
        ["Dataset:", "vision-audio recordings on Meta Aria glasses across 10 assistive task categories."],
        ["Annotation:", "guidelines and training for the annotator team in Label Studio."],
        ["Tooling:", "annotation tools and benchmarking scripts, with data hosted on Hugging Face and GitHub."],
      ],
      highlights: [
        { value: "997", label: "Multimodal egocentric samples" },
        { value: "5", label: "Synchronized sensor modalities" },
        { value: "3", label: "Annotation formats" },
        { value: "10", label: "Assistive task categories" },
      ],
      sections: [
        {
          title: "Earlier work: independent research pilot",
          meta: "ESE 4991 · Presented at WashU ESE Day · Spring 2026",
          text: "About six months before the ICLR submission, I ran my own RGB-only pilot of VISTA. It was less complete than the final benchmark, but it's where the core finding first showed up: models describe scenes well but give weak guidance.",
          highlights: [
            { value: "1,003", label: "Raw recordings (~700 annotated)" },
            { value: "8", label: "Annotators" },
            { value: "0.90", label: "Inter-annotator BERTScore (QA)" },
            { value: "3", label: "VLMs benchmarked" },
          ],
          bullets: [
            ["Annotation interface:", "custom Label Studio setup for scene, Q&A, and action-goal labels."],
            ["Quality check:", "inter-annotator BERTScore of 0.90 (QA) and 0.88 (scene) on 30 overlapping clips."],
            ["Benchmark pipeline:", "PyTorch + Hugging Face, scored with BERTScore, QA F1, and an LLM judge."],
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
      links: [{ label: "View code", url: "https://github.com/JoshYeh1/VISTA" }],
    },
    {
      id: "aria",
      compact: true,
      title: "Meta Glasses AI Assistant",
      subtitle: "Real-time Assistive Eyewear",
      date: "May 2025 – Jun 2025",
      icon: "glasses",
      tags: ["Python", "Whisper", "Qwen VLM", "Flask", "GPU Inference"],
      summary:
        "Wearable assistant on Meta's Aria glasses that speaks scene descriptions in under a second.",
      problem: "Blind and low-vision users need spoken descriptions of their surroundings fast enough to act on while moving.",
      role: "I built the end-to-end system: capture on the glasses, speech input, captioning, and spoken output.",
      built: [
        ["Pipeline:", "Aria camera and audio → Flask server → Whisper (speech-to-text) → Qwen (vision-language) → text-to-speech."],
      ],
      validation: [
        ["Latency:", "cut captioning time 40% with GPU inference tuning and image resizing, reaching under 1 s."],
      ],
      media: [
        { type: "image", src: "assets/img/aria-workstation.jpg", caption: "Meta Project Aria glasses at the development workstation" },
        { type: "image", src: "assets/img/aria-live-capture.jpg", caption: "Live Aria RGB capture streamed to the laptop for VLM scene captioning" },
      ],
      links: [{ label: "View code", url: "https://github.com/JoshYeh1/aria_ai_caption" }],
    },
  ],

  experience: [
    {
      role: "Electrical Engineering Researcher",
      mark: "WU",
      logo: "assets/logos/washu.png",
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
      mark: "HMS",
      logo: "assets/logos/hms.png",
      org: "Harvard Ophthalmology AI Lab",
      date: "2025 – 2026",
      bullets: [
        "Built “VISTA,” a vision-audio dataset for VLM benchmarking and fine-tuning using Meta Aria smart glasses.",
        "Managed and trained a team of annotators, creating guidelines for high-quality annotations in Label Studio.",
        "Designed annotation tools and benchmarking scripts; hosted data via Hugging Face and GitHub.",
      ],
      links: [{ label: "Lab profile", url: "https://wang.hms.harvard.edu/team/joshua-yeh/" }],
    },
    {
      role: "Electrical Engineering Grader",
      mark: "WU",
      logo: "assets/logos/washu.png",
      org: "Washington University in St. Louis",
      date: "Sep 2025 – Dec 2025",
      bullets: [
        "Graded assignments and exams for Introduction to Electrical and Electronic Circuits.",
        "Applied detailed rubrics to evaluate circuit analysis, design, and problem-solving accuracy.",
      ],
    },
    {
      role: "Design & Construction Jr. Project Assistant",
      mark: "PU",
      logo: "assets/logos/pepperdine.png",
      org: "Pepperdine University",
      date: "2021 – 2024",
      bullets: [
        "Conducted audits of active construction projects to ensure compliance and progress tracking.",
        "Organized and streamlined file management systems, improving accessibility and efficiency.",
      ],
    },
  ],

  skills: [
    { group: "Hardware & PCB", icon: "chip", items: ["EasyEDA", "PCB Design & Layout", "PCB Assembly / Rework", "Soldering", "Op-Amp / Analog Signal Conditioning", "PSpice", "Multisim"] },
    { group: "Test & Instrumentation", icon: "scope", items: ["Oscilloscopes", "Multimeters", "Power Supplies", "Function Generators", "Keysight B1500A SMU", "Optical Power Meters", "SCPI Instrument Control", "Cleanroom Processing"] },
    { group: "Controls & Embedded", icon: "gear", items: ["PID Control", "Motion Control", "Stepper Motors & Drivers", "Arduino (C++)", "Raspberry Pi", "Embedded Systems", "SolidWorks"] },
    { group: "Programming & Simulation", icon: "code", items: ["Python", "C++ (Arduino)", "MATLAB", "R", "Sentaurus TCAD"] },
    { group: "Integration & Validation", icon: "check", items: ["Requirements & Acceptance Criteria", "Test Planning", "Root-Cause Analysis", "Technical Documentation", "Runsheets & Lab Notebooks"] },
    { group: "AI & Data", icon: "network", items: ["PyTorch", "Label Studio", "Hugging Face", "VLM Benchmarking"] },
  ],

  education: [
    {
      school: "Washington University in St. Louis",
      mark: "WU",
      logo: "assets/logos/washu.png",
      place: "St. Louis, MO",
      date: "Aug 2024 – May 2027",
      degrees: ["B.S. Electrical Engineering · GPA 3.4", "M.Eng. Engineering Management"],
    },
    {
      school: "Pepperdine University",
      mark: "PU",
      logo: "assets/logos/pepperdine.png",
      place: "Malibu, CA",
      date: "Jan 2021 – Apr 2024",
      degrees: ["B.S. Physics", "B.A. Natural Science"],
    },
  ],
};
