import styled from 'styled-components';
import Section from '../Section/Section';
import portrait from './assets/karolina-bauman.png';

const PhotoSection = styled(Section)`
  grid-column: span 1;
  overflow: hidden;
  min-height: 320px;

  @media (max-width: 560px) {
    grid-column: span 1;
  }
`;

const Portrait = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
`;

function PhotoSectionContent() {
  return (
    <PhotoSection aria-label="Portrait">
      <Portrait src={portrait} alt="Karolina Bauman" />
    </PhotoSection>
  );
}

export default PhotoSectionContent;
