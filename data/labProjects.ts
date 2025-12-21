export type LabProject = {
  id: string;
  label: string;
  url: string;
  group: "lightAndControl" | "immersiveDesign";
  tags?: string[];
};

export const labProjects: LabProject[] = [
  // Light & Control
  {
    id: "temple-of-light",
    label: "Temple of Light",
    url: "https://philolarte.notion.site/Temple-of-Light-11561f22995d80c1b2d6c21061c29ea5?pvs=74",
    group: "lightAndControl",
    tags: ["light", "installation", "ritual", "led", "interactive"],
  },
  {
    id: "simulate-synesthesia",
    label: "Simulate Synesthesia",
    url: "https://philolarte.notion.site/Simulate-Synesthesia-ff546fbf6f56418dbca50459093aede7",
    group: "lightAndControl",
    tags: ["audio", "visual", "senses", "experiential"],
  },
  {
    id: "dui-data-sequence",
    label: "DUI – A Data-Powered Sequence",
    url: "https://philolarte.notion.site/DUI-A-Sequence-11361f22995d80ef908ef1409e80588c",
    group: "lightAndControl",
    tags: ["data", "sequencing", "audio", "visual"],
  },
  {
    id: "sounds-of-starlight",
    label: "Sounds of Starlight",
    url: "https://philolarte.notion.site/Sounds-of-Starlight-13561f22995d80ed884ce517c61eaba5",
    group: "lightAndControl",
    tags: ["sound", "space", "light", "installation"],
  },
  {
    id: "scale-space-chaos",
    label: "Scale – Space chaos (LED art)",
    url: "https://www.notion.so/philolarte/Massive-LED-art-13561f22995d80008374e10f39436472",
    group: "lightAndControl",
    tags: ["led", "large scale", "art", "light"],
  },
  {
    id: "api-data-addressable-led",
    label: "API data and the Addressable LED",
    url: "https://philolarte.notion.site/API-data-the-Addressable-LED-14561f22995d803c8e5fed5548cbb4a6?pvs=4",
    group: "lightAndControl",
    tags: ["api", "data", "led", "visualization"],
  },

  // Immersive Design
  {
    id: "painting-the-future",
    label:
      "Painting the Future: Collaborative Play and AI-powered Creativity in an Interactive 3D World",
    url: "https://philolarte.notion.site/Painting-the-Future-Collaborative-Play-and-AI-Powered-Creativity-in-an-Interactive-3D-World-15b61f22995d800b8b7ffec0c00cb0e3?pvs=4",
    group: "immersiveDesign",
    tags: ["ai", "collaborative", "3d", "play", "creativity"],
  },
  {
    id: "peter-and-wendy",
    label: "Non-linear Storytelling: Peter & Wendy",
    url: "https://philolarte.notion.site/Non-linear-retelling-Peter-Wendy-19161f22995d80ee8974fefafb6cc419?pvs=4",
    group: "immersiveDesign",
    tags: ["storytelling", "non-linear", "immersive", "narrative"],
  },
  {
    id: "touchdesigner-particle-controller",
    label: "Custom particle controller for TouchDesigner",
    url: "https://philolarte.notion.site/TouchDesigner-Particle-Controller-13e61f22995d80f19231ce953a195f89?pvs=4",
    group: "immersiveDesign",
    tags: ["touchdesigner", "particles", "tooling", "visuals"],
  },
];

export const labProjectGroups = {
  lightAndControl: labProjects.filter((p) => p.group === "lightAndControl"),
  immersiveDesign: labProjects.filter((p) => p.group === "immersiveDesign"),
};
