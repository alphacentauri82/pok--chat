<template>
  <div 
    class="Character Tooltip"
    :class="[
      `Character--${character.color || 'red'}`,
      `Character--${character.direction || 'down'}`,
      { 'Character--moving' : character.moving }
    ]"
    :style="{
      left: (character.x + 20) + 'rem',
      top: (character.y + 9) + 'rem'
    }"
  >
    <span class="Character--tooltip Tooltip-text">{{ character.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Character',

  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.Tooltip .Tooltip-text {
  visibility: hidden;
  text-align: center;
  padding: 2px 20px;
  position: absolute;
  z-index: 100;
}
.Tooltip:hover .Tooltip-text {
  visibility: visible;
}

.Character {
  @apply absolute h-4 w-4;
}

.Character--red.Character--down {
  background: no-repeat url('~@/assets/images/overworld.png') 0rem 0rem;
}

.Character--red.Character--down.Character--moving {
  background: no-repeat url('~@/assets/images/overworld.png') -3rem 0rem;
}

.Character--red.Character--up {
  background: no-repeat url('~@/assets/images/overworld.png') -1rem 0rem;
}

.Character--red.Character--up.Character--moving {
  background: no-repeat url('~@/assets/images/overworld.png') -4rem 0rem;
}

.Character--red.Character--left {
  background: no-repeat url('~@/assets/images/overworld.png') -2rem 0rem;
}

.Character--red.Character--left.Character--moving {
  background: no-repeat url('~@/assets/images/overworld.png') -5rem 0rem;
}

.Character--red.Character--right {
  background: no-repeat url('~@/assets/images/overworld.png') -2rem 0rem;
  transform: scaleX(-1);
}

.Character--red.Character--right.Character--moving {
  background: no-repeat url('~@/assets/images/overworld.png') -5rem 0rem;
  transform: scaleX(-1);
}

.Character--blue.Character--down {
  background: no-repeat url('~@/assets/images/overworld.png') -8rem 0rem;
}

.Character--blue.Character--down.Character--moving {
  background: no-repeat url('~@/assets/images/overworld.png') -11rem 0rem;
}

.Character--blue.Character--up {
  background: no-repeat url('~@/assets/images/overworld.png') -9rem 0rem;
}

.Character--blue.Character--up.Character--moving {
  background: no-repeat url('~@/assets/images/overworld.png') -12rem 0rem;
}

.Character--blue.Character--left {
  background: no-repeat url('~@/assets/images/overworld.png') -10rem 0rem;
}

.Character--blue.Character--left.Character--moving {
  background: no-repeat url('~@/assets/images/overworld.png') -13rem 0rem;
}

.Character--blue.Character--right {
  background: no-repeat url('~@/assets/images/overworld.png') -10rem 0rem;
  transform: scaleX(-1);
}

.Character--blue.Character--right.Character--moving {
  background: no-repeat url('~@/assets/images/overworld.png') -13rem 0rem;
  transform: scaleX(-1);
}

.Character--tooltip {
  @apply bg-white p-3 -mt-6 -ml-6 rounded
}
</style>