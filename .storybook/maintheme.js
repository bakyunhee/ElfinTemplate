import { create } from '@storybook/theming'

export default create({
  base: 'light',

  brandTitle : 'ElfinTemplate',
  brandUrl : './',
  brandImage : '',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'lightgrey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,
})
