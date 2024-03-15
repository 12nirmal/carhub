// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b1c6fac02fmsh6fe724af3895ba4p136e1cjsn82c416fff517",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// it is a modified code👇👇

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b1c6fac02fmsh6fe724af3895ba4p136e1cjsn82c416fff517",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
