import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  input {
    display: none;
  }
`;

export const Input = styled.input.attrs(props => ({
  type: 'file',
}))``;

export const Figure = styled.figure`
  position: relative;
  width: 180px;
  height: 180px;

  img {
    cursor: pointer;
    width: 180px;
    height: 180px;
    border-radius: 10px;
    border: 2px solid transparent;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.3s;

    object-fit: cover;

    /* &:hover {
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    } */
  }

  figcaption {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    width: inherit;
    height: inherit;
    border-radius: 10px;
    opacity: 0;
    background-color: transparent;
    transition: all ease-in-out 0.3s;

    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.7);
    }

    > img {
      width: 50px;
      height: 50px;
      align-content: center;
    }
  }
`;
