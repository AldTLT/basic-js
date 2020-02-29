module.exports = function repeater(str, options) {
    if (str === undefined) {
        return str;
    }

    let repTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
    let sep = repTimes <= 1 ? '' : options.separator === undefined ? '+' : options.separator;
    let add = options.addition === undefined ? '' : options.addition + '';
    let addRepTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
    let addSep = options.additionSeparator === undefined ? '|' : options.additionSeparator;

    let additional = (add + addSep).repeat(addRepTimes).slice(0, -addSep.length);

    let result = (str + '' + additional + sep).repeat(repTimes);
    return result.slice(0, result.length - sep.length);
};
