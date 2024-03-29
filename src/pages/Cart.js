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

  const del = (id) =>{
    fetch(`/cart/${id}`,{
      method:'delete',
    })
  }

  return (
    <div className="App">
      <h1>Your Cart</h1>
      {backendData.length === 0 ? (
        <p>Loading... | this will only work if you're signed in</p>
      ) : (
        <>
        {backendData.map((item) => (
          <div>
            <p>quantity: {item["quantity"]}</p>
            
{productInfo.find(product => product.id === item.productId)?.name && (
              <p>item: {productInfo.find(product => product.id === item.productId).name}</p>
            )}
            <button onClick={()=>del(item["productId"])}>delete</button>
          </div>
        ))}
        </>
      )}
    </div>
  );
}

export default Cart;
