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
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = RESOURCES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
