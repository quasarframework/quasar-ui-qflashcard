import { computed, defineComponent, h, type PropType } from "vue";

import type { FlashcardTransition } from "../../types/types";

function getTransitionName(transition: string, active: boolean): string {
  const postfix = active === true ? "--active" : "";
  return (transition.startsWith("fc-") ? transition : "fc-" + transition) + postfix;
}

export default defineComponent({
  name: "QFlashcardSection",

  props: {
    active: Boolean,
    transition: [String, Array] as PropType<FlashcardTransition>,
  },

  setup(props, { slots }) {
    const classes = computed(() => {
      if (props.transition === void 0) {
        return "";
      }

      const transition = props.transition;

      if (typeof transition === "string") {
        return transition.includes(" ")
          ? transition
              .split(" ")
              .map((name) => getTransitionName(name, props.active))
              .join(" ")
          : getTransitionName(transition, props.active);
      }

      if (Array.isArray(transition)) {
        return transition.map((name) => getTransitionName(name, props.active)).join(" ");
      }

      return "";
    });

    return () =>
      h(
        "div",
        {
          class: ["q-flashcard__section", classes.value],
        },
        slots.default?.(),
      );
  },
});
