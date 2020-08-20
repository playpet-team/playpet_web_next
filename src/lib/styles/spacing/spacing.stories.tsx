/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { spacing } from '..';
import { Typography } from '../../components';

const SpacingBlock = styled.div``;

export default {
  title: 'SYSTEM|Spacing',
};

export const spacingStory = () => (
  <SpacingBlock css={spacing.padding(2)}>
    <Typography variant="h5">spacing: 8px</Typography>
    <hr />
    <Typography variant="h5">margin</Typography>
    <Typography>spacing.margin(value)</Typography>
    <Typography>spacing.marginRight(value)</Typography>
    <Typography>spacing.marginLeft(value)</Typography>
    <Typography>spacing.marginTop(value)</Typography>
    <Typography>spacing.marginBottom(value)</Typography>
    <Typography>spacing.marginX(value)</Typography>
    <Typography>spacing.marginY(value)</Typography>
    <hr />
    <Typography variant="h5">padding</Typography>
    <Typography>spacing.padding(value)</Typography>
    <Typography>spacing.paddingRight(value)</Typography>
    <Typography>spacing.paddingLeft(value)</Typography>
    <Typography>spacing.paddingTop(value)</Typography>
    <Typography>spacing.paddingBottom(value)</Typography>
    <Typography>spacing.paddingX(value)</Typography>
    <Typography>spacing.paddingY(value)</Typography>
  </SpacingBlock>
);

spacingStory.story = {
  name: 'Overview',
};
