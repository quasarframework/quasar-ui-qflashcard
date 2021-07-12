<template>
  <q-page class="flex flex-center">

    <Component1></Component1>
    <Component2></Component2>
    <Demo1></Demo1>
    <Demo2></Demo2>
    <Demo3></Demo3>
    <Demo4></Demo4>
    <Demo5></Demo5>
    <Demo6></Demo6>
    <Demo7></Demo7>
    <FlipLeftRight></FlipLeftRight>
    <FlipUpDown></FlipUpDown>
    <Mashup1></Mashup1>
    <Mashup2></Mashup2>
    <Nudge></Nudge>
    <RollLeftRight></RollLeftRight>
    <RollUpDown></RollUpDown>
    <Shake></Shake>
    <SlideLeftRight></SlideLeftRight>
    <SlideUpDown></SlideUpDown>
    <Spin></Spin>
    <Zoom></Zoom>
    <Demo7></Demo7>

    <div>
      Photo by Jeremy Bishop on Unsplash
    </div>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import Component1 from "components/Component1.vue";
import Component2 from "components/Component2.vue";
import Demo1 from "components/Demo1.vue";
import Demo2 from "components/Demo2.vue";
import Demo3 from "components/Demo3.vue";
import Demo4 from "components/Demo4.vue";
import Demo5 from "components/Demo5.vue";
import Demo6 from "components/Demo6.vue";
import Demo7 from "components/Demo7.vue";
import FlipLeftRight from "components/FlipLeftRight.vue";
import FlipUpDown from "components/FlipUpDown.vue";
import Mashup1 from "components/Mashup1.vue";
import Mashup2 from "components/Mashup2.vue";
import Nudge from "components/Nudge.vue";
import RollLeftRight from "components/RollLeftRight.vue";
import RollUpDown from "components/RollUpDown.vue";
import Shake from "components/Shake.vue";
import SlideLeftRight from "components/SlideLeftRight.vue";
import SlideUpDown from "components/SlideUpDown.vue";
import Spin from "components/Spin.vue";
import Zoom from "components/Zoom.vue";


export default defineComponent({
  name: 'PageIndex',
  components: {
    Component1,
    Component2,
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
    Demo6,
    Demo7,
    FlipLeftRight,
    FlipUpDown,
    Mashup1,
    Mashup2,
    Nudge,
    RollLeftRight,
    RollUpDown,
    Shake,
    SlideLeftRight,
    SlideUpDown,
    Spin,
    Zoom
  }
})
</script>
