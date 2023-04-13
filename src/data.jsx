import Katie from "../src/images/katie.jpg";
import Wedding from "../src/images/wedding.jpg";
import Bike from "../src/images/bike.jpg";

 export default [
  {
    id: 1,
    title: "Life lessons with kaytie zafer",
    description:
      'I will share with you what i call "positively Imopactful moments of  Dissapointement." Throughout my career, many of the heighest moments only come after and losses But learning from those difficult moments is what gave me the ability above them and reach my goals',
    price: 136,
    coverImg: `${Katie}`,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
  },

  {
    id: 2,
    title: "Learn Wedding Photography",
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple memories that'll last a lifetime",
    price: 125,
    coverImg: `${Wedding}`,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
  },

  {
    id: 3,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet  new friends conquering rugged terrain on your mountain bike. (Bike provided)",
    price: 50,
    coverImg: `${Bike}`,
    stats: {
      rating: 4.5,
      reviewCount: 25,
    },
    location: "Online",
    openSpots: 2,
  },

];
