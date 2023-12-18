import { extendTheme } from '@chakra-ui/theme-utils'

export const theme = extendTheme({
  fonts: {
    heading: '',
    body: '',
  },
  components: {
    Button: {
      //   defaultProps: {
      //     colorScheme: '',
      //   },
    },
    Checkbox: {},
  },
  colors: {
    brand: {
      50: '#ece6ff',
      100: '#c5b5ff',
      200: '#9a86fb',
      300: '#523DF5',
      400: '#3c25f4',
      500: '#310bda',
      600: '#2f08ab',
      700: '#28057b',
      800: '#1c034c',
      900: '#0e001e',
      blue: '#523DF5',
      'blue.middle': '#797EF8',
      light: '#EDECFF',
      'light.gray': '#CCCDDD',
      purple: '#BB48ECDA',
    },
    menu: {
      bg: '#181C2C',
      'bg.select': '#303444',
    },
    accent: {
      blue: '#4871EF',
      'blue.light': '#E8EEFC',
      yellow: {
        '50': '#FFF8E5',
        '100': '#FFEBB8',
        '200': '#FFDE8A',
        '300': '#FFD15C',
        '400': '#FFC42E',
        '500': '#FFB700',
        '600': '#CC9300',
        '700': '#996E00',
        '800': '#664900',
        '900': '#332500',
      },
    },
    gray: {
      middle: '#5C616A',
      light: '#F4F4F4',
      disabled: '#AEAEAE',
      border: '#CCCDDD',
      transparent: '#CCCDDD33',
    },
    blue: {
      light: '#00B4E7',
    },
    bg: '#FFFFFF',
    'bg.buttons': '#F4F5FA',
    black: {
      '2b': '#2B2B2B',
    },
  },
  layerStyles: {
    gradientBg: {
      background:
        'linear-gradient(229deg, #BB48EC 0%, #7466E5 45.31%, #2467F1 100%)',
    },
  },
})
