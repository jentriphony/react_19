import { Link } from 'react-router-dom'



const Page = () => {



  return (

    <section>



      <h1>products_list</h1>

      <ul>
        <li>
          <Link to='/products/product_1'>
            product_1
          </Link>
        </li>

        <li>
          <Link to='/products/product_2'>
            product_2
          </Link>
        </li>
        
        <li>
          <Link to='/products/product_3'>
            product_3
          </Link>
        </li>
      </ul>



    </section>

  )



}



export default Page