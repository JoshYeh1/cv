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
    "I work on hardware, controls, and test, and I like owning a system end to end: from requirements and first prototypes through integration, validation, and deployment.",
  location: "Boston, MA",
  email: "j.y.yeh@email.wustl.edu",
  github: "https://github.com/JoshYeh1",
  linkedin: "https://www.linkedin.com/in/joshua-yeh-profile",
  resume: "assets/Josh_Yeh_Resume_EE.pdf", // export your resume to PDF and put it here
  photo: "assets/img/headshot.jpg",        // optional — falls back to initials

  about: [
    "I'm an Electrical Engineering student at Washington University in St. Louis, finishing a B.S. in EE alongside an M.Eng. in Engineering Management, with an earlier degree in physics from Pepperdine.",
    "Most of my work lives where electronics meet the physical world: motion-control firmware and sensor electronics for a cryogenic goniometer, a silicon photodiode built in the cleanroom, and closed-loop control on a small autonomous car. These projects cross disciplines (firmware, circuits, mechanics, and measurement all in one system), so I've gotten used to pinning down requirements, planning how each piece will be tested, documenting as I go, and carrying a prototype through to integration.",
    "I'm looking for full-time roles in electrical, controls, test, and systems integration engineering.",
  ],


  // Headline numbers under the hero; each links to its project page
  stats: [
    { value: "±1°", label: "Repeatable positioning on a cryogenic goniometer", project: "goniometer" },
    { value: "997", label: "Multimodal samples in a benchmark under review at ICLR 2027", project: "vista" },
    { value: "Class 100", label: "Cleanroom fabrication of silicon photodiodes", project: "photodiode" },
    { value: "<1 s", label: "AI scene descriptions on AR glasses, 40% faster", project: "aria" },
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
        "A motorized two-axis goniometer that rotates graphene samples to precise angles inside a dilution refrigerator, where rotating the sample in a strong magnetic field reveals quantum Hall physics.",
      problem: "Rotating a graphene sample in a strong magnetic field reveals how its charge carriers respond to field direction, but the rotation has to happen at millikelvin temperatures, in vacuum, without adding heat or twisting the sample's wiring. The client needed a system that turns a requested orientation into safe, precise two-axis motion.",
      role: "I was the software and systems integration lead on a three-person capstone team for Dr. Erik Henriksen (Physics). I owned the motion-control firmware and the kinematics behind it, brought the electronics, drivetrain, and user interface together into a working 2× scale prototype, and did most of the design of the Hall-sensor amplifier PCB. Since the capstone ended in April 2026, I've continued the work in the Henriksen Lab, preparing the system for installation in the dilution refrigerator.",
      built: [
        "Derived the coupled kinematics between motor angles {α, β} and sample orientation {Ψ, ω}. The gearbox makes Ψ rotation also drive ω, so the axes can't be treated independently. I also added a field-reference mode {θ, φ} at the client's request.",
        "Replaced two-phase motion with a single-phase “skip-step” algorithm: the motor with fewer steps skips at a computed interval, so both axes start and finish together along a near-direct path.",
        "Wrote Arduino C++ firmware with 1/32 microstepping on DRV8825 drivers, acceleration/deceleration ramps, limit-switch homing, and EEPROM position recovery after power loss.",
        "Built a SCPI-style command set (*IDN?, MOVE:ABS, HOME, CONF:ORIENTMODE, …) so the goniometer can be controlled like standard lab instrumentation.",
        "Did most of the design of the Hall Amp V2 PCB, a differential-amplifier board that conditions 3-axis Hall-sensor signals for closed-loop orientation sensing.",
      ],
      validation: [
        "Tested against three acceptance criteria: full 360° rotation on both axes without twisting the wires, repeatable positioning within ±1°, and long-duration runs with no noticeable drift.",
        "Separated mechanical faults from firmware faults: traced motion errors to Kevlar-string slippage and moved the drivetrain to bearings and belts so the firmware could be verified on its own.",
        "Analyzed stepper error sources (dead-reckoning drift, step loss, and backlash) and enforced ±180° limits to protect the sample wiring.",
        "Bench-tested the Hall-sensor signal chain with the differential amplifier, using series resistors to simulate the sensor terminals.",
        "Evaluating cryogenic compatibility, thermal load (motors energized only while moving), mechanical stability, and wiring strain for installation in the fridge.",
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
      problem: "Take a bare silicon wafer to a working p–n photodiode: design the process, fabricate it in a teaching cleanroom, predict its behavior in simulation, and measure whether the finished device actually converts light to current.",
      role: "This was an individual lab project (ESE 4361). I carried out the cleanroom process flow and kept the wafer runsheets and lab notebook. I also built a Sentaurus TCAD model of the same process, ran the electrical and optical tests, and wrote the IEEE-style report, including a production cost model.",
      built: [
        "Ran the process flow: thermal oxidation, photolithography, reactive ion etching, boron ion implantation (off-site), annealing, and aluminum back-end contacts.",
        "Grew a 285.3 nm thermal oxide (300 nm target) with a 10 h dry oxidation at 1100 °C.",
        "Modeled the full process in Sentaurus TCAD (SProcess + SDevice): 100 keV, 1×10¹³ cm⁻² boron implant, with 10 / 100 / 1000 keV cases compared (junction depth 2.14–3.61 µm) and a simulated dark current of about 4 fA at −5 V.",
        "Built a production cost model from tool rates and the runsheet: ≈ $2,055 per wafer, ≈ $4.11 per photodiode.",
      ],
      validation: [
        "Verified oxide thickness on a Woollam α-SE ellipsometer before patterning.",
        "Root-caused a complete oxide over-etch during RIE to photoresist adhesion and hard-bake issues, and specified tighter bake, descum, and etch-time control for the next run.",
        "Measured dark and illuminated I–V curves on a probe station with a Keysight B1500A, and responsivity at 405 / 520 / 635 nm with a Thorlabs PM100D2 (peak 0.0226 A/W at 520 nm on a comparison die).",
        "Compared the measurements with the simulated device and attributed the gap (low responsivity, unstable photocurrent) to contact quality, surface recombination, and process defects.",
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
        "Self-driving Raspberry Pi car with camera-based color tracking, ultrasonic obstacle stopping, and closed-loop PID speed control.",
      problem: "Make a low-cost Raspberry Pi car drive itself: hold a constant speed under load, follow a colored path, switch between targets, and stop safely before obstacles, with one processor running the camera, ultrasonic sensor, encoder, and user input at the same time.",
      role: "This was a two-person project (ESE 205). Together we designed the control system, integrated the sensors and actuators, and ran the tuning and validation tests for each objective, then wrote them up in the final report.",
      built: [
        "A PID speed controller on a homemade wheel encoder (photoresistor + LED, sampled at 50 Hz, speed computed at 4 Hz).",
        "HSV color tracking: each frame is masked, blurred, and thresholded, then image moments find the target centroid, which becomes a steering and camera-swivel servo angle.",
        "Target chaining: once the car reaches the blue object, it switches its HSV range to track and stop at a yellow one.",
        "Ultrasonic speed scaling: motor PWM drops with distance, so the car slows smoothly and stops before obstacles.",
        "A counter-based, non-blocking scheduler in place of sleep() calls, so the camera, ultrasonic, and keyboard tasks run concurrently in real time.",
      ],
      validation: [
        "Characterized the motor with a PWM-to-speed fit (RPS ≈ 0.0276·PWM + 2.26).",
        "Measured step responses to 3 RPS: 1.26 s rise and 0.3 RPS steady-state error with no load; 11% overshoot and 0.07 RPS steady-state error while driving under load (Kp = 8, Ki = 1, Kd = 25).",
        "Ran a gain study: halving Kp slowed the response and raised steady-state error, and 10× Kp overshot heavily.",
        "Used an FFT of encoder data to confirm the 3 Hz target speed and trace noise to wheel wobble, room lighting, and a faulty encoder LED.",
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
      id: "aria",
      title: "Meta Glasses AI Assistant",
      subtitle: "Real-time Assistive Eyewear",
      date: "May 2025 – Jun 2025",
      icon: "glasses",
      tags: ["Python", "Whisper", "Qwen VLM", "Flask", "GPU Inference"],
      summary:
        "Multimodal assistant on Meta's Aria glasses that speaks concise scene descriptions in under a second.",
      problem: "Blind and low-vision users need spoken descriptions of their surroundings fast enough to act on while moving. That means capturing video and speech on wearable glasses and turning them into useful audio in well under a second.",
      role: "I engineered the end-to-end system: capture on Meta's Project Aria glasses, speech input, vision-language captioning, and spoken output, all tied together through a server I built.",
      built: [
        "Streamed Aria camera frames and audio to a Flask server that runs the full pipeline.",
        "Integrated Whisper for speech-to-text, Qwen as the vision-language model, and text-to-speech for spoken answers.",
      ],
      validation: [
        "Profiled end-to-end latency and cut captioning time by 40% through GPU inference optimization and more efficient image resizing, reaching sub-second scene descriptions.",
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
      problem: "Existing benchmarks test whether AI models can describe a scene, not whether they can guide a blind user through a task. They also ignore the audio, motion, gaze, and spatial data that wearable glasses already capture.",
      role: "As a research assistant at the Harvard Ophthalmology AI Lab, I built the VISTA dataset on Meta Aria glasses, trained and managed the annotation team, and wrote the annotation tools and benchmarking scripts. About six months before the ICLR submission, I ran my own pilot as independent research at WashU (below).",
      built: [
        "Built VISTA, a vision-audio dataset for VLM benchmarking and fine-tuning, captured on Meta Aria smart glasses across ten goal-oriented assistive task categories.",
        "Wrote the annotation guidelines and trained a team of annotators in Label Studio.",
        "Designed annotation tools and benchmarking scripts, and hosted the data on Hugging Face and GitHub.",
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
        "Reviewed a wide range of analog and digital circuit applications.",
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
        "Coordinated with vendors, stakeholders, and university management to support project execution.",
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
