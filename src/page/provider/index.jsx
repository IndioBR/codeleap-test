import P from 'prop-types';
import { useState } from 'react';
import {MyContext} from '../../context/context';

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [edition, setEdition] = useState(false);
  const [del, setDel] = useState(false);
  const [post, setPost] = useState({});

  const values = {
    loading, setLoading,
    edition, setEdition,
    del, setDel,
    post, setPost,
  }
  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: P.node.isRequired,
};
