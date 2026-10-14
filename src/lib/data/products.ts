export interface CatalogProduct {
  id: string; name: string; category: "playsets" | "adventure-maps" | "rfid-cards";
  tagline: string; description: string; image?: string; imageWidth?: number; imageHeight?: number;
  highlights: string[]; steps: { title: string; description: string }[]; companion: string;
}
export const products: CatalogProduct[] = [
  { id: "beeboy", name: "Beeboy", category: "playsets", tagline: "A little friend for big curiosity.", description: "Meet Beeboy, an educational robot that brings directions and sequences to life through play. Explore a board mat together, try commands with RFID cards, and discover new paths along the way.", image: "/images/beeboy/beeboy-robot.png", imageWidth: 1570, imageHeight: 1002,
    highlights: ["Learn directions through hands-on play", "Explore sequences with RFID command cards", "Bring board mat adventures to life"],
    steps: [{title:"Choose a destination",description:"Pick a place to explore on the board mat."},{title:"Plan the commands",description:"Use RFID cards to give Beeboy directions."},{title:"Try and explore",description:"Watch the journey and try a different route together."}], companion: "Explore Beeboy together with a board mat and RFID command cards. Contact us for kit contents and availability." },
  { id: "forest-board-mat", name: "Forest Board Mat", category: "adventure-maps", tagline: "A new path around every corner.", description: "Explore a forest-themed grid with trees, rocks, mountains, and obstacles. Choose a destination and guide Beeboy through the map using a sequence of commands.", image: "/images/beeboy/board-mat.png", imageWidth: 968, imageHeight: 970,
    highlights:["A forest-themed play environment", "Grid spaces for planning a route", "Trees, rocks, and obstacles to explore"],
    steps:[{title:"Explore the map",description:"Look at the landmarks and choose where to go."},{title:"Plan a route",description:"Think about the directions Beeboy needs to follow."},{title:"Play together",description:"Try your commands with Beeboy on the board mat."}], companion:"Take forest adventures further with Beeboy and RFID cards. Contact our team for kit contents and availability." },
  { id: "rfid-command-cards", name: "RFID Command Cards", category: "rfid-cards", tagline: "Commands children can hold and play with.", description: "Give Beeboy commands using physical RFID cards. Explore direction cards and play controls as you plan a journey across the board mat.",
    highlights:["Direction cards: RIGHT, LEFT, and FORWARD", "Play controls: DELETE and GO", "Includes the 1 SCAN and 3 SCAN card types shown in the reference"],
    steps:[{title:"Choose your directions",description:"Explore the RIGHT, LEFT, and FORWARD cards."},{title:"Plan your journey",description:"Decide which directions Beeboy needs on the board mat."},{title:"Give Beeboy commands",description:"Use the RFID cards to play with Beeboy."}],companion:"RFID cards are used to control Beeboy. Contact our team for card instructions, package contents, and availability." },
];
export const catalogGroups = [
 { id:"playsets", label:"Beeboy", title:"Meet your new play companion.", description:"A little robot. A world of discovery." },
 { id:"adventure-maps", label:"Adventure Maps", title:"More places to explore with Beeboy.", description:"Discover board mats for playful journeys. Story-specific maps can be added as they become available." },
 { id:"rfid-cards", label:"RFID Cards", title:"Do more with command cards.", description:"Hands-on commands for your next Beeboy adventure." },
] as const;
