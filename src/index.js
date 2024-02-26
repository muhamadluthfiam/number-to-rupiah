import _ from 'lodash';

export const formatNumber = function(number, format = '0,0') {
  // Pemisahan ribuan dan format desimal menggunakan lodash
  return _.isNumber(number) ? _.replace(_.round(number).toLocaleString(), ',', '.') : '';
}

export const unformatNumber = function(formattedNumber) {
  // Menghapus pemisah ribuan dan mengembalikan angka murni menggunakan lodash
  return _.toNumber(_.replace(formattedNumber, /[^\d.-]/g, ''));
}

export const add = function(...numbers) {
  // Penambahan beberapa angka menggunakan lodash
  return _.sum(numbers);
}

export const subtract = function(...numbers) {
  // Pengurangan beberapa angka menggunakan lodash
  return _.subtract(...numbers);
}

export const multiply = function(...numbers) {
  // Perkalian beberapa angka menggunakan lodash
  return _.multiply(...numbers);
}

export const divide = function(dividend, divisor) {
  // Pembagian dua angka menggunakan lodash
  return _.divide(dividend, divisor);
}


