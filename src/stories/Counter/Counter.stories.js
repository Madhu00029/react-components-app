import Counter from "../Button/Button"; // Ensure the path is correct

export default {
  title: 'Example/Counter',
  component: Counter,
  argTypes: {
    color: { control: 'color', presetColors: ['#000000', '#2BB60B'] },
  },
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {};
