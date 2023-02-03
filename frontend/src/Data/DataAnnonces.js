// import house images
import House1 from '../media/houses/house1.png';
import House2 from '../media/houses/house2.png';
import House3 from '../media/houses/house3.png';
import House4 from '../media/houses/house4.png';
import House5 from '../media/houses/house5.png';
import House6 from '../media/houses/house6.png';
import House7 from '../media/houses/house7.png';
import House8 from '../media/houses/house8.png';
import House9 from '../media/houses/house9.png';
import House10 from '../media/houses/house10.png';
import House11 from '../media/houses/house11.png';
import House12 from '../media/houses/house12.png';
// import house large images
import House1Lg from '../media/houses/house1lg.png';
import House2Lg from '../media/houses/house2lg.png';
import House3Lg from '../media/houses/house3lg.png';
import House4Lg from '../media/houses/house4lg.png';
import House5Lg from '../media/houses/house5lg.png';
import House6Lg from '../media/houses/house6lg.png';
import House7Lg from '../media/houses/house7lg.png';
import House8Lg from '../media/houses/house8lg.png';
import House9Lg from '../media/houses/house9lg.png';
import House10Lg from '../media/houses/house10lg.png';
import House11Lg from '../media/houses/house11lg.png';
import House12Lg from '../media/houses/house12lg.png';

// import apartments images
import Apartment1 from '../media/appartement/a1.png';
import Apartment2 from '../media/appartement/a2.png';
import Apartment3 from '../media/appartement/a3.png';
import Apartment4 from '../media/appartement/a4.png';
import Apartment5 from '../media/appartement/a5.png';
import Apartment6 from '../media/appartement/a6.png';
// import apartments large images
import Apartment1Lg from '../media/appartement/a1lg.png';
import Apartment2Lg from '../media/appartement/a2lg.png';
import Apartment3Lg from '../media/appartement/a3lg.png';
import Apartment4Lg from '../media/appartement/a4lg.png';
import Apartment5Lg from '../media/appartement/a5lg.png';
import Apartment6Lg from '../media/appartement/a6lg.png';

// import agents images
import Agent1 from '../media/agents/agent1.png';
import Agent2 from '../media/agents/agent2.png';
import Agent3 from '../media/agents/agent3.png';
import Agent4 from '../media/agents/agent4.png';
import Agent5 from '../media/agents/agent5.png';
import Agent6 from '../media/agents/agent6.png';
import Agent7 from '../media/agents/agent7.png';
import Agent8 from '../media/agents/agent8.png';
import Agent9 from '../media/agents/agent9.png';
import Agent10 from '../media/agents/agent10.png';
import Agent11 from '../media/agents/agent11.png';
import Agent12 from '../media/agents/agent12.png';

export const AnnonceData = [
  {
    id: 1,
    type: 'Vente',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    wilaya: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 ',
    year: '2016',
    price: '110000DA',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 2,
    type: 'Location pour vacance',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    wilaya: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 ',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 3,
    type: 'Echange',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    wilaya: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 ',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 4,
    type: 'Location',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    wilaya: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 ',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 5,
    type: 'Vente',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    wilaya: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 ',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 6,
    type: 'Echange',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    wilaya: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 ',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 7,
    type: 'Location',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    wilaya: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 ',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 8,
    type: 'Location pour vacances',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    wilaya: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 ',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 9,
    type: 'Echange',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    wilaya: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 ',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 10,
    type: 'Location pour vacances',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    wilaya: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 ',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 11,
    type: 'Echange',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    wilaya: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 ',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 12,
    type: 'Vente',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    wilaya: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 ',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 13,
    type: 'Location pour vacances',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    wilaya: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 ',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 14,
    type: 'Location',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    wilaya: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 ',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 15,
    type: 'Vente',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    wilaya: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 ',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 16,
    type: 'Location',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    wilaya: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 ',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 17,
    type: 'Echange',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    wilaya: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 ',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
  {
    id: 18,
    type: 'Vente',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    wilaya: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 ',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      address:'Alger xxxxxxxxxx',
      phone: '0123 456 78910',
      email: 'chouchougmail.com',
    },
  },
];