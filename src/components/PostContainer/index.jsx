import P from 'prop-types';
import * as Styled from './styles';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import { EditModal } from '../EditModal';
import { DeleteModal } from '../DeleteModal';
import { useContext} from 'react';
import { MyContext } from '../../context/context';

export const PostContainer = ({ post }) => {

  function pubDate(date) {
    const now = new Date();
    const datePub = new Date(date);
    const diff = Math.abs(now - datePub);
    const min = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(min / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days + " days ago";
    } else if (hours > 0) {
      return hours + " hours ago";
    } else {
      return min + " min ago";
    }
  };

  const loggedUser = localStorage.getItem('username');
  const {edition, setEdition,
    del, setDel, setPost
  } = useContext(MyContext);

  return (
    <Styled.Container>
      {del && <DeleteModal />}
      {edition && <EditModal />}
      <div className='post_title_div'>
        <h2>{post.title}</h2>
        {loggedUser === post.username &&
          <div className='post_actions'>
            <img src={deleteIcon} alt="Delete" onClick={() => {
                setDel(true);
                setPost(post)
              }} />
            <img src={editIcon} alt="Edit" onClick={() => {
              setEdition(true);
              setPost(post);
              }}/>
          </div>
        }
      </div>
      <div className='post_content_div'>
        <div className='post_user'>
          <span>{post.username}</span>
          <span>{pubDate(post.created_datetime)}</span>
        </div>
        <span className='post_content'>
          {post.content}
        </span>
      </div>
    </Styled.Container>
  );
};

PostContainer.propTypes = {
  post: P.object.isRequired,
};
