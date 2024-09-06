import styled from 'styled-components'

export const Li = styled.li``
export const Button = styled.button`
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.isActive ? '#db1c48' : '#ffffff')};
  border-radius: 20px;
  font-size: 1rem;
  border: 2px solid #db1c48;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 1.5rem;
  cursor: pointer;
`
