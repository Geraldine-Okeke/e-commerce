import { v4 as uuidv4 } from 'uuid';
import game from './images/game.png';
import chair from './images/chair.png';
import tv from './images/tv.png';
import keyB from './images/keyB.png';

const SectTwoItems = [
  {
    image: tv,
    name: 'IPS LCD Gaming Monitor',
    price: 160,
    rating: 4,
    num: 100,
    minus: 40,
  },
  {
    image: chair,
    name: 'S-Series Comfort Chair ',
    price: 200,
    rating: 5,
    num: 150,
    minus: 35,
  },
  {
    image: game,
    name: 'HAVIT HV-G92 Gamepad',
    price: 250,
    rating: 3.5,
    num: 120,
    minus: 30,
  },
  {
    image: keyB,
    name: 'AK-900 Wired Keyboard',
    price: 300,
    rating: 1,
    num: 75,
    minus: 25,
  },
];

export default SectTwoItems;
