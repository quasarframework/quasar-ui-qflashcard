<template>
  <q-page class="flex flex-center">
    <Component1></Component1>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Component1 from "components/Component1";

export default defineComponent({
  name: 'PageIndex',
  components: {
    Component1
  }
})
</script>
