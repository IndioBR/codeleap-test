import { MyContext } from '../../context/context';
import * as Styled from './styles';
import { useContext, useState } from 'react';

export const PostForm = () => {
  const [cont, setCont] = useState('');
  const [title, setTitle] = useState('');
  const usr = localStorage.getItem('username');
  const {setLoading} = useContext(MyContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username: usr,
      title,
      content: cont,
    }
    const req = await fetch('https://dev.codeleap.co.uk/careers/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (req.status !== 201) throw new Error();
    await req.json();
    setLoading(true);
  }

  return (
    <Styled.Container tt={!!title} ctt={!!cont}>
      <h1>What's on your mind?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="post_form__title">Title</label>
        <input type="text" id="post_form__title" placeholder='Hello World' value={title} onChange={e => setTitle(e.target.value)}/>
        <label htmlFor="post_form__content">Content</label>
        <textarea type="text" id="post_form__content" placeholder='Write here...' value={cont} onChange={e => setCont(e.target.value)}/>
        <button type='submit'>Create</button>
      </form>
    </Styled.Container>
  );
};
