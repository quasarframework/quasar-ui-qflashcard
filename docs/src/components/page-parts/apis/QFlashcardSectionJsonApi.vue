<template>
  <json-api-viewer
    title="QFlashcardSection API"
    :json="json"
    no-menu
  />
</template>

<script>
import { defineComponent } from 'vue'
import Api from '@quasar/quasar-ui-qflashcard/dist/api/QFlashcardSection.json'

export default defineComponent({
  name: 'QFlashcardSectionJsonApi',
  setup () {
    return {
      json: Api
    }
  }
})
</script>
