
const newUsers = [{
  "id": 4,
  "name": "Ihorko",
  "email": "newemail@hp.com",
  "gender": "Male",
  "birthday": "1993-09-29"
}, {
  "id": 6,
  "name": "Valera",
  "email": "valera@mapquest.com",
  "gender": "Male",
  "birthday": "1999-06-17"
}];


function mergeUsers(users, newUsers) {
  newUsers.forEach((newUser) => {
    const userIndex = users.findIndex((user) => user.id === newUser.id);
    if (userIndex !== -1) {
      users[userIndex] = newUser;
    } else {
      users.push(newUser);
    }
  });

  return users;
}

function mergeUsersImproved(users, newUsers) {
  const usersObj = {};

  users.forEach((user) => {
    usersObj[user.id] = user;
  })

  newUsers.forEach((item) => {
    usersObj[item.id] = item;
  })

  return Object.values(usersObj);
}

function mergeUsersLodash(users, newUsers) {
  return _.values(_.assign(_.keyBy(users, 'id'), _.keyBy(newUsers, 'id')));
}


console.log( mergeUsersLodash(users, newUsers) );