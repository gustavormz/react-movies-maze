import React from 'react';
import PropTypes from 'prop-types';
import {
  Container
} from '@mui/material';

const ContainerBase = ({
  children,
  maxWidth
}) => (
  <Container
    maxWidth={ maxWidth }>
    { children }
  </Container>
);

ContainerBase.propTypes = {
  children: PropTypes.element,
  maxWidth: PropTypes.string
};

ContainerBase.defaultProps = {
  maxWidth: 'xl'
};

export default ContainerBase;
