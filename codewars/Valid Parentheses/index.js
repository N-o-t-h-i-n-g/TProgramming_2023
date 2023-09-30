function validParentheses(parens) {
  let count = 0

  for (i = 0; i < parens.length; i++) {
    if (parens[i] === '(') count++;
    if (parens[i] === ')') count--;
    if (count < 0) return false;
  }

  return count === 0;
}

validParentheses()