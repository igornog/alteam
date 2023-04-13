import { Link } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { black } from '../../utils/colors'

const StyledLink = styled(Link)`
  color: ${black};
  text-decoration: none;
  transition: all 0.25s ease-in-out;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const CustomLink: React.FC<Props> = (props: Props) => {
  return <StyledLink>{props.children}</StyledLink>
}

interface Props {
  children: React.ReactNode
}

export default CustomLink
