//Learn also about singelton and object literals

const mySm = Symbol("keyO");

const obj = {
  name: "Prateek",
  full: "pkrt",
  [mySm]: "keyss",
  [mySm]: "key",
};

// console.log(obj[mySm]);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "dfhjbffd",
      lastname: "dffdv",
    },
  },
};

console.log(typeof regularUser.fullname.userfull?.firstname.lastname); //? is optional chaining
