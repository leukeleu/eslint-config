<style scoped>
  h1 {
    color: red;
  }
</style>

<style></style>

<template>
  <!-- v-html is dangerous -->
  <!-- static elements with event listeners are bad for a11y -->
  <h1 v-html="message" @click="counter++"></h1>

  <p>Multiple root components is fine here.</p>

  <!-- autofocus is bad for a11y -->
  <input autofocus>

  <!-- button needs type attribute -->
  <button @click="counter++">Click me! {{ counter }}</button>
</template>

<script setup lang="ts">
// Vue doesn't auto-import
import { ref } from 'vue'

const props = defineProps<{
  snake_case: boolean
}>()

// Using global location object (allowed)
if (location.href) {
  // Unused variable (not allowed)
  // Using undefined as a value (not allowed)
  // Easily inferred type (not allowed)
  var unused : undefined = undefined

  // Destructuring snake_case prop (allowed)
  const { snake_case } = props

  // Using snake_case identifier (not allowed)
  if (snake_case) {
    // Using global console object (allowed)
    // Using console.log (not allowed)
    // Using unknown (not defined) variable (not allowed)
    console.log(missing)
  }
}

const counter = ref(0)
</script>
