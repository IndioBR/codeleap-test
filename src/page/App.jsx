import * as Styled from './styles';
import { SignUp } from '../components/SignupContainer';
import { PostForm } from '../components/PostForm';
import { PostContainer } from '../components/PostContainer';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';

export const App = () => {
  const usr = localStorage.getItem('username');
  const [data, setData] = useState([]);
  const [logged, setLogged] = useState(false);
  const {loading, setLoading} = useContext(MyContext);


  useEffect(() => {
    if (loading) (async () => {
      const req = await fetch('https://dev.codeleap.co.uk/careers/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      const res = await req.json();

      setData(res.results);
      setLoading(false);
    })();
  });

  useEffect(() => {
    if (usr) setLogged(true);
  }, [usr]);

  return (
    <Styled.Container lg={!!logged}>
      {!logged && <SignUp />}
      {logged && (
        <Styled.Page>
          <div className='page_title'>
            <span>CodeLeap Network</span>
          </div>
          <div className='posts_container'>
          <PostForm />
            {data && data.map(item => (
              <PostContainer post={item} key={item.id}/>
            ))}
          </div>
        </Styled.Page>
      )}

    </Styled.Container>
  );
};
