const fs = require('fs');
const faker = require('faker');
require('dotenv').config();

let writer = fs.createWriteStream('pgreviews.csv');
writer.write('productid,author,rating,date,popularity,review,title\n');

function makeData(stream, encoding, callback){
  console.time('data');
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      const productid = faker.random.number({min: Number(process.env.START_ID), max: Number(process.env.END_ID)});
      const author = faker.internet.userName();
      const rating = Math.floor(Math.random() * 5 + 1);
      const date = faker.date.past().toJSON().slice(0, 10);
      const popularity = Math.floor(Math.random() * 20 + 1);
      const review = faker.lorem.paragraph();
      const title = faker.lorem.words();
      const data = `${productid},${author},${rating},${date},${popularity},${review},${title}\n`;
      if (i === 0) {
        writer.write(data.trim(), encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

makeData(writer, 'utf-8', () => {
  console.log(`Done making data!`)
  writer.end();
  console.timeEnd('data');
});
