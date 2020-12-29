declare module '@chakra-ui/vue' {
  import Vue, { PluginObject } from 'vue'

  export default class Chakra {
    static install(v: typeof Vue, o?: PluginObject<unknown>): void
  }

  export class CThemeProvider extends Vue {}
  export class CReset extends Vue {}
  export class CBox extends Vue {}
  export class CLink extends Vue {}
  export class CText extends Vue {}
}
