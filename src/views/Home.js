import React from 'react'
import styled from 'styled-components';
import UserApi from '../services/UserApi';
import UserCard from '../components/UserCard';

const Header = styled.div`
  height: 5rem;
  width: 100%;
  background-color: orange;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`
const Home = () => {
  const [users, setUsers] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getUsers = async () => {
    try {
      let data = await UserApi().getUserList();
      setUsers(data);
      setLoading(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    loading ? 
    <>
    <Header />
    <Container>
    {users.map((item,index) => 
      <UserCard key={index} item={item} />
    )}
    </Container>
    </>:
    <Container>Loading</Container>
  )
}

export default Home