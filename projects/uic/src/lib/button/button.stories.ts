import { Story, Meta } from '@storybook/angular/types-6-0';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';
import { COLORS, SIZES } from '../constants';

export default {
  title: 'Dawere/Buttons',
  decorators: [withKnobs],
  component: ButtonComponent,
  parameters: {
    controls: {
      disabled: true
    },
    actions: {
      disabled: true
    }
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => {
  return {
    component: ButtonComponent,
    props: {
      ...args,
      label: text('Label', 'Lorem ipsum'),
      colorClass: select('Color', COLORS, COLORS.Primary),
      size: select('Size', SIZES, SIZES.Medium),
      block: boolean('Block', false),
      disabled: boolean('Disabled', false),
      outline: boolean('Outline Style', false),
      rounded: boolean('Rounded', false),
      borderless: boolean('Borderless', false),
    },
  }
};

export const Default = Template.bind({});