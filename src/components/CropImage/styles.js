import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const MainCrop = styled.div`
  bottom: 80px;
`;

export const Control = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: #3f51b5;
  color: #fff;
  font-weight: bold;
  transition: ease 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledSlider = styled(Slider)`
  margin-bottom: 5px;
`;
