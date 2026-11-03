// Fork-only demo preview: global Vibe styles and the light theme, without the docs site extras.
import { type Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "@vibe/style/dist/index.min.css";

const preview: Preview = {
  decorators: [withThemeByClassName({ themes: { Light: "light-app-theme" }, defaultTheme: "Light" })]
};

export default preview;
