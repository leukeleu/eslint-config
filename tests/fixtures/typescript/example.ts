// Import only used as type (not allowed)
import { Foo } from './types'

// Using global location object (allowed)
if (location.href) {
  // Unnecessary type annotation (not allowed)
  // Unused variable (not allowed)
  // Using undefined as a value (not allowed)
  const unused : undefined = undefined

  // Snake case variable name (not allowed)
  const foo_bar : Foo = 'bar'

  if (foo_bar === 'bar') {
    // Using global console object (allowed)
    // Using console.log (not allowed)
    // Using unknown (not defined) variable (not allowed)
    console.log(missing)
  }
}
