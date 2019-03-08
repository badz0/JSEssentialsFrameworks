
function adult(birthday) {
  return moment(birthday).isBefore(moment().subtract(18, 'y'))
}

function adultMoment(birthday) {
}

// console.log( adult('1990-01-01') );
// console.log( adult('2002-01-01') );
