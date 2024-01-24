const datas = fetch("https://randomuser.me/api/");

datas
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    console.log(data.results[0].name.first);
  });
