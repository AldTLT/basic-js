module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error;
    }

    let result = [];

    let index = 0;
    while (index < arr.length) {

        switch (arr[index]) {
            case '--discard-next':
                {
                    index++;
                    break;
                }
            case '--discard-prev':
                {
                    result.pop();
                    break;
                }
            case '--double-next':
                {
                    result.push(arr[index + 1]);
                    break;
                }
            case '--double-prev':
                {
                    result.push(arr[index - 1]);
                    break;
                }
            default:
                {
                    result.push(arr[index]);
                }
        }

        index++;
    }

    return result.filter(x => x !== undefined);
};
