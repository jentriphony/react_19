import classes from './Header.module.css'

import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'



const Component = () => {



  const navigationLinkActiveClassHandler = useCallback(callbackProps => {

    if(callbackProps.isActive) return classes['navigation-link-active']
    
  }, [])
  
  
  return (

    <header className={ classes.header }>



      <nav>
        <ul>
          <li>
            <NavLink className={ navigationLinkActiveClassHandler } to='/home'>
              home
            </NavLink>
          </li>

          <li>
            <NavLink className={ navigationLinkActiveClassHandler } to='/products/list'>
              products_list 
            </NavLink>
          </li>
        </ul>
      </nav>



    </header>

  )



}



export default Component