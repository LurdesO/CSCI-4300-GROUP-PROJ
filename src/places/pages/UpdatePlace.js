import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

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

const UpdatePlace = () => {
  const [isLoading, setIsPending] = useState(true);
  const placeId = useParams().placeId;
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      },
      link: {
        value: '',
        isValid: false
      },
      imageUrl: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedPlace = RESOURCES.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          },
          address: {
            value: identifiedPlace.address,
            isValid: true
          },
          link: {
            value: identifiedPlace.link,
            isValid: true
          },
          imageUrl: {
            value: identifiedPlace.imageUrl,
            isValid: true
          }
        },
        true
      );
    }
    setIsPending(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    setIsPending(true);
    console.log(formState.inputs);
    fetch('/places/new', {
      method: 'POST',
      headers: {"Content-Type": "apllication/json"},
      body: JSON.stringify(formState.inputs)
    }).then(() => {
      console.log('new place added');
      setIsPending(false);
      history.push('/u1/places');
    })
  };

  

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
        initialValue={formState.inputs.address.value}
        initialValid={formState.inputs.address.isValid}
      />
      <Input
        id="link"
        element="input"
        label="Link"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid link."
        onInput={inputHandler}
        initialValue={formState.inputs.link.value}
        initialValid={formState.inputs.link.isValid}
      />
      <Input
        id="imageUrl"
        element="imageUrl"
        label="Image URL"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid image URL."
        onInput={inputHandler}
        initialValue={formState.inputs.imageUrl.value}
        initialValid={formState.inputs.imageUrl.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
