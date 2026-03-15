export interface Movie {
  id: string;
  title: string;
  teluguTitle: string;
  year: number;
  genre: string[];
  rating: number;
  votes: number;
  views: number;
  poster: string;
  backdrop: string;
  trailer: string;
  description: string;
  director: string;
  cast: string[];
  duration: string;
  language: string;
  isPinned?: boolean;
  matchScore?: number;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "RRR",
    teluguTitle: "ఆర్ఆర్ఆర్",
    year: 2022,
    genre: ["Action", "Drama", "Period"],
    rating: 8.0,
    votes: 234500,
    views: 1890000,
    poster: "https://image.tmdb.org/t/p/original/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/i0Y0wP8H6SRgjr6QmuwbtQbS24D.jpg",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    director: "S.S. Rajamouli",
    cast: ["Ram Charan", "N.T. Rama Rao Jr.", "Ajay Devgn", "Alia Bhatt"],
    duration: "3h 7min",
    language: "Telugu",
    isPinned: true,
    matchScore: 98,
  },
  {
    id: "2",
    title: "Baahubali 2: The Conclusion",
    teluguTitle: "బాహుబలి 2: ద కన్‌క్లూజన్",
    year: 2017,
    genre: ["Action", "Drama", "Fantasy"],
    rating: 8.2,
    votes: 198000,
    views: 2450000,
    poster: "https://image.tmdb.org/t/p/original/21sC2assImQIYCEDA84Qh9d1RsK.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/whNjsTOUVg2lZLCKgGhnACnmV8E.jpg",
    trailer: "https://www.youtube.com/embed/G62HrubdD6o",
    description: "When Shivudu, the son of Baahubali, learns about his heritage, he begins to look for answers. His story is intertwined with past events that unfold the mystery.",
    director: "S.S. Rajamouli",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
    duration: "2h 47min",
    language: "Telugu",
    isPinned: true,
    matchScore: 95,
  },
  {
    id: "3",
    title: "Pushpa: The Rise",
    teluguTitle: "పుష్ప: ది రైజ్",
    year: 2021,
    genre: ["Action", "Thriller", "Drama"],
    rating: 7.6,
    votes: 178000,
    views: 1560000,
    poster: "https://image.tmdb.org/t/p/original/h6Pd89ngvl9quPVsx3KoJlQsvk9.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9O792sn09697RTo6Hc6xsblurOf.jpg",
    trailer: "https://www.youtube.com/embed/Q1NKMPhP8PY",
    description: "A laborer rises through the ranks of a red sandalwood smuggling syndicate, making powerful enemies in the process.",
    director: "Sukumar",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
    duration: "2h 59min",
    language: "Telugu",
    matchScore: 92,
  },
  {
    id: "4",
    title: "Eega",
    teluguTitle: "ఈగ",
    year: 2012,
    genre: ["Fantasy", "Romance", "Thriller"],
    rating: 7.7,
    votes: 45000,
    views: 890000,
    poster: "https://image.tmdb.org/t/p/original/4Q5sQPJktfgXUhUS1kygGB4FUGZ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xbCPJejbJgRIuOwUzJqcBUjCbFB.jpg",
    trailer: "https://www.youtube.com/embed/mP10bJEGeVs",
    description: "A murdered man is reincarnated as a housefly and seeks to avenge his death.",
    director: "S.S. Rajamouli",
    cast: ["Nani", "Samantha", "Sudeep"],
    duration: "2h 11min",
    language: "Telugu",
    matchScore: 88,
  },
  {
    id: "5",
    title: "Ala Vaikunthapurramuloo",
    teluguTitle: "అల వైకుంఠపురములో",
    year: 2020,
    genre: ["Action", "Comedy", "Drama"],
    rating: 7.3,
    votes: 67000,
    views: 1230000,
    poster: "https://image.tmdb.org/t/p/original/2rzORJaegE2bbKNVkQXbZCeV0BP.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5SDMPORslLXaYPx7S1kRqsBJYI3.jpg",
    trailer: "https://www.youtube.com/embed/BVqoXJH4YI4",
    description: "Bantu grows up feeling unwanted by his father. One day he discovers a shocking family secret.",
    director: "Trivikram Srinivas",
    cast: ["Allu Arjun", "Pooja Hegde", "Tabu"],
    duration: "2h 46min",
    language: "Telugu",
    matchScore: 85,
  },
  {
    id: "6",
    title: "Jersey",
    teluguTitle: "జెర్సీ",
    year: 2019,
    genre: ["Drama", "Sports"],
    rating: 8.0,
    votes: 52000,
    views: 780000,
    poster: "https://image.tmdb.org/t/p/original/bU9q9yVtxeBiC0Do27CekHXNE6D.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/53CsGhbXKhmzcOQntz7Qs0whQ6g.jpg",
    trailer: "https://www.youtube.com/embed/t2YD-U0jI-Q",
    description: "A failed cricketer decides to fulfill his dream of playing for India at the age of 36.",
    director: "Gowtam Tinnanuri",
    cast: ["Nani", "Shraddha Srinath"],
    duration: "2h 40min",
    language: "Telugu",
    matchScore: 90,
  },
  {
    id: "7",
    title: "Arjun Reddy",
    teluguTitle: "అర్జున్ రెడ్డి",
    year: 2017,
    genre: ["Drama", "Romance"],
    rating: 7.9,
    votes: 98000,
    views: 1450000,
    poster: "https://image.tmdb.org/t/p/original/kHubDgL59I5hCn7ccBYvU7bKY1r.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/qYC0KuTeAZHObjzO7xFVDr7YBuY.jpg",
    trailer: "https://www.youtube.com/embed/VSV3RLihlTg",
    description: "A short-tempered house surgeon gets into a self-destructive mode after his girlfriend is forced to marry another person.",
    director: "Sandeep Reddy Vanga",
    cast: ["Vijay Deverakonda", "Shalini Pandey"],
    duration: "3h 7min",
    language: "Telugu",
    matchScore: 87,
  },
  {
    id: "8",
    title: "Rangasthalam",
    teluguTitle: "రంగస్థలం",
    year: 2018,
    genre: ["Action", "Drama", "Period"],
    rating: 7.8,
    votes: 73000,
    views: 1100000,
    poster: "https://image.tmdb.org/t/p/original/yiEzDgBBFC25Zd6z0r7sMngn5vr.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/zV6VeYIJNPp2JDWQwylKaPvzIjp.jpg",
    trailer: "https://www.youtube.com/embed/twVnEkE8ccw",
    description: "Set in the backdrop of Rangasthalam village in the 1980s, the story follows Chitti Babu and his brother Kumar Babu.",
    director: "Sukumar",
    cast: ["Ram Charan", "Samantha", "Aadhi Pinisetty"],
    duration: "2h 50min",
    language: "Telugu",
    matchScore: 91,
  },
  {
    id: "9",
    title: "Mahanati",
    teluguTitle: "మహానటి",
    year: 2018,
    genre: ["Biography", "Drama", "Romance"],
    rating: 8.1,
    votes: 38000,
    views: 650000,
    poster: "https://image.tmdb.org/t/p/original/5hwtlwoLdSpkoeusT0sf8qW5VFB.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/ankByTJkkTVGYRBZuHcW9SXoFU1.jpg",
    trailer: "https://www.youtube.com/embed/mXXGMJE3AsU",
    description: "A journalist traces back the life of actress Savitri, who ruled the silver screen in the 1950s and '60s.",
    director: "Nag Ashwin",
    cast: ["Keerthy Suresh", "Dulquer Salmaan", "Samantha"],
    duration: "2h 56min",
    language: "Telugu",
    matchScore: 93,
  },
  {
    id: "10",
    title: "Pushpa 2: The Rule",
    teluguTitle: "పుష్ప 2: ది రూల్",
    year: 2024,
    genre: ["Action", "Thriller", "Drama"],
    rating: 7.4,
    votes: 145000,
    views: 2100000,
    poster: "https://image.tmdb.org/t/p/original/759mIIerY4Njb8uPoj7AIXGSNh3.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/keC82cQ8q0ZHthrbvzWq04kGnbv.jpg",
    trailer: "https://www.youtube.com/embed/4bXjKJ4XJDA",
    description: "Pushpa Raj's struggles with his growing empire and enemies who threaten everything he has built.",
    director: "Sukumar",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
    duration: "3h 20min",
    language: "Telugu",
    isPinned: true,
    matchScore: 96,
  },
  {
    id: "11",
    title: "Sita Ramam",
    teluguTitle: "సీతారామం",
    year: 2022,
    genre: ["Romance", "Drama", "Period"],
    rating: 8.3,
    votes: 62000,
    views: 920000,
    poster: "https://image.tmdb.org/t/p/original/t1O94ZBzsQXJihtVkrsStRLyUDR.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg",
    trailer: "https://www.youtube.com/embed/fZpCwLPPLKE",
    description: "An orphaned soldier's life changes when he receives a letter from a woman he has never met.",
    director: "Hanu Raghavapudi",
    cast: ["Dulquer Salmaan", "Mrunal Thakur", "Rashmika Mandanna"],
    duration: "2h 43min",
    language: "Telugu",
    matchScore: 94,
  },
  {
    id: "12",
    title: "Kalki 2898 AD",
    teluguTitle: "కల్కి 2898 ఏడీ",
    year: 2024,
    genre: ["Sci-Fi", "Action", "Fantasy"],
    rating: 7.5,
    votes: 182000,
    views: 2300000,
    poster: "https://image.tmdb.org/t/p/original/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/seAIZLEq2Il2psjMUREDbSdRmbu.jpg",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Set in a post-apocalyptic world in 2898 AD, a modern-day avatar of Vishnu arrives to protect the world.",
    director: "Nag Ashwin",
    cast: ["Prabhas", "Deepika Padukone", "Amitabh Bachchan", "Kamal Haasan"],
    duration: "2h 58min",
    language: "Telugu",
    isPinned: true,
    matchScore: 89,
  },
];

export const getMoviesByGenre = (genre: string) =>
  movies.filter((m) => m.genre.includes(genre));

export const getTopRated = () =>
  [...movies].sort((a, b) => b.rating - a.rating);

export const getMostViewed = () =>
  [...movies].sort((a, b) => b.views - a.views);

export const getLatest = () =>
  [...movies].sort((a, b) => b.year - a.year);

export const getPinned = () =>
  movies.filter((m) => m.isPinned);

export const getRecommended = () =>
  [...movies].sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));

export const getPopularThisWeek = () =>
  [...movies].sort((a, b) => b.votes - a.votes).slice(0, 8);
