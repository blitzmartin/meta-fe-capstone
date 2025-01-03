export const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
export const submitAPI = function (formData) {
  return true;
};

export const fetchImages = async (num = 10) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=food&per_page=${num}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results.map((image) => ({
      id: image.id,
      url: image.urls.regular,
      alt: image.alt_description,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
