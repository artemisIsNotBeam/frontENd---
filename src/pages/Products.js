import { useEffect, useState } from 'react';

function Products() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/products").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="App">
      <h1>
        Products
      </h1>
      {(typeof backendData === 'undefined') ? (
        <p>loading</p>
      ): (
        // in this scenario, the () represents jsx and {} means javascript
        backendData.map(item => (
          <>
            <p>Item: {item["name"]}</p>
            <p>description: {item["description"]}</p>
            <p>price: {item["price"]}</p>
          </>
        ))
      )}
    </div>
  );
}

export default Products;
