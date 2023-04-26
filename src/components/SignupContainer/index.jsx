import { useContext, useState } from 'react';
import * as Styled from './styles';
import { MyContext } from '../../context/context';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const {setLoading} = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!username) return;
    localStorage.setItem('username', username);
    setLoading(true);
  }

  return (
    <Styled.Container user={!!username}>
      <h2>Welcome to CodeLeap network!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='signup'>Please enter your username</label>
        <input type="text" id='signup' placeholder='Insert your username here...' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button type='submit'>ENTER</button>
      </form>
    </Styled.Container>
  );
};
