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
      <CLink as="nuxt-link" to="/get" color="teal.500">
        get (useAsync)
      </CLink>
      <CLink as="nuxt-link" to="/get2" color="teal.500">
        get (asyncData)
      </CLink>
      <CLink as="nuxt-link" to="/get3" color="teal.500">
        get (useStatic)
      </CLink>
    </CBox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  CBox,
  CLink
} from '@chakra-ui/vue'

export default Vue.extend({
  components: {
    CBox,
    CLink
  }
})
</script>
