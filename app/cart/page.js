export default function Cart () {
  let products = [
    {
      name: "토마토맛 토",
      price: 10,
      amount: 1
    },
    {
      name: "파스타 사스타",
      price: 20,
      amount: 2
    },
    {
      name: "피망 피맛 피자",
      price: 40,
      amount: 5
    }
  ]
  return (
    <div>
      <h2>장바구니</h2>
      {products.map(product=>{return(<CartItem {...product}/>);})}
    </div>
  )
}

function CartItem({name, price, amount}) {
  return(
    <div className="cart-item">
      <p>{name}</p>
      <p>${price}</p>
      <p>{amount}</p>
    </div>
  );
}