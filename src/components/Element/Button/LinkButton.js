// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

type Props = {
  variant: string
}

const StyledButton = styled(ButtonBase)`
  ${props => props.theme.variants.linkButton[props.variant || 'primary']};
`

export const LinkButton = (props: Props) => 
  <StyledButton {...props} />

LinkButton.propTypes = {
  variant: PropTypes.string
}
