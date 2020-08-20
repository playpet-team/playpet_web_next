/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { readableColor } from 'polished';
import { elevations, colors } from '..';

const ThemeBlock = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  padding: 0 8px;
  width: 100%;
`;

const Description = styled.p`
  padding: 0 8px;
  width: 100%;
`;

const ColorBlock = styled.div`
  padding: 8px;
  flex: 1 0 300px;
  max-width: 300px;
`;

const Colors = styled.div``;

interface ColorItemProps {
  color: string;
  main?: boolean;
  whiteText?: boolean;
}
const ColorItem = styled.div<ColorItemProps>`
  ${props =>
    props.main &&
    css`
      height: 80px;
    `}

  ${props =>
    props.whiteText &&
    css`
      color: #ffffff;
    `}
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: ${props => props.color};
  color: ${props => readableColor(props.color)};
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;

  &:focus,
  &:hover {
    box-shadow: ${elevations[13]};
  }
`;

const ColorLabel = styled.div``;
const ColorHex = styled.div``;

export default {
  title: 'SYSTEM|Colors',
};

interface ColorPaletteProps {
  color: string;
}
const ColorPalette = ({ color }: ColorPaletteProps) => (
  <ColorBlock>
    <Colors>
      {[...Array(9)].map((_, i) => (
        <ColorItem key={i.toString()} color={colors[color][i]} main={i === 4}>
          <ColorLabel>{`${color}-${(i + 1) * 1}00`}</ColorLabel>
          <ColorHex>{colors[color][i]}</ColorHex>
        </ColorItem>
      ))}
    </Colors>
  </ColorBlock>
);

export const colorsStory = () => (
  <ThemeBlock>
    <Title>주요 컬러</Title>
    <Description>
      브랜드를 대표하는 컬러로, 포인트 컬러로 주로 사용합니다.
    </Description>
    <ColorPalette color="yellow" />
    <ColorPalette color="orange" />
    <ColorPalette color="skyblue" />
    <ColorPalette color="blue" />

    <Title>보조 컬러</Title>
    <Description>
      배경색으로 사용하거나 성공, 경고 등 사용자에게 시각적인 피드백을 제공할 때
      사용합니다.
    </Description>
    <ColorPalette color="gray" />
    <ColorPalette color="denim" />
    <ColorPalette color="green" />
    <ColorPalette color="red" />
  </ThemeBlock>
);

colorsStory.story = {
  name: 'Overview',
};
