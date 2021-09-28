import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 15rem;
  height: 17rem;
  border: 1px solid #D3D3D3;
  border-radius: 10px;
  box-shadow: 1px 1.5px 1px  #D3D3D3;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05); 
  }
`;
const Title = styled.div`
  padding: 2rem;
  border-radius: 50%;
  background-color: #E0E0E0;
  font-size: 25px;
  width: 2.5rem;
  margin-bottom: 1rem;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 15px;
`;
const Username = styled.div`
  font-style: italic;
  color: #D3D3D3;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 1rem;
`;
const Web = styled.a`
  margin-bottom: 2.5rem;
  font-size: 13px;
  color: #66CCFF;
  font-weight: bold;
`
const Button = styled.button`
  text-transform: uppercase;
  background-color: orange;
  color: white;
  width: fit-content;
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const UserCard = ({ item }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/users/${item.id}/`);
  }

  const getFirstLetter = (str) => str.charAt(0);

  return (
    <Container>
      <Title>{getFirstLetter(item.name)}</Title>
      <Name>{item.name}</Name>
      <Username>@{item.username}</Username>
      <Web href={`https://${ item.website }`}>{`https://${ item.website }`}</Web>
      <Button onClick={handleClick}>more details</Button>
    </Container>
  )
}

export default UserCard