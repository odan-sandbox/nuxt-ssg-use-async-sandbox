<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
      align-items="center"
    >
      <nuxt-link to="/">
        index
      </nuxt-link>
    </CBox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  CBox
} from '@chakra-ui/vue'

export default Vue.extend({
  components: {
    CBox
  }
})
</script>
