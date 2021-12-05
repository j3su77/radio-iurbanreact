import Products from "../../components/Products"
import "./productssection.css"

const ProductsSection = () => {
    return (
        <section class="product section container" id="products">
            <h2 class="section__title-center">
                Check out our <br /> products
            </h2>

            <p class="product__description">
                Here are some selected plants from our showroom, all are in excellent 
                shape and has a long life span. Buy and enjoy best quality.
            </p>
            <div class="product__container grid">

            <Products />
               
           
            </div>
        </section>
    )
}

export default ProductsSection
