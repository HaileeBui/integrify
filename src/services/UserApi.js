const baseUrl = 'https://jsonplaceholder.typicode.com/users/'
const UserApi = () => {
  const getUserList = async () => {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('fetchGET error: ' + response.status);
    }
    return await response.json();
  };
  const getUserDetail = async (id) => {
    const response = await fetch(baseUrl + id);
    if (!response.ok) {
      throw new Error('fetchGET error: ' + response.status);
    }
    return await response.json();
  };

  return {
    getUserList,
    getUserDetail
  }
}

export default UserApi;