// Using global location object (allowed)
if (location.href) {
  // Unused variable (not allowed)
  // Using undefined as a value (not allowed)
  // Snake case variable name (not allowed)
  var foo_bar = undefined

  // Using global console object (allowed)
  // Using console.log (not allowed)
  // Using unknown (not defined) variable (not allowed)
  console.log(missing)

  // Accessing snake case property (allowed)
  if (location.does_not_exist) {
    // Unused ESLint ignore comment (not allowed)
    // eslint-disable-next-line no-undef
    location.href = 'https://example.com'
  }
}
