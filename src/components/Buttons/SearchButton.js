import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import { IconButton } from '../Element'

export const SearchButton = props => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Search} {...props} />}
    </ThemeConsumer>
)

MenuButton.propTypes = {
    variant: PropTypes.string
}
