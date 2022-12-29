import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h2>This is a product detail page</h2>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
