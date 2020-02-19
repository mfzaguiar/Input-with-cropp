import React from 'react';

import blankAvatar from '../../assets/blank-avatar.png';
import whiteCamera from '../../assets/camera-white.png';

import { Container, Figure, Input } from './styles';

const InputAvatar = ({ onChange, croppedImage }) => {
  return (
    <Container>
      <label>
        <Input
          type="file"
          accept="image/x-png,image/jpeg"
          onChange={onChange}
          onClick={e => {
            e.target.value = null;
          }}
        />
        <Figure>
          {!croppedImage ? (
            <img src={blankAvatar} alt="avatar" />
          ) : (
            <img src={croppedImage} alt="croppedavatar" />
          )}
          <figcaption>
            <img src={whiteCamera} alt="whitecamera" />
          </figcaption>
        </Figure>
      </label>
    </Container>
  );
};

export default InputAvatar;
