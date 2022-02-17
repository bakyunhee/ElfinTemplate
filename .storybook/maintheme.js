import { create } from '@storybook/theming'
import HeaderLogo from '../src/stories/assets/HeaderLogo.svg'

export default create({
  base: 'light',
  brandTitle : '',
  brandUrl : './',
  brandImage : HeaderLogo,

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'lightgrey',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Noto Sans CJK KR',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,
})
