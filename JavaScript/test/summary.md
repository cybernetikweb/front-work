##Differents kind of tests:
    - Unit tests (isolate unit(e.g a function))
    - Integraiton tests (function calling another function)
    - End-to-End (e2e) or UI test (test full interaction)


####Unit tests:
```JavaScript
// would be true
const generateText = (name, age) => {
  return `${name} (${age} years old)`
}

test('should output name and age', () => {
  const text = generateText('Max', 29)
  expect(text).toBe('Max (29 years old)')
})
// would be false
const generateText = (name, age) => {
  return `${age} (${age} years old)`
}

test('should output name and age', () => {
  const text = generateText('Max', 29)
  expect(text).toBe('Max (29 years old)')
})
```

####Integration tests:
```JavaScript

```