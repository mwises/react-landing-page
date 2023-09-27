/* eslint-disable prettier/prettier */
import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';


export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
        <Styled.Container>
          <Styled.TextContainer>
            <Heading>{title}</Heading>
            <TextComponent>{text}</TextComponent>
          </Styled.TextContainer>
          <Styled.ImageContainer>
            <Styled.Image src={srcImg} alt={title}></Styled.Image>
          </Styled.ImageContainer>
        </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.node.isRequired,
  text: P.node.isRequired,
  srcImg: P.node.isRequired,
  background: P.bool,
};
