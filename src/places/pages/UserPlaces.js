import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const RESOURCES = [
 {
    id: 'p1',
    title: 'Food Bank of Northeast Georgia',
    description: 'We envision a community in which no neighbor experiences hunger.',
    imageUrl:
      'https://foodbanknega.org/wp-content/uploads/2022/02/main-logo-1.png',
    address: '861 Newton Bridge Rd Athens, GA 30607',
    location: {
      lat: 34.0024821,
      lng: -83.4013562
    },
    link: 'https://foodbanknega.org/',
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Athens Area Emergency Food Bank',
    description: 'Serving our Community Since 1980',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5555fc00e4b0e3eb2ced1494/1544108035891-71C0XP0I804ZJA9TQDOP/emergency+food+bank.jpeg?format=300w',
    address: '440 Barber Street Athens, Georgia 30601',
    location: {
      lat: 33.9688268,
      lng: -83.3863892
    },
    link: 'http://athensfoodbank.org/',
    creator: 'u1'
  },
  {
    id: 'p3',
    title: 'Weather',
    description: 'See the hourly forecast in Athens!',
    imageUrl:
      'https://i.ytimg.com/vi/hLSWIZEC60A/maxresdefault.jpg',
    link: 'https://weather.com/weather/hourbyhour/l/00937b933429ee97511efe27724dec86a7e3e692232b8aeee9fcabb550664168',
    creator: 'u3'
  },
  {
    id: 'p4',
    title: 'LifeStance Health',
    description: 'Our team works to provide mental health treatments to those suffering from a variety of mental health disorders.',
    imageUrl: 'https://assets-global.website-files.com/5cb5162c145f7c1a41cbdb88/5ee2a0bf7b5061e669043fc9_lifestance%402x.jpg',
    address: '745 S Milledge Ave Suite 1A Athens, GA 30605',
    link: 'https://www.mygbhp.com/location/athens-ga/?utm_source=gmb&utm_medium=organic&utm_campaign=locations',
    creator: 'u4'
  },
  {
    id: 'p5',
    title: 'Advantage Behavioral Health System',
    description: 'Where Health Meets Hope',
    imageUrl:
      'http://www.advantagebhs.org/__static/a7f3ba59604e9934b809ca21cfbc0b00/advantage-1-design.png',
    address: '240 Mitchell Bridge Rd, Athens, GA 30606',
    link: 'https://www.advantagebhs.org/',
    creator: 'u4'
  },
  {
    id: 'p6',
    title: 'Athens Area Homeless Shelter',
    description: 'Provides collaborative, comprehensive services to homeless individuals and families working toward sustainable independence.',
    imageUrl:
      'https://static.wixstatic.com/media/5d2d98_ab5a7cbba3a14c69a52c48b66fbf95bd~mv2_d_2375_1575_s_2.jpg/v1/fit/w_2500,h_1330,al_c/5d2d98_ab5a7cbba3a14c69a52c48b66fbf95bd~mv2_d_2375_1575_s_2.jpg',
    address: '620 Barber St, Athens, GA 30601',
    location: {
      lat: 33.968815,
      lng: -83.386057
    },
    link: 'https://www.helpathenshomeless.org/',
    creator: 'u2'
  },
  {
    id: 'p7',
    title: 'National Weather Service',
    description: 'Check for any Hazardous Weather Conditions in Athens.',
    imageUrl: 'https://kicd-am.sagacom.com/files/2016/10/National-Weather-Service-DL-1200x768.jpg',
    address: 'Athens, GA',
    location: { 
      lat: 33.9519,
      lng: -83.3576
    },
    link: 'https://forecast.weather.gov/MapClick.php?lat=33.9582&lon=-83.3731#.Y4ar3ezMK3I',
    creator: 'u3'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = RESOURCES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
