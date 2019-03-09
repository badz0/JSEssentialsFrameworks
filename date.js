
function adultMoment(birthday) {
  return moment(birthday).isBefore(moment().subtract(18, 'y'));
}

function adult(birthday) {
  birthday = new Date(birthday);

  let minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 18);

  return birthday < minDate;
}

