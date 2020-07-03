// https://www.codewars.com/kata/regex-password-validation

function validate(password) {
  // At least six characters long
  const longEnough = /.{6,}/.test(password);
  // contains a lowercase letter
  const hasLowerCase = /[a-z]/.test(password);
  // contains an uppercase letter
  const hasUpperCase = /[A-Z]/.test(password);
  // contains a number
  const hasNumber = /\d/.test(password);
  return longEnough && hasLowerCase && hasUpperCase && hasNumber;
}

function validate(password) {
  return /^(?=\w{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]*$/g.test(
    password
  );
}
