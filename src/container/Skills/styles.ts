import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 20px 10px;
  margin: 5em auto;
`;

export const SkillImgDiv = styled.div`
  width: 45%;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  line-height: 2.8em;
  h1 {
    font-size: 40px;
    color: #ccc;
  }

  p {
    font-size: 23px;
    color: rgba(4, 18, 48, 0.9);
  }
`;
