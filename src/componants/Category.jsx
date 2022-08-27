import React from 'react'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChoppedSkull} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <div className="List">
      <NavLink className="slink" to={'/cuisine/Italian'}>
        <FaPizzaSlice></FaPizzaSlice>
        {/* <h5>Italian</h5> */}
      </NavLink>
      <NavLink className="slink" to={'/cuisine/American'}>
        <FaHamburger></FaHamburger>
        {/* <h5>American</h5> */}
      </NavLink>
      <NavLink  className="slink" to={'/cuisine/Thai'}>
        <GiNoodles></GiNoodles>
        {/* <h5>Thai</h5> */}
      </NavLink>
      <NavLink className="slink" to={'/cuisine/Japanese'}>
        <GiChoppedSkull></GiChoppedSkull>
        {/* <h5>Japanese</h5> */}
      </NavLink>
    </div>
  )
}



export default Category
