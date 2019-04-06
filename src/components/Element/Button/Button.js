// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

type Props = {
  variant: string
}

const StyledButton = styled(ButtonBase)`
  ${props => props.theme.variants.button[props.variant || 'primary']};
`

export const Button = (props: Props) => 
  <StyledButton {...props} />

Button.propTypes = {
  variant: PropTypes.string
}
