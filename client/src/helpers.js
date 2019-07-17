const starPercents = (reviews) => {
  let percents = {
    total: reviews.length,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0
  };
  for (let i = 0; i < reviews.length; i++) {
    percents[reviews[i].rating]++;
  }
  return percents;
};

const formatMonth = function (month) {
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

const formatDate = function (date) {
  const month = formatMonth(date.substring(5, 7));
  const day = date.substring(8, 10);
  const year = date.substring(0, 4);
  return `${month} ${day}, ${year}`;
};

const calculateRating = function(reviews) {
  let rating = 0;
  let percents = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0
  };

  for (let i = 0; i < reviews.length; i++) {
    percents[reviews[i].rating]++;
  }

  rating = (5 * percents['5'] + 4 * percents['4'] + 3 * percents['3'] + 2 * percents[2] + 1 * percents[1]) /
            (percents['5'] + percents['4'] + percents['3'] + percents[2] + percents[1]);
  return rating.toFixed(1);
};

module.exports = {
  starPercents,
  formatDate,
  calculateRating
};
