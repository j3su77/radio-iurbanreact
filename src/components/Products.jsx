import { RiShoppingBagLine } from "react-icons/ri"
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import "../assets/css/products.css";

const Products = () => {
  return (
    <>
      {/* <!-- 1___________________________________ --> */}
      <article class="product__card">
        <div class="product__circle"></div>

        <img src={product1} alt="" class="product__img" />

        <h3 class="product__title">Cacti Plant</h3>

        <span class="product__price">$19.99</span>

        <button class="button--flex product__button">
         
          <RiShoppingBagLine />
        </button>
      </article>
      {/* <!-- 2___________________________________ --> */}
      <article class="product__card">
        <div class="product__circle"></div>

        <img src={product2} alt="" class="product__img" />

        <h3 class="product__title">Cactus Plant</h3>

        <span class="product__price">$19.99</span>

        <button class="button--flex product__button">
          <RiShoppingBagLine />
        </button>
      </article>
      {/* <!-- 3___________________________________ --> */}
      <article class="product__card">
        <div class="product__circle"></div>

        <img src={product3} alt="" class="product__img" />

        <h3 class="product__title">Aloe Vera Plant</h3>

        <span class="product__price">$19.99</span>

        <button class="button--flex product__button">
          <RiShoppingBagLine />
        </button>
      </article>
      {/* <!-- 4___________________________________ --> */}
      <article class="product__card">
        <div class="product__circle"></div>

        <img src={product4} alt="" class="product__img" />

        <h3 class="product__title">Succulent Plant</h3>

        <span class="product__price">$19.99</span>

        <button class="button--flex product__button">
          <RiShoppingBagLine />
        </button>
      </article>
      {/* <!-- 5___________________________________ --> */}
      <article class="product__card">
        <div class="product__circle"></div>

        <img src={product5} alt="" class="product__img" />

        <h3 class="product__title">Green Plant</h3>

        <span class="product__price">$19.99</span>

        <button class="button--flex product__button">
          <RiShoppingBagLine />
        </button>
      </article>
      {/* <!-- 6___________________________________ --> */}
      <article class="product__card">
        <div class="product__circle"></div>

        <img src={product6} alt="" class="product__img" />

        <h3 class="product__title">Green Plant</h3>

        <span class="product__price">$19.99</span>

        <button class="button--flex product__button">
          <RiShoppingBagLine />
        </button>
      </article>
    </>
  );
};

export default Products;
