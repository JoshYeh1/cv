/* =========================================================================
   SITE CONTENT: edit this file to update the website.
   -------------------------------------------------------------------------
   stats          Homepage metric row (each links to a project page).
   projects[]     Case studies. `tier` sets homepage placement:
                    "featured" (large card), "selected" (grid), "additional" (small row).
                  cardTags: 3–5 tags for the homepage card; tags: full list on the project page.
                  problem / role: short paragraphs.
                  system: [label, value] rows shown as a spec list.
                  implementation: bullets; [lead, detail] renders a bold lead-in.
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
        "Closed-Loop Control",
        "Adaptive Jacobian",
        "Motion Control",
        "Embedded C++ (Arduino)",
        "Stepper Motors",
        "DRV8825",
        "Coupled Kinematics",
        "SCPI",
        "EEPROM",
        "3-Axis Hall Sensors",
        "Op-Amp Signal Conditioning",
        "PCB Design",
        "Helmholtz Coils",
        "MATLAB",
        "Sensor Calibration",
        "Acceptance Testing"
      ],
      summary: "Two-axis motion control with closed-loop Hall-sensor feedback, for rotating graphene samples inside a dilution refrigerator.",
      problem: "Rotate a graphene sample to any angle in a strong magnetic field, at millikelvin temperatures, without adding heat or twisting its wiring.",
      role: "Software & systems integration lead. I own the firmware, kinematics, and closed loop, and designed the Hall-amp PCB. Capstone (3-person team) → summer 2026 research with Maddie Cope.",
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
          value: "1000×",
          label: "Hall-signal gain, per axis"
        },
        {
          value: "2° / 4°",
          label: "θ / φ closed-loop tolerance, Hall-verified"
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
          src: "assets/img/gonio-hall-amp-two-stage.png",
          caption: "Two-stage Hall amplifier: difference amp (1000× gain) into a tunable offset summing stage, one per axis"
        },
        {
          type: "image",
          src: "assets/img/gonio-cryo-model.jpg",
          caption: "Half-size, gold-plated goniometer built for the dilution refrigerator"
        },
        {
          type: "image",
          src: "assets/img/gonio-belt-upgrade.jpg",
          caption: "Prototype revision: Kevlar strings and springs replaced with bearings and belts to stop slippage",
          more: true
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
          caption: "Capstone-era differential amplifier (simulation)",
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
        "Closed-Loop Control",
        "Embedded C++",
        "Analog PCB Design"
      ],
      system: [
        [
          "Mechanical",
          "Strut frame, belt drive, bevel-gear 2-axis stage"
        ],
        [
          "Actuation",
          "2 steppers · DRV8825 · 1/32 microstepping"
        ],
        [
          "Sensing",
          "3-axis HE244 Hall sensors · 1000× two-stage amp"
        ],
        [
          "Control",
          "Arduino C++ · SCPI · adaptive Jacobian closed loop"
        ],
        [
          "Test field",
          "Helmholtz coils for a uniform field"
        ]
      ],
      implementation: [
        [
          "Coupled kinematics:",
          "α = ψ, β = ψ + ω through the gearbox."
        ],
        [
          "Closed-loop orientation:",
          "Hall field vector → θ/φ → inverse-Jacobian correction, verified after every move."
        ],
        [
          "Adaptive Jacobian:",
          "learns from good moves, rolls back bad ones, saves to EEPROM."
        ],
        [
          "Hall signal chain:",
          "difference amp + offset stage per axis, on my PCB."
        ],
        [
          "Firmware:",
          "coordinated moves, accel ramps, homing, SCPI, power-loss recovery."
        ]
      ],
      iteration: [
        {
          issue: "Stage didn't follow commanded moves",
          cause: "Kevlar strings slipping on axles",
          fix: "Switched to bearings + belts",
          result: "±1° repeatable, no drift"
        },
        {
          issue: "Hall PCB V1 saturated at the ±5 V rails",
          cause: "Single-5 V-supply redesign",
          fix: "V2: ±10 V rails, 1 MΩ gain",
          result: "Clean, higher-resolution signal"
        },
        {
          issue: "Sweep errors up to ±30–40°",
          cause: "Non-uniform field, sensor tilt, 2× Y-gain mismatch",
          fix: "Helmholtz coils, matched gains, tilt correction",
          result: "Consistent 3-axis readings"
        },
        {
          issue: "Fixed model couldn't steer everywhere",
          cause: "φ undefined near poles; response varies",
          fix: "Adaptive Jacobian + φ-sweep recovery",
          result: "Hall-verified θ 2° / φ 4°"
        }
      ],
      results: [
        "Passed acceptance: 360° both axes, ±1° repeatable, stable long runs.",
        "Closed loop drives to a Hall-measured θ / φ target and verifies it.",
        "Next: the gold-plated stage for the dilution fridge."
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
      problem: "Take a bare silicon wafer to a working photodiode, then measure how well it converts light to current.",
      role: "Solo lab project (ESE 4361): process flow and runsheets, TCAD model, device testing, and the report.",
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
          "Device",
          "Si p–n junction · boron-implanted p region · Al contacts"
        ],
        [
          "Process",
          "Oxidation → litho → RIE → implant → anneal → metal"
        ],
        [
          "Simulation",
          "Sentaurus SProcess + SDevice"
        ],
        [
          "Test",
          "Probe station · Keysight B1500A · Thorlabs PM100D2"
        ]
      ],
      implementation: [
        [
          "Cleanroom process:",
          "ran each step with wafer runsheets."
        ],
        [
          "Thermal oxide:",
          "10 h dry oxidation at 1100 °C."
        ],
        [
          "TCAD:",
          "compared 10 / 100 / 1000 keV implants."
        ],
        [
          "Cost model:",
          "≈ $2,055 per wafer, $4.11 per diode."
        ]
      ],
      iteration: [
        {
          issue: "Oxide fully etched away in RIE",
          cause: "Photoresist adhesion / weak hard bake",
          fix: "Tighter bake, descum, etch-time control",
          result: "Finished testing on comparison dies"
        },
        {
          issue: "Low, unstable responsivity",
          cause: "Contacts, surface recombination, defects",
          fix: "Compared against the ideal TCAD device",
          result: "Gap traced to etch, passivation, contacts"
        }
      ],
      results: [
        "Oxide: 285 nm vs. a 300 nm target (within 5%).",
        "Responsivity sits well below the ideal limit, consistent with the fab issues above."
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
      problem: "Hold 3 RPS under load, follow a colored path, and stop before obstacles, all on one Raspberry Pi.",
      role: "Two-person project (ESE 205). We did the control design, sensor integration, tuning, and testing together.",
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
          "Platform",
          "Raspberry Pi · DC drive motor · steering + camera servos"
        ],
        [
          "Sensors",
          "Camera · ultrasonic · photoresistor wheel encoder"
        ],
        [
          "Control",
          "PID speed loop · vision steering · distance-scaled PWM"
        ],
        [
          "Software",
          "Python · non-blocking task scheduler"
        ]
      ],
      implementation: [
        [
          "PID loop:",
          "50 Hz encoder sampling, 4 Hz speed updates."
        ],
        [
          "Color tracking:",
          "HSV centroid → servo angle every 70 ms."
        ],
        [
          "Ultrasonic stop:",
          "PWM scales down with distance."
        ],
        [
          "Scheduler:",
          "camera, sensor, and input tasks run concurrently."
        ]
      ],
      iteration: [
        {
          issue: "Bench gains didn't fit the moving car",
          cause: "Load + start delay change the plant",
          fix: "Retuned (Kp 8 · Ki 1 · Kd 25), gain study",
          result: "11% overshoot, 0.07 RPS error"
        },
        {
          issue: "Extra 6 Hz peak in encoder FFT",
          cause: "Wheel wobble, lighting, flaky encoder LED",
          fix: "Recalibrated each run; isolated hardware fixes",
          result: "3 Hz target confirmed"
        }
      ],
      results: [
        "Met every objective: speed control, auto-stop, hallway navigation, and target tracking."
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
      problem: "Benchmarks check whether AI can describe a scene, not whether it can guide a blind user, and they ignore audio, motion, and gaze.",
      role: "Research assistant at the Harvard Ophthalmology AI Lab: built the dataset, led the annotators, and wrote the tooling.",
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
          text: "My RGB-only pilot, six months before the ICLR submission, is where the core finding first showed up.",
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
              "Annotation:",
              "custom Label Studio interface."
            ],
            [
              "Quality:",
              "inter-annotator BERTScore 0.90 (QA), 0.88 (scene)."
            ],
            [
              "Pipeline:",
              "PyTorch + Hugging Face; BERTScore, QA F1, LLM judge."
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
          "Capture",
          "Meta Aria Gen 1 · RGB, SLAM, eye-tracking cameras · 7 mics · IMUs"
        ],
        [
          "Benchmark",
          "997 samples · 5 modalities · 10 task categories"
        ],
        [
          "Evaluation",
          "Zero-shot VLMs + multimodal baseline"
        ]
      ],
      implementation: [
        [
          "Dataset:",
          "egocentric recordings across 10 assistive tasks."
        ],
        [
          "Annotation:",
          "guidelines and training in Label Studio."
        ],
        [
          "Tooling:",
          "benchmark scripts; data on Hugging Face + GitHub."
        ]
      ],
      iteration: [
        {
          issue: "Pilot evaluated RGB frames only",
          cause: "Missed audio, motion, and gaze context",
          fix: "Final benchmark uses all 5 modalities",
          result: "Under review at ICLR 2027"
        }
      ],
      results: [
        "Pilot: strong scene description (BERTScore 0.83–0.86), weak guidance (≤ 3.03 / 5)."
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
      problem: "Give blind and low-vision users spoken scene descriptions fast enough to act on while moving.",
      role: "I built the end-to-end system: capture, speech input, captioning, and spoken output.",
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
          "Pipeline",
          "Aria camera + audio → Flask → Whisper → Qwen VLM → TTS"
        ]
      ],
      implementation: [
        [
          "End-to-end build:",
          "one server ties capture, captioning, and speech together."
        ]
      ],
      results: [
        "40% faster captioning (GPU tuning + image resizing), under 1 s end to end."
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
        "Continuing development of a motorized two-axis goniometer for graphene experiments.",
        "Built closed-loop orientation control from 3-axis Hall-sensor feedback (adaptive Jacobian, Hall-verified moves).",
        "Calibrating against a Helmholtz-coil field and evaluating cryogenic compatibility, thermal load, and wiring strain."
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
