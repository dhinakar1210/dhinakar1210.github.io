import React from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "C:/Users/dhina/OneDrive/Desktop/portfolio/src/components/ui/Card";
import { Button } from "C:/Users/dhina/OneDrive/Desktop/portfolio/src/components/ui/Button";
import { Mail, Linkedin, Github, GraduationCap, Award } from "lucide-react";

const skillGroups = [
  { title: "CAD Modelling Tools", skills: ["Creo", "CATIA V6", "SolidWorks", "AutoCAD", "Siemens NX CAD", "P&ID Diagram"] },
  { title: "Simulation Tools", skills: ["1D Thermal Simulation", "Ansys Structural", "Ansys Fluent", "Abaqus", "COMSOL Multiphysics"] },
  { title: "Statistical Tools", skills: ["JMP", "Process Capability Analysis", "Key Performance Indices", "R Studio"] },
  { title: "Programming", skills: ["MATLAB", "R Studio", "Python"] },
  { title: "Reliability Tools", skills: ["Weibull", "MTBF", "8D Methodology", "DFMEA", "PFMEA", "Design of Experiments", "Hypothesis Testing"] },
  { title: "Other Skills", skills: ["DFSS", "Windchill", "Siemens Teamcenter", "QC Tools", "Benchmarking", "DFM", "PLC Programming", "Energy Plus", "PPAP", "Agile", "JIRA"] }
];

const experience = [
  {
    date: "Mar 2022 – Jun 2023",
    title: "Product Development Engineer",
    company: "Rane (Madras) Ltd., Chennai, India",
    bullets: [
      "Designed 3D models and drafted 2D drawings for steering systems across 15+ projects using Creo and CATIA, ensuring production feasibility, compliance with client requirements, and adherence to ASME Y14.5 GD&T standards.",
      "Headed Product Lifecycle Management, refining the Bill of Materials for over 20 projects, and accelerating Advanced Product Quality Planning with Cross-Functional Team (CFT) meetings, resulting in 15% faster prototype deliveries.",
      "Prepared over 40 technical documents, including Design Compliance Matrix, Design Failure Mode and Effect Analysis, MAPP, DSS, and Design Verification Plan & Report (DVP&R)."
    ]
  },
  {
    date: "Sep 2021 – Mar 2022",
    title: "Reliability Test Engineer",
    company: "Rane (Madras) Ltd., Chennai, India",
    bullets: [
      "Enhanced validation processes for steering components in New Product Development (NPD) projects, utilizing Weibull analysis and S-N curves to predict failure modes and boost component reliability.",
      "Managed validation of inner ball and outer ball joint of an export project from Nexteer Automotive and conducted NVH testing in the in-house facility, saving 50% of test time.",
      "Implemented 8D methodology in root cause analysis and utilized quality control tools to resolve inner tie rod design issues, resulting in a 30% improvement in product reliability."
    ]
  },
  {
    date: "May 2019 – Sep 2019",
    title: "Engineering Intern",
    company: "Naaga Engineering, Chennai, India",
    bullets: [
      "Engineered fixtures using SolidWorks for fitting bike forks of diverse sizes in a single hydraulic press by incorporating Poka‑Yoke techniques, reducing die refitting time by 40%.",
      "Facilitated process capability analysis and PFMEA, creating over 5 Standard Operating Procedures (SOPs) to standardize the new production process for fork manufacturing.",
      "Resolved daily manufacturing challenges and executed Engineering Change Orders (ECO), identifying and eliminating waste to enhance productivity."
    ]
  }
];

const certifications = [
  "Six Sigma Green Belt (AIGPE)",
  "Industrial Automation & Robotics (PLC Programming) – MSME",
  "Professional Product Design & Analysis – NSDC"
];

const activities = [
  "Represented ASU at Formula Imperial 2021; streamlined steering design for a 15% performance boost."
];

const projects = [
  {
    title: "Energy Efficiency & Peak Load Reduction Through PCM Integration",
    bullets: [
      "Modeled Na₂SO₄·10H₂O as a phase change material for HVAC thermal energy storage using MATLAB and Python simulations.",
      "Conducted EnergyPlus simulations to quantify peak hourly demand reduction and optimized interior temperature stability.",
      "Demonstrated sustainable building energy management by reducing peak load and saving 346 kWh."
    ],
    img: "<IMG_PCM_HVAC>"
  },
  {
    title: "Rapid Prototyping in Millifluidics",
    bullets: [
      "Investigated millifluidic channel geometries with ANSYS Fluent to improve mixing efficiency for biomedical applications.",
      "Compared straight vs. bellowed channel performance through computational fluid dynamics analysis.",
      "Fabricated prototypes via 3D printing, laser cutting, and soft lithography for validation."
    ],
    img: "<IMG_MILLIFLUIDICS>"
  },
  {
    title: "Design Optimization & CFD",
    bullets: [
      "Simulated buoyancy-driven multiphase flows and temperature distributions in ANSYS Fluent for heat transfer studies.",
      "Analyzed vortex shedding, lift-drag forces, and compressible flow on asymmetric geometries under varied gravity.",
      "Utilized modal and thermal analyses to validate aerodynamic performance improvements."
    ],
    img: "<IMG_CFD_OPT>"
  },
  {
    title: "Finite Element Analysis of Porosity Impact on EV Battery Welds",
    bullets: [
      "Developed MATLAB algorithms to model heat generation from pores and optimized weld geometry for EV battery cells.",
      "Performed finite element simulations to identify thermal hotspots affecting weld integrity.",
      "Correlated porosity distribution with structural performance to inform design guidelines."
    ],
    img: "<IMG_FEA_WELDS>"
  },
  {
    title: "DOE Analysis for Heat Sink Enhancement",
    bullets: [
      "Led 30 design of experiments runs using JMP and Gaussian Process I-optimal method to optimize heat sink fin parameters.",
      "Identified key geometric factors influencing thermal efficiency and built a predictive model with R² = 0.80.",
      "Validated energy savings of 1% through PCM-integrated ceiling simulations in MATLAB and EnergyPlus."
    ],
    img: "<IMG_HEATSINK>"
  },
  {
    title: "Modeling Vehicle Fuel Economy Using Regression Analysis",
    bullets: [
      "Constructed multiple linear regression in R to predict vehicle MPG based on horsepower, weight, and cylinder count.",
      "Performed hypothesis testing and VIF analysis to validate model assumptions and predictor significance.",
      "Visualized model insights with ggplot2 for stakeholder decision-making."
    ],
    img: "<IMG_FUEL_ECON>"
  },
  {
    title: "Topology Optimization of Brake Disc & Airfoil",
    bullets: [
      "Achieved a 34.14% reduction in brake disc volume and 33.79% decrease in maximum stress using ANSYS topology optimization.",
      "Executed airfoil design optimization to deliver an 8.34% increase in aerodynamic efficiency and 4.17% reduction in drag.",
      "Combined structural, modal, and thermal analyses to validate performance gains."
    ],
    img: "<IMG_TOPOLOGY>"
  },
  {
    title: "Design & FEA of 3D Printed Space Dust Collector",
    bullets: [
      "Developed theoretical 3D models in SolidWorks to assess cellulose nanocrystal incorporation for space dust collection.",
      "Conducted ANSYS CFD simulations to analyze airflow dynamics and particle tracing efficiency.",
      "Identified potential improvements for eco-friendly aerospace filtration technologies."
    ],
    img: "<IMG_SPACE_DUST>"
  },
  {
    title: "Stabilization of Inverted Pendulum",
    bullets: [
      "Implemented a three-layer feedforward neural network controller in Python to stabilize an inverted pendulum system.",
      "Created a simulation class to update system state dynamically based on neural network outputs.",
      "Optimized controller by minimizing mean squared error through a custom Optimize class for precise upright control."
    ],
    img: "<IMG_PENDULUM>"
  },
  {
    title: "Fibre Reinforced Bio Polymer Material",
    bullets: [
      "Formulated epoxy composites with waste vegetable powder filler and studied static/dynamic mechanical properties.",
      "Performed flexural, impact, and tensile strength tests to evaluate composite performance.",
      "Determined optimal biopolymer composition balancing eco-friendly characteristics with mechanical strength."
    ],
    img: "<IMG_BIOPOLYMER>"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E4053] to-[#AAB7B8] text-white scroll-smooth">
      {/* Header Section */}
      <section id="header" className="px-6 md:px-16 py-16 flex flex-col md:flex-row items-start md:items-center bg-black/60 backdrop-blur-sm">
  {/* Left: Text */}

  <div className="md:flex-1">
    <h1 className="text-6xl font-bold text-white whitespace-nowrap">Dhinakar Venkatagiri</h1>
    <h2 className="mt-2 text-xl text-white/80">Master of Science, Mechanical Engineering</h2>
    <p className="mt-4 text-white/90 max-w-lg">Mechanical engineering professional specializing in product development, reliability testing, and engineering analysis. Experienced in CAD modeling, simulation, and process optimization.</p>
    <div className="mt-6 flex items-center space-x-6 text-white">
      <a href="mailto:dhinakargiri@gmail.com" className="hover:text-[#F1C40F]"><Mail size={24} /></a>
      <a href="https://linkedin.com/in/dhinakar-venkatagiri" target="_blank" className="hover:text-[#F1C40F]" rel="noopener noreferrer" ><Linkedin size={24} /></a>
      <a href="https://Github.com/DhinakarVenkatagiri/Des_Op" target="_blank" className="hover:text-[#F1C40F]" rel="noopener noreferrer"><Github size={24} /></a>
      <Button className="bg-[#F1C40F] text-black px-6 py-3 rounded-lg hover:bg-[#DACE84] transition">
        Download Resume
      </Button>
    </div>
  </div>
  {/* Right: Profile Photo */}
  <div className="mt-8 md:mt-0 md:ml-12">
    <div className="w-48 h-48 bg-[#DACE84]/20 rounded-full border-4 border-white/20"></div>
  </div>
</section>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-md py-3">
        <ul className="flex justify-center space-x-8 text-white font-medium">
          {['Education','Skills','Experience','Projects','Certifications','Activities'].map(sec => (
            <li key={sec} className="hover:text-[#F1C40F]"><a href={`#${sec.toLowerCase()}`}>{sec}</a></li>
          ))}
        </ul>
      </nav>
      {/* Main Content */}
      <div className="px-6 md:px-16 space-y-20 py-12">
        {/* Education */}
        <section id="education" className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon:<GraduationCap className="text-[#F1C40F]" />, title:"Master of Science, Mechanical Engineering", school:"Arizona State University, Tempe", gpa:"4.00/4.00", date:"May 2025", courses:"Finite Element Analysis, Design of Experiments, Regression Analysis, Design Optimization, Battery Materials Science and Engineering, Computational Fluid Dynamics, Bio-MEMS, HVAC systems, Fundamental of Semiconductor Packaging (INTEL), Micro Nano Additive Manufacturing" },
              { icon:<GraduationCap className="text-[#F1C40F]" />, title:"Bachelor of Engineering, Mechanical Engineering", school:"Anna University, Chennai, India", gpa:"3.70/4.00", date:"May 2021", courses:"Kinematics and Dynamic of Machinery, Strength of Materials, Design of Machine Elements, Heat Transfer, Stress Analysis, Metrology and Measurements, Total Qualtiy Management" }
            ].map((e,i)=>(
              <Card key={i} className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 hover:bg-white/30 transition">
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">{e.icon}<h3 className="text-xl font-semibold text-white">{e.title}</h3></div>
                  <p className="text-white/90">{e.school}</p>
                  <p className="text-white/90"><strong>GPA:</strong> {e.gpa}</p>
                  <p className="text-white/90 mb-3">{e.date}</p>
                  <p className="text-white/80 text-sm"><strong>Relevant Coursework:</strong> {e.courses}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Skills */}
        <section id="skills" className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((g,i)=>(
              <Card key={i} className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 hover:bg-white/30 transition">
                <CardContent>
                  <h3 className="text-lg font-semibold text-white mb-3">{g.title}</h3>
                  <div className="flex flex-wrap gap-3">{g.skills.map((s,j)=><span key={j} className="px-3 py-1 bg-black/40 rounded-full text-white text-sm hover:bg-[#F1C40F] hover:text-black transition">{s}</span>)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Experience */}
        <section id="experience" className="animate-fade-in">
  <h2 className="text-3xl font-bold mb-6 text-white text-center">Work Experience</h2>
  <div className="grid grid-cols-1 gap-8">
    {experience.map((e,i)=>(
      <Card key={i} className="bg-white/20 backdrop-blur-lg p-6 rounded-lg hover:bg-white/30 transition">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-white">{e.title}</h3>
            <p className="text-white/90 mt-1">{e.company}</p>
          </div>
          <p className="text-white/90 font-medium">{e.date}</p>
        </div>
        <ul className="list-disc pl-5 mt-4 text-white/90 space-y-2">
          {e.bullets.map((b,j)=><li key={j}>{b}</li>)}
        </ul>
      </Card>
    ))}
  </div>
</section>
        {/* Projects */}
        <section id="projects" className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p,i)=>(
              <Card key={i} className="bg-white/20 backdrop-blur-lg border border-white/30 overflow-hidden hover:scale-105 transition">
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                <CardContent>
                  <h3 className="text-xl font-semibold text-white mb-4">{p.title}</h3>
                  <ul className="list-disc pl-5 text-white/90">{p.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Certifications */}
        <section id="certifications" className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((c,i)=>(
              <Card key={i} className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 hover:bg-white/30 transition">
                <CardContent>
                  <Award className="text-[#F1C40F] mb-2" />
                  <p className="text-white/90">{c}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Activities */}
        <section id="activities" className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Activities & Leadership</h2>
          <Card className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 hover:bg-white/30 transition">
            <CardContent>
              <ul className="list-disc pl-5 text-white/90">{activities.map((a,i)=><li key={i}>{a}</li>)}</ul>
            </CardContent>
          </Card>
        </section>
        {/* Contact */}
        <section id="contact" className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Contact Me</h2>
          <p className="text-center text-gray-200 mb-4">Get in Touch</p>
          <div className="flex justify-center">
            <Card className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 flex items-center space-x-8 hover:bg-white/30 transition">
              <a href="mailto:dhinakargiri@gmail.com" className="flex items-center space-x-2 text-white hover:text-[#F1C40F]"><Mail size={20} /><span>dhinakargiri@gmail.com</span></a>
              <a href="https://linkedin.com/in/dhinakar-venkatagiri" target="_blank" className="flex items-center space-x-2 text-white hover:text-[#F1C40F]" rel="noopener noreferrer"><Linkedin size={20} /><span>Linkedin</span></a>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
