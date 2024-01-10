// const [a: bcx, b] = [10, 20];

// console.log(b, bcx);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "dfhjbffd",
      lastname: "dffdv",
    },
  },
};

const regularUser2 = {
  email: "some2@gmail.com",
  fullname: {
    userfullname: {
      firstname: "2dfhjbffd",
      lastname: "2dffdv",
    },
  },
};

function check({
  email: e,
  fullname: {
    userfullname: { firstname },
  },
}) {
  console.log(`Hi,My name is ${firstname} and my email is ${e}`);
}

check(regularUser2);
