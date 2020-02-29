module.exports = class DepthCalculator {
    calculateDepth(arr, depth) {
        depth === undefined ? depth = 1 : depth++;
        let ndepth = depth;
        arr.forEach(x => {
            if (Array.isArray(x)) {
                let calcDepth = this.calculateDepth(x, depth);
                ndepth = ndepth > calcDepth ? ndepth : calcDepth;
            };
        });
    
        return ndepth;
    }
};