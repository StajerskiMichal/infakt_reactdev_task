import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Ref = styled(Link)`
  text-decoration: none;
  margin: 1rem 0;
  color: #ffffff;
  padding: 10px 20px;
  display: inline-block;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`
export default Ref