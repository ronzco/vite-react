declare module "./data" {
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
    dad: string;
  }

  export const listTools: Tool[];
  export const listProyek: Proyek[];
  const Image: {
    HeroImage: string;
  };
  export default Image;
}
