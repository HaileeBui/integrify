import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import UserApi from '../services/UserApi'

const Container = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	margin: auto;
	margin-top: 5rem;
	border: 1px solid #D3D3D3;
	border-radius: 2px;
  width: fit-content;
  align-items: start;
	@media (max-width: 500px) {
    flex-direction: column
  }
`
const Item = styled.div`
  font-weight: bold;
`
const Ul = styled.ol`
  font-weight: bold;
  padding-left: .3rem;
  margin: 0;
`
const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getUser = async () => {
      try {
        let data = await UserApi().getUserDetail(id);
        setUser(data);
        setLoading(true);
      } catch (e) {
        console.log(e.message);
      }
    };
    getUser();
  }, [id]);



  return (
    loading ?
    <Container>
      <Item>- name: {user.name} </Item>
      <Item>- username: {user.username} </Item>
      <Item>- email: {user.email} </Item>
      <Item>- phone: {user.phone} </Item>
      <Item>- company: {user.company.name} </Item>
      <Item>- website: {user.website} </Item>
      <Item>- address: </Item>
      <Ul>{'\u2022'} street: {user.address.street}</Ul>
      <Ul>{'\u2022'} suite: {user.address.suite}</Ul>
      <Ul>{'\u2022'} city: {user.address.city}</Ul>
      <Ul>{'\u2022'} zipcode: {user.address.zipcode}</Ul>
    </Container>
    : <Container>Loading</Container>
  )
}

export default Detail