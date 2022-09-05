import { Link, Outlet } from 'react-router-dom'



const Page = () => {

    
  
  return (

    <section>
      
      
        
      <h1>home</h1>

      <Link to='room'>
        room
      </Link>

      <Outlet />
      
      
      
    </section>

  )



}



export default Page