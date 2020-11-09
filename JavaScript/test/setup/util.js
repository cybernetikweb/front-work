exports.generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

exports.validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  return !(isNumber && isNaN(+text));

};

exports.checkAndGenerate = (name, age) => {
  if (
      !validateInput(name.value, true, false) ||
      !validateInput(age.value, false, true)
  ) {
    return false;
  }
  return generateText(name, age)
}