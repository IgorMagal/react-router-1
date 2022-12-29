import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h2>Products page!</h2>
      <ul>
        <li>
          <Link to="/products/book">an old dusty book</Link>
        </li>
        <li>
          <Link to="/products/dagger">a rusty dagger</Link>
        </li>
        <li>
          <Link to="/products/torch">a burned out torch</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
