export const genresHelper = genres => {
  return genres.reduce(function (text, { name }) {
    return text + ' ' + name;
  }, '');
};
