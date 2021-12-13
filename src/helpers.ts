import { format } from 'date-fns';
export const removeAccentAndLowercase = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export const formatDate = (date: string): string => {
  const splittedDate = date.split('-');
  return format(
    new Date(+splittedDate[2], +splittedDate[1] - 1, +splittedDate[0]),
    'yyyy-MM-dd',
  );
};
