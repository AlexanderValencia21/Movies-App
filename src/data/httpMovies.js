const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTViOTlhMzk1OTQ0ZGEzZTRmMzM4NGYwNWI1ODBlZCIsInN1YiI6IjY0NGIwZTRhNzI2ZmIxMDU0YTA1YzNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.co3TpMJfvEPQ4IZ0qydhSCnodmTPVe6Z3SA8u-rvhPo",
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((result) => result.json())
}