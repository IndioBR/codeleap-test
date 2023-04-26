import P from 'prop-types'
import * as Styled from './styles';
import logo from '../../assets/cl.svg';

export const InitialPage = ({ load }) => {
  return (
    <Styled.Container>
      <img src={logo} alt="logo" />
    </Styled.Container>
  );
};

InitialPage.propTypes = {
  load: P.bool.isRequired
}
