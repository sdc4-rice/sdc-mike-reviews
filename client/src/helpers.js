const starPercents = (reviews) => {
  let percents = {
    total: reviews.length + 1
  };
  for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    if (percents[reviews[i].rating] === undefined) {
      percents[reviews[i].rating] = 1;
    } else {
      percents[reviews[i].rating]++;
    }
  }
  return percents;
};

var formatMonth = function (month) {
  const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };
  return months[month];
};

var formatDate = function (date) {
  console.log('*****', date);
  var month = formatMonth(date.substring(5, 7));
  var day = date.substring(8, 10);
  var year = date.substring(0, 4);
  return `${month} ${day}, ${year}`;
};

module.exports = {
  starPercents,
  formatDate
};
