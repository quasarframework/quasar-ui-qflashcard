<template>
  <json-api-viewer
    title="QFlashcard API"
    :json="json"
    starting-inner-tab="behavior"
    no-menu
  />
</template>

<script>
import { defineComponent } from 'vue'
import Api from '@quasar/quasar-ui-qflashcard/dist/api/QFlashcard.json'

export default defineComponent({
  name: 'QFlashcardJsonApi',
  setup () {
    return {
      json: Api
    }
  }
})
</script>
