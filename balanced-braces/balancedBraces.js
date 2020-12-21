function balancedBraces(input) {
  const stack = [];
  const bracePairs = { '{': '}', '[': ']', '(': ')' };
  for (const charecter of input) {
    if ('{[('.indexOf(charecter) !== -1) {
      stack.push(charecter);
    } else if ('}])'.indexOf(charecter) !== -1) {
      if (bracePairs[stack[stack.length - 1]] === charecter) {
        stack.pop();
      }
    }
  }
  return stack.length == 0;
}

export {
  balancedBraces,
};
