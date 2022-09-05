import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Page = () => {



  const routerNavigateHook = useNavigate()
  useEffect(() => {

    routerNavigateHook('/products/list', { replace: true })

  }, [routerNavigateHook])
  
  
  return (

    <section>



      <h1>home_room</h1>



    </section>

  )



}



export default Page