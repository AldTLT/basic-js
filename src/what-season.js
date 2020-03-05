module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Wrong date');
  }

  if (date.getMonth) {
    let month = date.getMonth();
    return month <= 1 ? 'winter'
      : month <= 4 ? 'spring'
        : month <= 7 ? 'summer'
          : month <= 10 ? 'autumn'
            : 'winter';
  };

  throw new Error('Wrong date');
};
