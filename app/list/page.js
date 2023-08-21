"use client"

import { useState } from "react"

export default function List (){
  let data = [
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

  const [products, setProducts] = useState(data);

  return (
    <div>
      <h2>상품목록</h2>
      { 
        products.map((e, i)=>{
          return (
            <div className="food" key={i}>
              <h4> {e.name} {e.price}</h4>
              <span>{e.amount}</span>
              <button onClick={(prev)=>{
                setProducts((prev) => {[...products].map((e, idx)=>{
                  if(i === idx) return e.amount+1;
                })})
              }}> + </button>
            </div>
          )
        })
      }
    </div>
  )
}