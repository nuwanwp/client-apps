import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ResultGridComponent } from './result-grid.component';

export default {
  title: 'ResultGridComponent',
  component: ResultGridComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ResultGridComponent>;

const Template: Story<ResultGridComponent> = (args: ResultGridComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
