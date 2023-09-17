async function getData() {
  const res = await fetch("http://localhost:5000/categories");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Contact = async () => {
  const data = await getData();
  console.log(data);
  return <div> Contact page</div>;
};
export default Contact;
