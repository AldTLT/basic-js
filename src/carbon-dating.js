const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity) == 'string') {
    sampleActivity = parseFloat(sampleActivity);

    return (sampleActivity > 0) && (sampleActivity < 15) ?
      Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD))
      : false;
  }

  return false;
};
