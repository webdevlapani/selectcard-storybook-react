import { ComponentMeta, ComponentStory } from "@storybook/react"
import SelectCard from "./SelectCard"
import CardMediaImage from "../../assets/images/CardMedia.svg"

export default {
  title: "Component/Card",
  component: SelectCard
} as ComponentMeta<typeof SelectCard>

const Template: ComponentStory<typeof SelectCard> = (args) => <SelectCard {...args} />

export const Default = Template.bind({})

Default.args = {
  thumbnail: CardMediaImage,
  label: "Flood zone 3",
  onClick: (value) => console.log(value)
}
