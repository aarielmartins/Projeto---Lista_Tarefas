import { Link } from 'react-router-dom'
import styled from 'styled-components'

//A TAG "LINK" É PARA ADICIONAR A PÁGINA COM O REACT ROUTER
export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
