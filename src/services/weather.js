const weatherApi = () => {
  return fetch("")
    .then((response) => response.json())
    .then((response) => {
      const result = {
        name: response.name,
        birthYear: response.birth_year,
        height: response.height,
        mass: response.mass,
        eyeColor: response.eye_color,
      };
      return result;
    });
};

export default weatherApi;
