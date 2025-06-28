var MyStack = function () {
  this.q = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.q.length == 0) {
    return "empty array";
  }
  return this.q.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.q[this.q.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length == 0;
};
