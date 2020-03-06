const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    value = value === undefined ? '' : value;
    this.chains.push(value);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || (position > this.chains.length) || (position < 1)) {
      this.chains = [];
      throw Error('Incorrect link position!');
    }

    this.chains.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chains.reverse();
    return this;
  },

  finishChain() {
    let chainToOut = this.chains
      .map(chain => '( ' + chain + ' )')
      .join('~~');

      this.chains = [];

      return chainToOut;
  }
};

module.exports = chainMaker;
