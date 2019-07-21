// var bool = true;
// new Promise(function(resolve, reject) {
//   console.log("promise");
//   if (bool) {
//     setTimeout(function() {
//       resolve("wwww");
//     }, 500);
//   } else {
//     reject("have an error");
//   }
// })
//   .then(function(value) {
//     console.log(value);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// setTimeout(function() {
//   console.log("setTimeout");
// }, 100);

(function() {
  setTimeout(() => {
    console.log(0);
  });

  new Promise(resolve => {
    console.log(1);

    setTimeout(() => {
      resolve();
      Promise.resolve().then(() => console.log(2));
      console.log(3);
    });

    Promise.resolve().then(() => console.log(4));
  }).then(() => {
    console.log(5);
    Promise.resolve().then(() => console.log(8)); //这句是多加的
    setTimeout(() => console.log(6));
  });

  console.log(7);
})();
