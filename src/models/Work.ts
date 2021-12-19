import Artist from "./Artist";

class Work {
  artist: string = "";
  name: string = "";
  start_year: number | null = 0;
  finish_year: number | null = 0;
  info: string | null = "";
  location: string | null = "";
  image: string | null = "";
}

export default Work;
