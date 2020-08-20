/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import elevations from './elevations';

const ElevationsBlock = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface BoxProps {
  level: number;
}

const Box = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  box-shadow: ${props => elevations[props.level]};
  margin: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

export default {
  title: 'SYSTEM|Elevations',
};

export const elevationsStory = () => (
  <ElevationsBlock>
    {[...Array(25)].map((_, i) => (
      <Box key={i.toString()} level={i}>
        {i}
      </Box>
    ))}
  </ElevationsBlock>
);

elevationsStory.story = {
  name: 'Overview',
};
