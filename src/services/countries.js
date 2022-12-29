const countriesApi = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

/*map con sort para colocar países alfabeticamente*/

export default countriesApi;
