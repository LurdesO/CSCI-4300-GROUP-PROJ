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
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
