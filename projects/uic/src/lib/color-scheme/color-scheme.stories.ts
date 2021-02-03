import { select, withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { COLORS, ELEMENT_STATES } from '../constants';
import { ColorSchemeComponent } from './color-scheme.component';

export default {
  title: 'Dawere/Color Schema',
  decorators: [withKnobs],
  component: ColorSchemeComponent,
  parameters: {
    controls: {
      disabled: true
    },
    actions: {
      disabled: true
    }
  }
} as Meta;

const Template: Story<ColorSchemeComponent> = (args: ColorSchemeComponent) => {
  return {
    component: ColorSchemeComponent,
    props: {
      ...args,
      colorClass: select('Color', COLORS, COLORS.Primary),
      typeClass: select('State', ELEMENT_STATES, ELEMENT_STATES.Normal)
    },
  }
};

export const Default = Template.bind({});