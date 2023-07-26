// Define constants for different types of validators
const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';

// Validator for checking if a value is required (non-empty)
export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
// Validator for checking if a value is a file (typically used for file uploads)
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
// Validator for checking the minimum length of a value
export const VALIDATOR_MINLENGTH = val => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val
});
// Validator for checking the maximum length of a value
export const VALIDATOR_MAXLENGTH = val => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
// Validator for checking the minimum numeric value of a value
export const VALIDATOR_MIN = val => ({ type: VALIDATOR_TYPE_MIN, val: val });
// Validator for checking the maximum numeric value of a value
export const VALIDATOR_MAX = val => ({ type: VALIDATOR_TYPE_MAX, val: val });
// Validator for checking if a value is a valid email address
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

// Function to validate a value against a list of validators
export const validate = (value, validators) => {
  let isValid = true;
  // Check the type of validator and apply the corresponding validation logic
  for (const validator of validators) {
    // Validator for 'REQUIRED': Check if the value is not empty after trimming
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    // Validator for 'MINLENGTH': Check if the value's length is greater than or equal to the specified value
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    // Validator for 'MAXLENGTH': Check if the value's length is less than or equal to the specified value
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    // Validator for 'MIN': Check if the numeric value is greater than or equal to the specified value
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    // Validator for 'MAX': Check if the numeric value is less than or equal to the specified value
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    // Validator for 'EMAIL': Check if the value is a valid email address using a regular expression
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
};