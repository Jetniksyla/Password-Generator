// Function to generate a random password based on user input
function generatePassword() {
  let length = parseInt(
    prompt("Enter the length of the password (between 8 and 128 characters):")
  );

  // Validate the user input for password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Ask the user about including different character types in the password
  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumbers = confirm("Include numbers?");
  let includeSpecialCharacters = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecialCharacters
  ) {
    alert("At least one character type should be selected.");
    return {
    // Ask the user for input or set default values
    includeLowercase: confirm("Include lowercase characters?"),
    includeUppercase: confirm("Include uppercase characters?"),
    includeNumbers: confirm("Include numbers?"),
    includeSpecialCharacters:  confirm("Include special characters?")
  }
  }

  // Generate a random password based on user preferences
  let password = generateRandomPassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecialCharacters
  );

  // Display the generated password in the specified HTML element
  document.getElementById("Password").value = password;
}

// Function to generate a random password using specified character sets
function generateRandomPassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSpecialCharacters
) {
  // Define character sets for lowercase, uppercase, numbers, and special characters
  const characterSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    specialCharacters: "!@#$%^&*()_-+=<>?/",
  };

  // Initialize an empty string to store valid characters based on user preferences
  let validCharacters = "";

  // Build the set of valid characters based on user preferences
  if (includeLowercase) validCharacters += characterSets.lowercase;
  if (includeUppercase) validCharacters += characterSets.uppercase;
  if (includeNumbers) validCharacters += characterSets.numbers;
  if (includeSpecialCharacters)
    validCharacters += characterSets.specialCharacters;

  // Initialize an empty string for the generated password
  let password = "";

  // Generate the password by randomly selecting characters from the valid character set
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validCharacters.length);
    password += validCharacters[randomIndex];
  }

  // Return the generated password
  return password;
}
