import React, { useState, useEffect } from "react";

function UseEffect() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("Component unmounted, cleanup performed");
    };
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>UseEffect Starts</h1>
      <h1>Products:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
      <h1>UseEffect Ends</h1>
    </div>
  );
}

export default UseEffect;
