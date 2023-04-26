import * as Styled from './styles';
import { useContext, useState } from 'react';
import { MyContext } from '../../context/context';

export const EditModal = () => {
  const {setEdition, setLoading, post} = useContext(MyContext);
  const [cont, setCont] = useState(post.content);
  const [title, setTitle] = useState(post.title);

  const handleEdit = async (e) => {
    e.preventDefault();

    const body = {
      title,
      content: cont,
    }

    const req = await fetch(`https://dev.codeleap.co.uk/careers/${post.id}/`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });

    await req.json();
    setEdition(false);
    setLoading(true);
  }

  return (
    <Styled.Container>
       <div className="container">
        <h2>Edit Item</h2>
        <form onSubmit={handleEdit}>
            <label htmlFor="edit_form__title">Title</label>
            <input type="text" id='edit_form__title' placeholder='Hello World' value={title} onChange={e => setTitle(e.target.value)}/>
            <label htmlFor="edit_form__content">Content</label>
            <textarea type="text" id='edit_form__content' placeholder='Content Here' value={cont} onChange={e => setCont(e.target.value)}/>
            <div className='edit_form__actions'>
              <div className='edit_form__cancel' onClick={() => setEdition(false)}>
                <span>Cancel</span>
              </div>
              <button className='edit_form__confirm' type='submit'>Save</button>
            </div>
        </form>
       </div>
    </Styled.Container>
  );
};
