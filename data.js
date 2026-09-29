/* =========================================================================
   SITE CONTENT: edit this file to update the website.
   -------------------------------------------------------------------------
   stats          Homepage metric row (each links to a project page).
   projects[]     Case studies. `tier` sets homepage placement:
                    "featured" (large card), "selected" (grid), "additional" (small row).
                  cardTags: 3–5 tags for the homepage card; tags: full list on the project page.
                  problem / role: short paragraphs.
                  system, implementation: bullets; [lead, detail] renders a bold lead-in.
                  iteration: [{ issue, cause, fix, result }] shown under "Test & Iteration".
                  results + table: shown under "Results"; highlights: key-result tiles.
   media[]        First item is the cover. Types: image | video | youtube.
                  fit: "contain" | "top", focus: "50% 30%" control card cropping.
                  more: true moves an item into "More development photos".
   ========================================================================= */

window.SITE = {
  name: "Josh Yeh",
  email: "j.y.yeh@email.wustl.edu",
  github: "https://github.com/JoshYeh1",
  linkedin: "https://www.linkedin.com/in/joshua-yeh-profile",
  resume: "assets/Josh_Yeh_Resume_EE.pdf",
  photo: "assets/img/headshot.jpg",
  stats: [
    {
      value: "±1°",
      label: "Goniometer positioning repeatability",
      project: "goniometer"
    },
    {
      value: "360° × 360°",
      label: "Two-axis rotation without twisting sample wiring",
      project: "goniometer"
    },
    {
      value: "0.0226 A/W",
      label: "Photodiode responsivity measured at 520 nm",
      project: "photodiode"
    },
    {
      value: "0.07 RPS",
      label: "PID steady-state speed error under load",
      project: "robot"
    }
  ],
  projects: [
    {
      id: "goniometer",
      featured: true,
      title: "Two-Axis Cryogenic Goniometer",
      subtitle: "Capstone → Henriksen Lab · Software & Systems Lead",
      date: "Jan 2026 – Present",
      icon: "gonio",
      tags: [
        "Motion Control",
        "Embedded C++ (Arduino)",
        "Stepper Motors",
        "DRV8825",
        "Microstepping",
        "Coupled Kinematics",
        "SCPI",
        "EEPROM",
        "Hall Sensors",
        "Analog Signal Conditioning",
        "PCB Design",
        "Acceptance Testing"
      ],
      summary: "Two-axis motion control for rotating graphene samples inside a dilution refrigerator, built as a capstone and now continuing in the Henriksen Lab.",
      problem: "Rotating graphene in a strong magnetic field reveals how its electrons respond to field direction. The rotation has to happen at millikelvin temperatures, in vacuum, without adding heat or twisting the sample wiring.",
      role: "Software & systems integration lead on a 3-person team. I owned the firmware and kinematics, integrated the full prototype, and did most of the Hall-sensor PCB design. I'm continuing it in the Henriksen Lab toward fridge installation.",
      highlights: [
        {
          value: "±1°",
          label: "Repeatable positioning"
        },
        {
          value: "360° × 360°",
          label: "Full rotation on both axes"
        },
        {
          value: "0.06°",
          label: "Theoretical resolution (1/32 microstep)"
        },
        {
          value: "±180°",
          label: "Firmware limits protecting sample wiring"
        }
      ],
      media: [
        {
          type: "image",
          src: "assets/img/gonio-full-setup.jpg",
          focus: "50% 38%",
          caption: "Full test setup: belt-driven goniometer between the magnet coils, Hall-sensor signal chain on the breadboard, and bench DMM and power supply"
        },
        {
          type: "image",
          src: "assets/img/gonio-stage.jpg",
          caption: "3D-printed two-axis goniometer stage with bevel gearbox"
        },
        {
          type: "image",
          src: "assets/img/gonio-motor-housings.jpg",
          caption: "Stepper motors in 3D-printed housings on the strut frame, belt-coupled to the stage below"
        },
        {
          type: "image",
          src: "assets/img/gonio-rotation-angles.png",
          caption: "Motor angles α, β and sample rotation angles Ψ, ω, which are coupled through the gearbox"
        },
        {
          type: "image",
          src: "assets/img/gonio-scpi-interface.png",
          caption: "SCPI command interface with sample and magnetic-field orientation modes"
        },
        {
          type: "image",
          src: "assets/img/hall-amp-pcb.jpg",
          caption: "Assembled Hall amplifier PCB under test"
        },
        {
          type: "image",
          src: "assets/img/gonio-cryo-model.jpg",
          caption: "Half-size, gold-plated goniometer built for the dilution refrigerator"
        },
        {
          type: "image",
          src: "assets/img/gonio-belt-upgrade.jpg",
          caption: "Prototype revision: Kevlar strings and springs replaced with bearings and belts to stop slippage"
        },
        {
          type: "image",
          src: "assets/img/gonio-angle-relations.png",
          caption: "Derived relations between motor, sample-frame, and field-frame angles",
          more: true
        },
        {
          type: "image",
          src: "assets/img/gonio-skip-step-algorithm.png",
          caption: "Single-phase skip-step algorithm for coordinated two-motor motion",
          more: true
        },
        {
          type: "image",
          src: "assets/img/gonio-diff-amp-schematic.png",
          caption: "Differential amplifier for conditioning Hall-sensor signals",
          more: true
        },
        {
          type: "image",
          src: "assets/img/hall-amp-layout.png",
          caption: "Hall Amp V2: two-layer PCB layout in EasyEDA",
          more: true
        },
        {
          type: "image",
          src: "assets/img/hall-amp-breadboard.jpg",
          caption: "Breadboard prototype of the op-amp signal chain",
          more: true
        },
        {
          type: "image",
          src: "assets/img/gonio-ese-day-poster.jpg",
          caption: "Presenting the project with my teammates at WashU ESE Day",
          more: true
        }
      ],
      links: [
        {
          label: "View code",
          url: "https://github.com/JoshYeh1/EE_capstone"
        }
      ],
      tier: "featured",
      cardTags: [
        "Motion Control",
        "Embedded C++",
        "PCB Design",
        "Hall Sensors"
      ],
      system: [
        [
          "Mechanical:",
          "aluminum strut frame, 3D-printed motor housings, belt drive, and a bevel-gear two-axis stage (2× scale prototype)."
        ],
        [
          "Actuation:",
          "two stepper motors on DRV8825 drivers with 1/32 microstepping."
        ],
        [
          "Control:",
          "Arduino firmware with a SCPI serial interface and an orientation GUI."
        ],
        [
          "Sensing:",
          "limit switches for homing, plus a 3-axis Hall sensor through a differential amplifier for closed-loop orientation."
        ]
      ],
      implementation: [
        [
          "Coupled kinematics.",
          "The gearbox links the two axes, so I derived the motor-to-sample angle relations instead of driving them independently."
        ],
        [
          "Skip-step motion.",
          "Both motors start and stop together along a near-direct path, replacing a slower two-phase move."
        ],
        [
          "Firmware.",
          "Arduino C++ with acceleration ramps, limit-switch homing, ±180° limits, and EEPROM position recovery after power loss."
        ],
        [
          "SCPI interface.",
          "Lab-instrument-style commands (*IDN?, MOVE:ABS, HOME, CONF:ORIENTMODE…) with sample- and field-referenced modes."
        ],
        [
          "Hall Amp V2 PCB.",
          "Did most of the design of a differential-amplifier board that conditions 3-axis Hall-sensor signals."
        ]
      ],
      iteration: [
        {
          issue: "Commanded moves didn't reliably produce the matching stage rotation.",
          cause: "The Kevlar strings and springs couldn't hold tension, so they slipped on the axles. That made mechanical error indistinguishable from firmware error.",
          fix: "Replaced the strings with ball bearings and belts.",
          result: "Motion transferred reliably and the firmware could be verified on its own, which led to ±1° repeatability and no noticeable drift over long runs."
        },
        {
          issue: "Early moves ran in two phases (Ψ, then ω), which was slow at cryogenic-safe speeds.",
          cause: "The coupling between the two axes wasn't modeled yet, so the motion had to be split to isolate each axis.",
          fix: "Derived the coupled kinematics and wrote the single-phase skip-step algorithm.",
          result: "Both axes now move together along a near-direct path, with smoother and shorter motion."
        },
        {
          issue: "Raw Hall-sensor readings were too small and noisy to resolve orientation.",
          cause: "Low-amplitude differential sensor output sat close to the microcontroller's noise.",
          fix: "Added a differential amplifier, bench-tested it with series resistors simulating the sensor terminals, and moved it onto the Hall Amp V2 PCB.",
          result: "The signal chain is in place for closed-loop orientation sensing, which is the next milestone in the Henriksen Lab."
        }
      ],
      results: [
        "Met all three acceptance criteria: full 360° rotation on both axes, repeatable positioning within ±1°, and stable long-duration operation.",
        "Sub-degree resolution with 1/32 microstepping, and ±180° limits that keep the sample wiring intact.",
        "A half-size, gold-plated goniometer has been built for the fridge. I'm evaluating thermal load, wiring strain, and mechanical stability for installation."
      ]
    },
    {
      id: "photodiode",
      title: "Silicon Photodiode Fabrication",
      subtitle: "Semiconductor Fabrication Lab · ESE 4361",
      date: "Jan 2026 – May 2026",
      icon: "wafer",
      tags: [
        "Class 100/1000 Cleanroom",
        "Thermal Oxidation",
        "Photolithography",
        "RIE",
        "Ion Implantation",
        "Ellipsometry",
        "Sentaurus TCAD",
        "Keysight B1500A",
        "I–V Characterization",
        "Responsivity",
        "Failure Analysis"
      ],
      summary: "Designed, fabricated, simulated, and tested silicon p–n photodiodes in a Class 100/1000 cleanroom.",
      problem: "Take a bare silicon wafer to a working photodiode, and predict and measure how well it turns light into current.",
      role: "Individual lab project (ESE 4361). I ran the process flow and runsheets, built the TCAD model, tested the devices, and wrote the report.",
      highlights: [
        {
          value: "285 nm",
          label: "Thermal oxide measured (300 nm target)"
        },
        {
          value: "0.0226 A/W",
          label: "Peak responsivity at 520 nm"
        },
        {
          value: "≈ 4 fA",
          label: "Simulated dark current at −5 V"
        },
        {
          value: "$4.11",
          label: "Modeled cost per photodiode"
        }
      ],
      media: [
        {
          type: "image",
          src: "assets/img/photodiode-wafer.jpg",
          caption: "Silicon wafer with patterned photodiode die"
        },
        {
          type: "image",
          src: "assets/img/photodiode-ellipsometer.jpg",
          caption: "Woollam α-SE ellipsometer used to measure oxide thickness"
        },
        {
          type: "image",
          src: "assets/img/photodiode-iv-curves.png",
          caption: "Measured I–V curves under different light sources (comparison device, Die 10): illuminated curves show photocurrent"
        },
        {
          type: "image",
          src: "assets/img/photodiode-process-flow.png",
          caption: "Simplified process flow: oxidation → lithography → boron implant → anneal → nitride → contacts → aluminum"
        },
        {
          type: "image",
          src: "assets/img/photodiode-tcad-structure.png",
          caption: "Final simulated device structure from Sentaurus SProcess (net active doping)"
        },
        {
          type: "image",
          src: "assets/img/photodiode-dopant-profile.png",
          caption: "Simulated boron profile before and after the 1100 °C anneal"
        }
      ],
      links: [
        {
          label: "Read the full lab paper (PDF)",
          url: "assets/papers/Yeh_Silicon_Photodiode_Paper.pdf"
        }
      ],
      tier: "selected",
      cardTags: [
        "Semiconductor Fab",
        "Cleanroom",
        "I–V Characterization",
        "TCAD"
      ],
      system: [
        [
          "Device:",
          "silicon p–n photodiode with a boron-implanted p region, oxide isolation, and aluminum contacts."
        ],
        [
          "Process:",
          "thermal oxidation → lithography → RIE → boron implant (off-site) → anneal → contact opening → aluminum."
        ],
        [
          "Simulation:",
          "Sentaurus SProcess for structure and doping, SDevice for dark I–V."
        ],
        [
          "Test setup:",
          "probe station with a Keysight B1500A SMU; calibrated reference photodiode and Thorlabs PM100D2 for optical power."
        ]
      ],
      implementation: [
        [
          "Process flow.",
          "Ran the cleanroom steps with industry-style wafer runsheets and a digital lab notebook."
        ],
        [
          "Thermal oxide.",
          "10 h dry oxidation at 1100 °C, verified by ellipsometry."
        ],
        [
          "TCAD model.",
          "Simulated the full process and compared 10 / 100 / 1000 keV implants (junction depth 2.14–3.61 µm)."
        ],
        [
          "Cost model.",
          "Built from tool rates and the runsheet: ≈ $2,055 per wafer."
        ]
      ],
      iteration: [
        {
          issue: "The oxide was completely etched away during RIE, leaving bare silicon.",
          cause: "The photoresist mask failed, most likely weak adhesion from an uneven or insufficient hard bake, made worse by etch time and plasma conditions.",
          fix: "Specified tighter hard-bake, descum, and RIE-time control for the next run.",
          result: "The wafer couldn't be finished within the semester, so I completed electrical and optical testing on comparison devices."
        },
        {
          issue: "Measured devices had low responsivity and unstable photocurrent, and one die behaved more like a Schottky-like contact than a p–n diode.",
          cause: "Contact quality, surface recombination, and process defects.",
          fix: "Compared the measurements with the ideal TCAD device to separate design limits from fabrication effects.",
          result: "Tied the performance gap to specific steps (etch, passivation, contacts) in the final report."
        }
      ],
      results: [
        "Oxide: 285.3 nm measured against a 300 nm target, within 5%.",
        "Responsivity peaked at 0.0226 A/W at 520 nm on a comparison die, far below the ideal λ/1240 limit. That gap is the evidence for the fabrication issues above.",
        "Ideal simulated structure: ≈ 4 fA dark current at −5 V."
      ],
      table: {
        caption: "Measured responsivity (comparison die) vs. the ideal limit at 100% quantum efficiency",
        head: [
          "Wavelength",
          "Measured (A/W)",
          "Ideal λ/1240 (A/W)"
        ],
        rows: [
          [
            "405 nm",
            "0.0112",
            "0.327"
          ],
          [
            "520 nm",
            "0.0226",
            "0.419"
          ],
          [
            "635 nm",
            "0.0130",
            "0.512"
          ]
        ]
      }
    },
    {
      id: "robot",
      title: "Autonomous Robot Car",
      subtitle: "ESE 205 · Raspberry Pi · Team of 2",
      date: "Sep 2024 – Dec 2024",
      icon: "robot",
      tags: [
        "PID Control",
        "Raspberry Pi",
        "Embedded Python",
        "Wheel Encoder",
        "Ultrasonic Sensing",
        "HSV Color Tracking",
        "PWM",
        "Servos",
        "FFT",
        "Step-Response Testing"
      ],
      summary: "Self-driving Raspberry Pi car with color tracking, ultrasonic stopping, and closed-loop PID speed control.",
      problem: "Hold a constant speed under load, follow a colored path, and stop before obstacles, with one Raspberry Pi running every sensor at once.",
      role: "Two-person project (ESE 205). We designed the control system, integrated the sensors, and ran the tuning and validation tests together.",
      highlights: [
        {
          value: "0.07 RPS",
          label: "Steady-state error under load"
        },
        {
          value: "11%",
          label: "Overshoot under load"
        },
        {
          value: "1.26 s",
          label: "Rise time to 3 RPS (no load)"
        },
        {
          value: "3 Hz",
          label: "FFT-confirmed wheel speed (3 RPS target)"
        }
      ],
      media: [
        {
          type: "video",
          src: "assets/video/robot-autonomous-run.mp4",
          teaser: "assets/video/robot-autonomous-run-teaser.mp4",
          poster: "assets/img/robot-timed-run.jpg",
          caption: "Timed autonomous run: following the blue tape down the hallway and stopping at the bin"
        },
        {
          type: "video",
          src: "assets/video/robot-camera-feed.mp4",
          poster: "assets/img/robot-camera-feed.jpg",
          caption: "Onboard camera view during color tracking: picking out the blue bin and blue tape lane, with servo/pin configuration streamed over SSH"
        },
        {
          type: "video",
          src: "assets/video/robot-motor-test.mp4",
          poster: "assets/img/robot-car.jpg",
          caption: "Color tracking: the camera and steering servos turn to follow a blue object"
        },
        {
          type: "image",
          src: "assets/img/robot-camera-flow.png",
          caption: "Camera steering loop: capture → HSV mask → centroid → servo angle"
        },
        {
          type: "image",
          src: "assets/img/robot-ultrasonic-flow.png",
          caption: "Ultrasonic loop: distance sets motor PWM and stops the car at a threshold"
        },
        {
          type: "image",
          src: "assets/img/robot-pwm-rps.png",
          caption: "Measured motor speed vs. PWM with linear fit"
        },
        {
          type: "image",
          src: "assets/img/robot-step-noload.png",
          caption: "Tuned step response to 3 RPS, stationary with no load (1.26 s rise, 0.3 RPS steady-state error)"
        },
        {
          type: "image",
          src: "assets/img/robot-step-loaded.png",
          caption: "Tuned step response to 3 RPS while driving under load (11% overshoot, 0.07 RPS steady-state error)"
        },
        {
          type: "image",
          src: "assets/img/robot-step-half-kp.png",
          caption: "Gain study: ½ Kp with Ki = 0 (slower rise, more steady-state error)"
        },
        {
          type: "image",
          src: "assets/img/robot-step-10x-kp.png",
          caption: "Gain study: 10× Kp with Ki = 0 (faster rise, large overshoot)"
        }
      ],
      links: [
        {
          label: "Read the full report (PDF)",
          url: "assets/papers/Yeh_Wu_Autonomous_Robot_Car_Report.pdf"
        }
      ],
      tier: "selected",
      cardTags: [
        "PID Control",
        "Embedded Python",
        "Sensor Feedback",
        "Signal Analysis"
      ],
      system: [
        [
          "Platform:",
          "Raspberry Pi with a power HAT, a DC drive motor and gearbox, and steering and camera servos."
        ],
        [
          "Sensors:",
          "camera, ultrasonic range sensor, and a photoresistor + LED wheel encoder."
        ],
        [
          "Control:",
          "PID speed loop on encoder feedback, camera-driven steering, and distance-scaled motor PWM."
        ],
        [
          "Software:",
          "Python with a non-blocking, counter-based task scheduler."
        ]
      ],
      implementation: [
        [
          "PID speed loop.",
          "Encoder sampled at 50 Hz and speed computed at 4 Hz, balancing responsiveness against CPU load."
        ],
        [
          "Color tracking.",
          "HSV mask → centroid → steering and camera servo angle every 70 ms, switching from blue to yellow targets."
        ],
        [
          "Ultrasonic stopping.",
          "Motor PWM scales down with distance, so the car slows smoothly and stops at a threshold."
        ],
        [
          "Scheduler.",
          "Replaced blocking sleep() calls so camera, ultrasonic, and keyboard tasks run concurrently."
        ]
      ],
      iteration: [
        {
          issue: "Speed had to hold at 3 RPS both on the bench and while driving under load.",
          cause: "Load and a start-up delay change the plant, so gains tuned on the stationary car weren't the best fit for the moving one.",
          fix: "Retuned for the loaded car (Kp 8, Ki 1, Kd 25), then ran a gain study: ½ Kp was sluggish with more steady-state error, and 10× Kp overshot.",
          result: "11% overshoot and 0.07 RPS steady-state error under load."
        },
        {
          issue: "The encoder signal's FFT showed a large peak near 6 Hz next to the expected 3 Hz.",
          cause: "Wheel wobble, room lighting, and an encoder LED that intermittently turned off.",
          fix: "Recalibrated before every run and identified the hardware fixes: a stiffer wheel mount, a reliable LED, and controlled lighting.",
          result: "The 3 Hz peak confirmed the controller held its target speed despite the noise."
        }
      ],
      results: [
        "Met every project objective: PID speed control, user-steered driving with automatic stopping, hallway navigation, and blue-to-yellow target tracking.",
        "Measured motor model: RPS ≈ 0.0276·PWM + 2.26."
      ],
      table: {
        caption: "Step response to a 3 RPS target",
        head: [
          "Condition",
          "Rise time",
          "Overshoot",
          "Steady-state error",
          "Kp / Ki / Kd"
        ],
        rows: [
          [
            "Stationary, no load",
            "1.26 s",
            "Minimal",
            "0.3 RPS",
            "8 / 0.5 / 0.5"
          ],
          [
            "Driving under load",
            "1.8 s*",
            "11%",
            "0.07 RPS",
            "8 / 1 / 25"
          ]
        ],
        note: "* includes a 1.5 s programmed start delay"
      }
    },
    {
      id: "vista",
      title: "VISTA Benchmark",
      subtitle: "Research · Under review at ICLR 2027",
      date: "2025 – 2026",
      icon: "vista",
      tags: [
        "Multimodal",
        "Egocentric",
        "Project Aria",
        "PyTorch",
        "Hugging Face",
        "VLM Evaluation",
        "Label Studio"
      ],
      summary: "Multimodal egocentric benchmark for assistive AI, captured on Meta Aria glasses and under review at ICLR 2027.",
      problem: "AI benchmarks test whether models can describe a scene, not whether they can guide a blind user through a task, and they ignore the audio, motion, and gaze data that smart glasses already capture.",
      role: "Research assistant at the Harvard Ophthalmology AI Lab: I built the dataset, trained and managed the annotators, and wrote the tooling. I ran an earlier pilot as independent research at WashU.",
      highlights: [
        {
          value: "997",
          label: "Multimodal egocentric samples"
        },
        {
          value: "5",
          label: "Synchronized sensor modalities"
        },
        {
          value: "3",
          label: "Annotation formats"
        },
        {
          value: "10",
          label: "Assistive task categories"
        }
      ],
      sections: [
        {
          title: "Earlier work: independent research pilot",
          meta: "ESE 4991 · Presented at WashU ESE Day · Spring 2026",
          text: "About six months before the ICLR submission, I ran my own RGB-only pilot of VISTA. It was less complete than the final benchmark, but it's where the core finding first showed up: models describe scenes well but give weak guidance.",
          highlights: [
            {
              value: "1,003",
              label: "Raw recordings (~700 annotated)"
            },
            {
              value: "8",
              label: "Annotators"
            },
            {
              value: "0.90",
              label: "Inter-annotator BERTScore (QA)"
            },
            {
              value: "3",
              label: "VLMs benchmarked"
            }
          ],
          bullets: [
            [
              "Annotation interface:",
              "custom Label Studio setup for scene, Q&A, and action-goal labels."
            ],
            [
              "Quality check:",
              "inter-annotator BERTScore of 0.90 (QA) and 0.88 (scene) on 30 overlapping clips."
            ],
            [
              "Benchmark pipeline:",
              "PyTorch + Hugging Face, scored with BERTScore, QA F1, and an LLM judge."
            ]
          ],
          table: {
            caption: "Pilot zero-shot results (RGB only; not the ICLR submission results)",
            head: [
              "Model",
              "Scene BERT",
              "Guide BERT",
              "QA F1",
              "Scene Judge",
              "Guide Judge"
            ],
            rows: [
              [
                "BLIP-2",
                "0.849",
                "0.833",
                "0.128",
                "2.49",
                "2.01"
              ],
              [
                "LLaVA-1.5",
                "0.861",
                "0.832",
                "0.280",
                "2.59",
                "2.25"
              ],
              [
                "Qwen-VL",
                "0.830",
                "0.817",
                "0.232",
                "2.79",
                "3.03"
              ]
            ]
          }
        }
      ],
      media: [
        {
          type: "image",
          src: "assets/img/vista-task-examples.jpg",
          fit: "top",
          caption: "Example assistive scenarios, the five Aria sensor streams (RGB, audio, IMU, SLAM, eye tracking), and scene / Q&A / action-guidance annotations"
        },
        {
          type: "image",
          src: "assets/img/vista-aria-sensors.png",
          fit: "contain",
          caption: "Meta Project Aria Gen 1 sensor layout (RGB, SLAM & eye-tracking cameras, 7 mics, IMUs, barometer, magnetometer) used for VISTA data collection. Diagram: Meta"
        },
        {
          type: "image",
          src: "assets/img/vista-ese-day-poster.jpg",
          caption: "My independent-research poster presented at WashU ESE Day (pilot, spring 2026)"
        },
        {
          type: "image",
          src: "assets/img/vista-pipeline.png",
          caption: "Pilot pipeline: Aria capture → video/audio/IMU processing → annotation → VLM benchmarking"
        },
        {
          type: "image",
          src: "assets/img/vista-pilot-similarity-qa.png",
          caption: "Pilot results: semantic similarity and QA F1 across three VLMs"
        },
        {
          type: "image",
          src: "assets/img/vista-pilot-llm-judge.png",
          caption: "Pilot results: LLM-judge usefulness ratings for scene descriptions and guidance"
        },
        {
          type: "image",
          src: "assets/img/vista-pilot-iaa.png",
          caption: "Pilot inter-annotator agreement (BERTScore and SBERT)"
        }
      ],
      links: [
        {
          label: "View code",
          url: "https://github.com/JoshYeh1/VISTA"
        }
      ],
      tier: "selected",
      cardTags: [
        "Multimodal AI",
        "Dataset Design",
        "Benchmarking",
        "PyTorch"
      ],
      system: [
        [
          "Capture:",
          "Meta Project Aria Gen 1 glasses: RGB, SLAM, and eye-tracking cameras, 7 microphones, and IMUs."
        ],
        [
          "Benchmark:",
          "997 samples with 5 synchronized modalities and 3 annotation formats, across 10 assistive task categories."
        ],
        [
          "Evaluation:",
          "zero-shot vision-language models plus a lightweight multimodal world-model baseline."
        ]
      ],
      implementation: [
        [
          "Dataset:",
          "vision-audio recordings on Meta Aria glasses across 10 assistive task categories."
        ],
        [
          "Annotation:",
          "guidelines and training for the annotator team in Label Studio."
        ],
        [
          "Tooling:",
          "annotation tools and benchmarking scripts, with data hosted on Hugging Face and GitHub."
        ]
      ],
      iteration: [
        {
          issue: "My ESE Day pilot evaluated models on RGB frames only.",
          cause: "Models described scenes well but gave weak guidance, and RGB alone threw away audio, motion, and gaze context.",
          fix: "The final benchmark adds all five synchronized modalities, three annotation formats, and a multimodal baseline.",
          result: "Submitted to ICLR 2027 and currently under review."
        }
      ],
      results: [
        "Pilot: models scored BERTScore 0.83–0.86 on scene description but at most 3.03 / 5 on guidance usefulness.",
        "Benchmark submitted to ICLR 2027 (under review)."
      ]
    },
    {
      id: "aria",
      title: "Meta Glasses AI Assistant",
      subtitle: "Real-time Assistive Eyewear",
      date: "May 2025 – Jun 2025",
      icon: "glasses",
      tags: [
        "Python",
        "Whisper",
        "Qwen VLM",
        "Flask",
        "GPU Inference"
      ],
      summary: "Wearable assistant on Meta's Aria glasses that speaks scene descriptions in under a second.",
      problem: "Blind and low-vision users need spoken descriptions of their surroundings fast enough to act on while moving.",
      role: "I built the end-to-end system: capture on the glasses, speech input, captioning, and spoken output.",
      media: [
        {
          type: "image",
          src: "assets/img/aria-workstation.jpg",
          caption: "Meta Project Aria glasses at the development workstation"
        },
        {
          type: "image",
          src: "assets/img/aria-live-capture.jpg",
          caption: "Live Aria RGB capture streamed to the laptop for VLM scene captioning"
        }
      ],
      links: [
        {
          label: "View code",
          url: "https://github.com/JoshYeh1/aria_ai_caption"
        }
      ],
      tier: "additional",
      cardTags: [],
      system: [
        [
          "Pipeline:",
          "Aria camera and audio → Flask server → Whisper (speech-to-text) → Qwen (vision-language) → text-to-speech."
        ]
      ],
      implementation: [
        [
          "End-to-end build.",
          "Capture, speech input, captioning, and spoken output integrated through one server."
        ]
      ],
      results: [
        "Cut captioning latency 40% with GPU inference tuning and image resizing, reaching sub-second scene descriptions."
      ]
    }
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
        "Evaluating cryogenic compatibility, mechanical stability, thermal load, and wiring strain for real-world integration."
      ]
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
        "Designed annotation tools and benchmarking scripts; hosted data via Hugging Face and GitHub."
      ],
      links: [
        {
          label: "Lab profile",
          url: "https://wang.hms.harvard.edu/team/joshua-yeh/"
        }
      ]
    },
    {
      role: "Electrical Engineering Grader",
      mark: "WU",
      logo: "assets/logos/washu.png",
      org: "Washington University in St. Louis",
      date: "Sep 2025 – Dec 2025",
      bullets: [
        "Graded assignments and exams for Introduction to Electrical and Electronic Circuits.",
        "Applied detailed rubrics to evaluate circuit analysis, design, and problem-solving accuracy."
      ]
    },
    {
      role: "Design & Construction Jr. Project Assistant",
      mark: "PU",
      logo: "assets/logos/pepperdine.png",
      org: "Pepperdine University",
      date: "2021 – 2024",
      bullets: [
        "Conducted audits of active construction projects to ensure compliance and progress tracking.",
        "Organized and streamlined file management systems, improving accessibility and efficiency."
      ]
    }
  ],
  skills: [
    {
      group: "Hardware & PCB",
      icon: "chip",
      items: [
        "EasyEDA",
        "PCB Design & Layout",
        "PCB Assembly / Rework",
        "Soldering",
        "Op-Amp / Analog Signal Conditioning",
        "PSpice",
        "Multisim"
      ]
    },
    {
      group: "Controls & Embedded",
      icon: "gear",
      items: [
        "PID Control",
        "Motion Control",
        "Stepper Motors & Drivers",
        "Arduino (C++)",
        "Raspberry Pi",
        "Embedded Systems",
        "SolidWorks"
      ]
    },
    {
      group: "Test & Instrumentation",
      icon: "scope",
      items: [
        "Oscilloscopes",
        "Multimeters",
        "Power Supplies",
        "Function Generators",
        "Keysight B1500A SMU",
        "Optical Power Meters",
        "SCPI Instrument Control",
        "Cleanroom Processing"
      ]
    },
    {
      group: "Integration & Validation",
      icon: "check",
      items: [
        "Requirements & Acceptance Criteria",
        "Test Planning",
        "Root-Cause Analysis",
        "Technical Documentation",
        "Runsheets & Lab Notebooks"
      ]
    },
    {
      group: "Programming & Simulation",
      icon: "code",
      items: [
        "Python",
        "C++ (Arduino)",
        "MATLAB",
        "R",
        "Sentaurus TCAD"
      ]
    },
    {
      group: "AI & Data",
      icon: "network",
      items: [
        "PyTorch",
        "Label Studio",
        "Hugging Face",
        "VLM Benchmarking"
      ]
    }
  ],
  education: [
    {
      school: "Washington University in St. Louis",
      mark: "WU",
      logo: "assets/logos/washu.png",
      place: "St. Louis, MO",
      date: "Aug 2024 – May 2027",
      degrees: [
        "B.S. Electrical Engineering",
        "M.Eng. Engineering Management"
      ]
    },
    {
      school: "Pepperdine University",
      mark: "PU",
      logo: "assets/logos/pepperdine.png",
      place: "Malibu, CA",
      date: "Jan 2021 – Apr 2024",
      degrees: [
        "B.S. Physics",
        "B.A. Natural Science"
      ]
    }
  ]
};
