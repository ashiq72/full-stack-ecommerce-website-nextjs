import ProductDetails from "@/components/ProductDetails/ProductsDetails";

const ProductView = async ({ params }) => {
  const res = await fetch(
    `https://the-kawaii-factory-server-ashik72.vercel.app/products/${params.id}`
  );
  const product = await res.json();
  console.log(params.id);
  return (
    <div>
      <ProductDetails key={product._id} data={product} />
    </div>
  );
};
export default ProductView;
