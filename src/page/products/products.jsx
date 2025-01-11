import { useEffect, useState } from "react"
import { getProducts } from "../../repository/products"
// import styles from './products.module.css'

const Products = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
      async function getData() {
        setProducts(await getProducts());
      }
      if(!products.length) getData();
    }, [products])
  return (
    <div>
      {products.length ? products.map((product) => {
        return (<div key={product.id} >
          <img src={product.fotos[0].src} />
        </div>)
      }) : 
      <div>CARREGANDO</div>}
    </div>
  )
}

export default Products