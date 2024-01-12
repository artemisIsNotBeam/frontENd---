import { useEffect, useState } from 'react';

function Cart() {
  const [backendData, setBackendData] = useState([]);
  const [productInfo, setproductInfo] = useState([]);

  useEffect(() => {
    fetch("/cart")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
        data.map((item)=>{  
          
          fetch(`/products/${item.productId}`)
            .then(response=>response.json())
            .then(productData=>{
              setproductInfo((prevData)=>[...prevData,productData]);
            })
        });

      });
  }, []);

  return (
    <div className="App">
      <h1>Your Cart</h1>
      {backendData.length === 0 ? (
        <p>Loading... | this will only work if you're signed in</p>
      ) : (
        backendData.map((item) => (
          <div>
            <p>quantity: {item["quantity"]}</p>
            <p>productId: {item["productId"]}</p>
{/* Find the matching productInfo based on productId */}
{productInfo.find(product => product.id === item.productId)?.name && (
              <p>{productInfo.find(product => product.id === item.productId).name}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
