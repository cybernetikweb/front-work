const {checkAndGenerate} = require("../e2e-tests/util");
const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Bartosz', 21);
    expect(text).toBe('Bartosz (21 years old)');
    const text2 = generateText('Sarah', 22);
    expect(text2).toBe('Sarah (22 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)')
})
test('should output undefined', () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)')
})

test('sould generate a valid text output', () => {
    const text = checkAndGenerate('Bartosz', 21)
    expect(text).toBe('Bartosz (21 years old)')
})