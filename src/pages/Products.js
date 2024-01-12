import { useEffect, useState } from 'react';

function Products() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/products").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, []);

  // Function to handle add to cart action
  const addToCart = (id, quantity) => {
    // Assuming a POST request is required, adjust as necessary
    fetch(`/cart/${id}/${quantity}`, {
      method: 'POST',
      // Include headers and other configurations as required by your API
    })
    .then(response => response.json())
    .then(data => {
      console.log('Item added to cart:', data);
      // Handle response or redirect user as needed
    })
    .catch(error => {
      console.error('Error adding item to cart:', error);
    });
  };

  return (
    <div className="App">
      <h1>Products</h1>
      {(typeof backendData === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.map((item) => (
          <div key={item.id}>
            <p>Item: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => addToCart(item.id, 1)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;
