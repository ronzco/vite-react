import HeroImage from "/assets/ronker.png";

const Image = {
  HeroImage,
};

export interface Tool {
  id: number;
  gambar: string;
  nama: string;
  ket: string;
  dad: string;
}

export interface Proyek {
  id: number;
  gambar: string;
  nama: string;
  desk: string;
  tools: string[];
  linkLive: string; // optional
  linkRepo: string; // optional
  dad: string;
}

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/codeigniter.svg";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/xampp.webp";

export const listTools: Tool[] = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "CodeIgniter",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
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
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Xampp",
    ket: "Database Management",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/project1.webp";
import Proyek2 from "/assets/proyek/project2.webp";
import Proyek3 from "/assets/proyek/project3.webp";
import Proyek4 from "/assets/proyek/project4.webp";
import Proyek5 from "/assets/proyek/project5.webp";
import Proyek6 from "/assets/proyek/project6.webp";

export const listProyek: Proyek[] = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Aplikasi Kalkulator WEB",
    desk: "Tugas Kuliah Membangun Aplikasi WEB Calculator",
    tools: ["HTML", "CSS", "Javascript"],
    linkLive: "https://ronzco.github.io/vite-react-calculator/",
    linkRepo: "https://github.com/ronzco/vite-react-calculator",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "GIS Pertanian",
    desk: "Project Tugas Akhir Kuliah masih dalam tahap Pengembangan",
    tools: ["HTML", "CSS", "AdminLTE", "PHP", "MySql", "Codeigniter"],
    linkLive: "https://ronzco.github.io/GIS-Pertanian/",
    linkRepo: "https://github.com/ronzco/GIS-Pertanian",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Landing Page Toko Online",
    desk: "Tugas Kuliah Ujian Akhir Semester 5 Mata Kuliah WEB Programming",
    tools: ["HTML", "JavaScript", "CSS"],
    linkLive: "https://ronzco.github.io/landing-page-toko-online/",
    linkRepo: "https://github.com/ronzco/landing-page-toko-online",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Split-Bill Aplications",
    desk: "Proyek Akhir Pelatihan Di CODEPOLITAN Membangun aplikasi spit bill berbasis web",
    tools: ["Vite", "ReactJS", "Bootstrap", "JavaScript"],
    linkLive: "https://ronzco.github.io/split-bill-app/",
    linkRepo: "https://github.com/ronzco/split-bill-app",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "WEB Catatan Harian",
    desk: "Tugas Kuliah Membangun Aplikasi WEB Catatan Harian",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    linkLive: "https://ronzco.github.io/catatan-harian/",
    linkRepo: "https://github.com/ronzco/catatan-harian",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Web Caffe Profile",
    desk: "Tugas Kuliah Membangun Aplikasi WEB Profile Perusahaan",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    linkLive: "https://ronzco.github.io/coffee-comp/",
    linkRepo: "https://github.com/ronzco/coffee-comp",
    dad: "600",
  },
];
