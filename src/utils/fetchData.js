export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8290845abbmshb873a4bc89a7c01p166521jsn5eafd1f74652",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8290845abbmshb873a4bc89a7c01p166521jsn5eafd1f74652",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
