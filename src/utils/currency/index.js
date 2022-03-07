export const formatMoney = (amount) => {
  const value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount / 100);
  return value;
};
