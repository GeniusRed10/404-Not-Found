export interface Slide {
  image: string;
  alt: string;
  title?: string;
}

export const slides: Slide[] = [
  {
    image: "https://ext.same-assets.com/3346277874/1187352361.jpeg",
    alt: "Game art from multiple games available with PC Game Pass",
    title: "PC Game Pass"
  },
  {
    image: "https://ext.same-assets.com/3346277874/3556797955.jpeg",
    alt: "Microsoft Flight Simulator 2024",
    title: "Flight Simulator 2024"
  },
  {
    image: "https://source.unsplash.com/random/1920x1080/?racing-game",
    alt: "Racing game",
    title: "Racing Games"
  },
  {
    image: "https://source.unsplash.com/random/1920x1080/?adventure-game",
    alt: "Adventure game",
    title: "Adventure Games"
  },
  {
    image: "https://source.unsplash.com/random/1920x1080/?strategy-game",
    alt: "Strategy game",
    title: "Strategy Games"
  }
];
