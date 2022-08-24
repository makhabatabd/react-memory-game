const cards = [
  {
    id: 0,
    name: "Friends",
    status: "",
    url: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
  },
  {
    id: 0,
    name: "Friends",
    status: "",
    url: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
  },
  {
    id: 1,
    name: "Big Bang",
    status: "",
    url: "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 1,
    name: "Big Bang",
    status: "",
    url: "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 2,
    name: "Breaking Bad",
    status: "",
    url: "https://flxt.tmsimg.com/assets/p185846_b_v8_ad.jpg",
  },
  {
    id: 2,
    name: "Breaking Bad",
    status: "",
    url: "https://flxt.tmsimg.com/assets/p185846_b_v8_ad.jpg",
  },
  {
    id: 3,
    name: "Lucifer",
    status: "",
    url: "https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw",
  },
  {
    id: 3,
    name: "Licifer",
    status: "",
    url: "https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw",
  },
  {
    id: 4,
    name: "How to get away with murder",
    status: "",
    url: "https://thecentraltrend.com/wp-content/uploads/2020/02/how-to-get-away-murder-season-2-thatgrapejuice-600x800-1.jpg",
  },
  {
    id: 4,
    name: "How to get away with murder",
    status: "",
    url: "https://thecentraltrend.com/wp-content/uploads/2020/02/how-to-get-away-murder-season-2-thatgrapejuice-600x800-1.jpg",
  },
  {
    id: 5,
    name: "Travelers",
    status: "",
    url: "https://flxt.tmsimg.com/assets/p13257209_b_v13_aa.jpg",
  },
  {
    id: 5,
    name: "Travelers",
    status: "",
    url: "https://flxt.tmsimg.com/assets/p13257209_b_v13_aa.jpg",
  },
  {
    id: 6,
    name: "Black Bird",
    status: "",
    url: "https://m.media-amazon.com/images/M/MV5BZjI3NjcyN2UtMGNhZC00YTYxLWJmOTQtNWI1ZGJmNjA4ZjY5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
  },
  {
    id: 6,
    name: "Black Bird",
    status: "",
    url: "https://m.media-amazon.com/images/M/MV5BZjI3NjcyN2UtMGNhZC00YTYxLWJmOTQtNWI1ZGJmNjA4ZjY5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
  },
  {
    id: 7,
    name: "Suits",
    status: "",
    url: "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 7,
    name: "Suits",
    status: "",
    url: "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  },
];

export function getCards(n) {
  if (n == 6) {
    return cards.slice(0, 6).sort(() => Math.random() - 0.5);
  } else {
    return cards.sort(() => Math.random() - 0.5);
  }
}
