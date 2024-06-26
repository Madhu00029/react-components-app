import Accordion from "./Accordion";

export default {
    title: "Example/Accordion",
    component: Accordion,
};

const Template = (args) => <Accordion {...args} />

export const Faqs=Template.bind({});
Faqs.args = {
    data: [
        {
            title: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            title: "Why do we use it?",
            content: "It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish.",
        },
    ],
};