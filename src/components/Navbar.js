import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'



const Nav = styled.div`
     height: auto;
     width: 100%;
     color: white;
     border: 1px solid #000;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px 20px;

  @media screen and (max-width:900px){
    padding: 17px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
     `

const Collect = styled.div`  
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;

`
const Ham = styled.div`
     height: auto;
     width: 50px;
     border: 1px solid #000;

     .menu-ai{
       display: none;
     }


     @media screen and (max-width: 900px){
      .menu-ai{
       display: flex;
     }
     font-size: 20px;
     }
 `

 
const Get = styled.div`
        height: auto;
     width: 130px;
     border: 1px solid #fff;


     @media screen and (max-width: 900px){
       display: none;
     }
`

const ProfileIcon = styled.div`
    height: auto;
     width: auto;
     display: none;

     @media screen and (max-width: 900px){
       display: flex;
       font-size: 20px;
     }

`

const NavLinks = styled.div`
        height: auto;
        display: none;
     width: 200px;
     background-color: #000;
     border: 1px solid #fff;

     .ximes{
       text-align: end;
       font-size: 20px;
       padding: 20px;
     }

     @media screen and (max-width: 900px){
       display: flex;
       flex-direction: column;
       width: 50%;
       position:fixed;
       top: 0;
       border: 1px solid red;
       height: 100vh;
       left: ${({click}) => (click? 0 : '-100%')};
       z-index: 900;
       transition: all 0.5s ease;
     }
`
const NavLink = styled.div`
    padding-left: 20px;
    line-height: 50px;
`



const Navbar = () => {

  const[click, setClick ] = useState(false)
  const handleClick =() => setClick(!click)
  return (
    <Nav>
      <Collect>
        <Ham className='ham' onClick={handleClick}>
    <AiOutlineMenu className='menu-ai' /> 
          
          </Ham>
        <Get className='get-started'>Get Started</Get>
        <ProfileIcon className='profile-icon'><CgProfile/></ProfileIcon>
      </Collect>
      <NavLinks className="navbar-links" onClick={handleClick} click={click}>
        <div className='ximes'  onClick={handleClick}> <FaTimes className='menu-ai' /></div>
          <NavLink>Home</NavLink>
          <NavLink>Jobs</NavLink>
          <NavLink>Freelance</NavLink>
          <NavLink>Business</NavLink>
          <NavLink>School Album</NavLink>
          <NavLink>Investment</NavLink>
        </NavLinks>
    </Nav>
  )
}

export default Navbar