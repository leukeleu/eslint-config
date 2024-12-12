<style></style>

<style scoped>
  h1 {
    color: red;
  }
</style>

<script>
module.exports = {
  computed: {
    message() {
      // Unused variable (not allowed)
      // Using undefined as a value (not allowed)
      const unused = undefined

      // Using unknown (not defined) variable (not allowed)
      return missing
    }
  },
  data() {
    // Using global console object (allowed)
    // Using console.log (not allowed)
    console.log('data')
    return {
      counter: 0
    }
  }
}
</script>

<template>
  <!-- v-html is dangerous -->
  <!-- static elements with event listeners are bad for a11y -->
  <h1 v-html="message" @click="counter++"></h1>

  <!-- autofocus is bad for a11y -->
  <input autofocus />

  <!-- button needs type attribute -->
  <button @click="counter++">Click me! {{ counter }}</button>
</template>
