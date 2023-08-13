export const indexLoader = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  return countries;
};

export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/phone/${params.id}`);
  const phone = await response.json();
  return phone;
};
