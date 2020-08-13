export const ENV = 'development';

export const API_URL = `http://192.168.0.6:3030`;

export const InfoCurrencys = {
  dolar: { symbol: '$', currency: 'USD' },
  pesos: { symbol: '$', currency: 'CLP' },
  porcentual: { symbol: '%', currency: '' },
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
