import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PlaceForm.css';

const NewPlace = () => {
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      imageUrl: {
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

  return (
    <form action ="http://localhost:3000/u1/places" method ="POST" className="place-form">
      <Input
        id="title"
        name= "title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        name="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="imageUrl"
        element="input"
        name="image"
        label="Image Url"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid image adress."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        name="adress"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Input
        id="link"
        element="input"
        name="creator"
        label="Link"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid link."
        onInput={inputHandler}
      />
      {!isPending && <Button onClick = {inputHandler} type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>}
      {isPending && <Button onClick = {inputHandler} type="submit" disabled={!formState.isValid}>
        ADDING PLACE...
      </Button>}
    </form>
  );
};

export default NewPlace;
