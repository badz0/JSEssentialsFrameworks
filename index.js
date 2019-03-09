let now2 = new Date('2020-10-10');
let now3 = new Date(2020, 10, 10);

let now4 = new Date(1552119745463);

// let now = new Date();


moment.locale('uk');

let now = moment().subtract(18, 'month').add(10, 'years');




function pow(x, n) {
  let result;
  if (n > 1) {
    result = x * pow(x, n - 1);
  } else {
    result = x;
  }
  return result;
}
