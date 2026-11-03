// Fork-only demo config: one Dropdown story on the docs Storybook setup, small enough to build in a 3 GB container.
import path from "path";
import base from "../.storybook/main";

export default {
  ...base,
  stories: ["./MultiSearchableDropdown.stories.tsx"],
  staticDirs: [path.resolve(__dirname, "../.storybook/static")],
  typescript: { check: false, reactDocgen: false }
};
