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
import {
  CBox,
  CLink,
  CText
} from '@chakra-ui/vue'
import { useAsync, useContext, defineComponent, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
    CBox,
    CLink,
    CText
  },
  setup () {
    console.log('get (useAsync) - setup')
    const { $http } = useContext()
    const url = useAsync(async () => {
      console.log('get (useAsync) - useAsync')
      // nuxt-link による遷移時に呼ばれてしまう
      // > Much like asyncData, it won't re-run these async calls client-side.
      // > https://composition-api.nuxtjs.org/helpers/useAsync
      // ほんまか？？
      const body = await $http.get('https://httpbin.org/get')

      return (body as any).url
    })

    useFetch(() => {
      console.log('get - useFetch')
    })

    return { url }
  }
})
</script>
