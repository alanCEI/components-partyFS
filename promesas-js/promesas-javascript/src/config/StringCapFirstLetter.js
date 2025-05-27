export const FirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Recibia los datos con diferencia de mayus/minus en la primera letra de cada palabra, asi que pensando de la misma forma con las API's
// creo un JS para esta funcionalidad para exportarlo donde necesite