// import React from 'react';
import { Anchor as GrommetAnchor } from 'grommet';
import styled, { css } from 'styled-components';
// There is a grommet-styles package that exports some theme utilities
// You can also use any of the ones exported by the grommet package
// These can be imported from 'grommet/utils'
import { colorStyle } from 'grommet-styles';
export const Anchor = styled(GrommetAnchor)`
  ${props =>
    props.hoverColor &&
    css`
      :hover {
        ${colorStyle('color', props.hoverColor, props.theme)}
        ${colorStyle('stroke', props.hoverColor, props.theme)}
      }
    `}
`;