_.map(users, function(user, index) {
  if (index > 2) return false;
});

const hello = _.debounce(() => {
  console.log('Hello');
}, 1000);
window.addEventListener('scroll', hello);


const defaultOptions = {
  duration: 10,
  type: 'linear'
};

const newOptions = {
  duration: 50,
  color: 'red'
}

const options = _.defaults({}, defaultOptions, newOptions);
_.set(users, '[0].hobbies.sport[0].a.d.g', 'dancing');
_.get(users, '[0].hobbies.sport', 'football')

const usersPicked = users.map((user) => {
  return _.omit(user, ['name', 'email'])
})


function getAdultEmails(users) {
  return users.filter((user) => adult(user.birthday))
              .map((user) => user.email)
              .join(', ');
}
