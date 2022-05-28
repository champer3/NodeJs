const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`breed: ${data}`);
  //   Callback Hell
  //   superagent
  //     .get(`https://dog.ceo/api/breed/${data}/images/random`)
  //     .end((err, res) => {
  //       if (err) return console.log(err.message);
  //       console.log(res.body.message);

  //       fs.writeFile('dog-img.txt', res.body.message, (err) => {
  //         if (err) return console.log(err.message);
  //         console.log('Random image saved to rew file');
  //       });
  //     });

  //Promises
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log('Random image saved to rew file');
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
