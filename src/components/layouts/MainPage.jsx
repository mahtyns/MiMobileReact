import React from 'react'
import './styles/layoutStyles.css';
import PageTitle from '../atoms/PageTitle';
import { Link } from "react-router-dom";
import MainPageImage from '../atoms/MainPageImage';
import MainPageButton from '../atoms/MainPageButton';

const MainPage = () => {
  return (
    <div className='mainPageContainer'>
          <div className="titleBar">
            <PageTitle content={'Welcome to our shop'} />
          </div>
          <MainPageImage />
          <Link to='/products'>
          <MainPageButton content={'Shop Products'} />
          </Link>
    </div>
  )
}

export default MainPage