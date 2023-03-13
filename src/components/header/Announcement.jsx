import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
    height:30px;
    background:#088F8F;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
`

export default function Announcement() {
  return (
  <Container>
    Super Deal! Free Shipping on Orders Over $50
  </Container>
  )
}

