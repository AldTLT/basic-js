module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ? members
    .filter(x => (typeof x) == 'string')
    .map(z => z
      .trimLeft()
      .toUpperCase()[0]
    )
    .sort()
    .join('') : false;
};