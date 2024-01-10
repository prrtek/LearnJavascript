function spread({ name, ...pass }) {
  console.log(name + " " + JSON.stringify(pass));
}

const user = {
  name: "admin",
  username: "ad",
  password: 1234,
};

const user2 = {
  name: "admin2",
  username: "ad2",
  password: 221234,
};

spread(user2);
