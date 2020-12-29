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
      <CLink as="nuxt-link" to="/" color="teal.500">
        back to index
      </CLink>
      <CText>url: {{ url }}</CText>
    </CBox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  CBox,
  CLink,
  CText
} from '@chakra-ui/vue'

export default Vue.extend({
  components: {
    CBox,
    CLink,
    CText
  },
  async asyncData ({ $http }) {
    console.log('get (asyncData) - asyncData')
    const body = await $http.get('https://httpbin.org/get')

    const url = (body as any).url

    return { url }
  }
})
</script>
