import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../../features/user/userSlice';
import { useEffect } from 'react';
import * as S from './styles';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        setUser(user);
        navigate('/home');
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result: any) => {
          setUser(result.user);
        })
        .catch((error: any) => console.error(error));
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate('/');
        })
        .catch((error: any) => console.error(error));
    }
  };

  const setUser = (user: any) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const navLinks = [
    {
      title: 'INÍCIO',
      image: 'home-icon.svg',
    },
    {
      title: 'PESQUISA',
      image: 'search-icon.svg',
    },
    {
      title: 'MINHA LISTA',
      image: 'watchlist-icon.svg',
    },
    {
      title: 'ORIGINAIS',
      image: 'original-icon.svg',
    },
    {
      title: 'FILMES',
      image: 'movie-icon.svg',
    },
    {
      title: 'SÉRIES',
      image: 'series-icon.svg',
    },
  ];

  return (
    <S.Nav>
      <S.Logo>
        <img src='/images/logo.svg' alt='Disney+' />
      </S.Logo>

      {!userName ? (
        <S.Login onClick={handleAuth}>LOGIN</S.Login>
      ) : (
        <>
          <S.NavMenu>
            {navLinks.map(link => (
              <Link to='#'>
                <img src={`/images/${link.image}`} alt={link.title} />
                <p>{link.title}</p>
              </Link>
            ))}
          </S.NavMenu>
          <S.SignOut>
            <S.UserImg src={userPhoto} alt={userName}></S.UserImg>
            <S.DropDown>
              <span onClick={handleAuth}>Sair</span>
            </S.DropDown>
          </S.SignOut>
        </>
      )}
    </S.Nav>
  );
};

export default Header;
