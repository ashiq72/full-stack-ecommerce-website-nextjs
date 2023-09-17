import Home from "@/components/Home/Home";

async function getProducts() {
  const res = await fetch(
    "https://the-kawaii-factory-server-ashik72.vercel.app/products"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HomePage = async () => {
  const products = await getProducts();
  return (
    <main className="overflow-hidden">
      <Home products={products} />
    </main>
  );
};
export default HomePage;
