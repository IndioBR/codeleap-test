import * as Styled from './styles';
import { useContext } from 'react';
import { MyContext } from '../../context/context';

export const DeleteModal = () => {
  const {setDel, setLoading, post, setPost} = useContext(MyContext);

  const handleDelete = async () => {
    const req = await fetch(`https://dev.codeleap.co.uk/careers/${post.id}/`, {
      method: 'DELETE',
    });
    if (req.status !== 204) throw new Error(req);
    setDel(false);
    setLoading(true);
    setPost({})
  };

  return (
    <Styled.Container>
      <div className='container'>
        <h3>Are you sure you want to delete this item?</h3>
        <div className='delete_post__actions'>
          <div className='delete_post__cancel' onClick={() => setDel(false)}>
            <span>Cancel</span>
          </div>
          <div className='delete_post__confirm' onClick={() => handleDelete()}>
            <span>Delete</span>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};
