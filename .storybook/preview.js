import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // lightMode: {
  //   light: {
  //     ...themes.normal,
  //     brandImage: "black-logo.svg",
  //   },
  // }
}
