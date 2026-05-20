import { defineComponent, h } from "vue";

export default defineComponent({
  name: "QFlashcard",

  props: {
    noHover: Boolean,
  },

  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: ["q-flashcard", { "no-hover": props.noHover === true }],
        },
        slots.default?.(),
      );
  },
});
