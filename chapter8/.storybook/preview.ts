import type { Preview } from '@storybook/react-vite'
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    viewport: {
      // [추가 설정]
      /*
       storyboo v10 부터 storybook 자체 내로 내장된 걸로 보인다.
      */
      options: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    initialGlobals: {
      viewport: { value: 'iphone13' },
    },
  },
};

export default preview;