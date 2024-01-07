import { useEffect, useState } from 'react';

function Cart() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/cart")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Your Cart</h1>
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.map((item, index) => (
          <div key={index}>
            {Object.keys(item).map(key => (
              <p key={key}>
                <strong>{key}:</strong> {item[key]}
              </p>
            ))}
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
