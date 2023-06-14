const generatePlateNumber = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let plateNumber = "";

  // Generate the first 3 characters (letters)
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    plateNumber += letters[randomIndex];
  }

  // Generate the last 3 characters (numbers)
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    plateNumber += numbers[randomIndex];
  }

  return plateNumber;
};

// Example usage
console.log(generatePlateNumber());
console.log(generatePlateNumber());
console.log(generatePlateNumber());
console.log(generatePlateNumber());
