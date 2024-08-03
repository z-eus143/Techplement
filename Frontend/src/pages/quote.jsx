import Cardview from "../components/cardview";
import Menu from "./menu";

const cardData = [
  {
    title: 'Card 1',
    description: 'Description for card 1',
  },
  {
    title: 'Card 2',
    description: 'Description for card 2',
  },
  {
    title: 'Card 3',
    description: 'Description for card 3',
  },
  {
    title: 'Card 1',
    description: 'Description for card 1',
  },
  {
    title: 'Card 2',
    description: 'Description for card 2',
  },
  {
    title: 'Card 3',
    description: 'Description for card 3',
  },
  {
    title: 'Card 1',
    description: 'Description for card 1',
  },
  {
    title: 'Card 2',
    description: 'Description for card 2',
  },
  {
    title: 'Card 3',
    description: 'Description for card 3',
  },
  {
    title: 'Card 1',
    description: 'Description for card 1',
  },
  {
    title: 'Card 2',
    description: 'Description for card 2',
  },
  {
    title: 'Card 3',
    description: 'Description for card 3',
  },
  {
    title: 'Card 1',
    description: 'Description for card 1',
  },
  {
    title: 'Card 2',
    description: 'Description for card 2',
  },
  {
    title: 'Card 3',
    description: 'Description for card 3',
  },
];

export default function Quote() {
  return(
    <>
    <Menu/>
    <Cardview cards={cardData}/>
    </>
  )
}





