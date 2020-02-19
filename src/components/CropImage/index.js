import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

import getCroppedImg from './cropImage';

import InputAvatar from '../InputAvatar';

import { Container, MainCrop, Control, Button, StyledSlider } from './styles';

const CropImage = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState(4 / 3);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  function onCropChange(crop) {
    setCrop(crop);
  }

  function onZoomChange(zoom) {
    setZoom(zoom);
  }

  async function showCroppedImage() {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    setCroppedImage(croppedImage);
    setImageSrc('');
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setAspect(4 / 3);
  }

  function readFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  async function onFileChange(e) {
    console.log('entrou');
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  }

  return (
    <Container>
      <InputAvatar
        onChange={e => onFileChange(e)}
        croppedImage={croppedImage}
      />
      {imageSrc && (
        <>
          <MainCrop>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={onCropChange}
              onZoomChange={onZoomChange}
              onCropComplete={(croppedArea, croppedAreaPixels) =>
                onCropComplete(croppedArea, croppedAreaPixels)
              }
            />
          </MainCrop>
          <Control>
            <StyledSlider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, zoom) => setZoom(zoom)}
            />
            <Button onClick={() => showCroppedImage()}>Cortar imagem</Button>
          </Control>
        </>
      )}
    </Container>
  );
};

export default CropImage;
