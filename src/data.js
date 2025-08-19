import HeroImage from "/assets/saya2-removebg-preview.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/Laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/CodeIgniter.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/CSS3.png";
import Tools11 from "/assets/tools/figma.png";
import html from "/assets/tools/HTML5.png";
import php from "/assets/tools/PHP.png";
import mysql from "/assets/tools/MySQL-.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: html,
    nama: "HTML",
    ket: "Markup Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools10,
    nama: "CSS",
    ket: "Style Sheet Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: php,
    nama: "PHP",
    ket: "Programming Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Codeigniter 4",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools2,
    nama: "ReactJS",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Repository",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design",
    dad: "1200",
  },
  {
    id: 13,
    gambar: mysql,
    nama: "MySQL",
    ket: "Database",
    dad: "1300",
  },

];

import dikacell from "/assets/proyek/dikacell.png";
import akcell from "/assets/proyek/akcell.png";

export const listProyek = [
  {
    id: 1,
    gambar: dikacell,
    nama: "Website E-Commerce Dika Cell",
    tools: ["Laravel", "Filament", "TailwindCSS"],
    link: "https://dikacell.zya.me",
    dad: "200",
  },
  {
    id: 2,
    gambar: akcell,
    nama: "Website Dashboard Ak Cell",
    tools: ["CodeIgniter 4", "Bootstrap"],
    link: "http://akcell.zya.me",
    dad: "300",
  },
];
