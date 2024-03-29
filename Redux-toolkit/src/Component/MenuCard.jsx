import React from 'react'

export default function MenuCard({Data}) {
   console.log(Data);
  return (
    <>
     <section className='main-card-containar'>
     {Data.map((currentEl)=>{
      const{id,image,name,category,price,description}=currentEl;
      return(
        <>
        <div className="card-containar">
        <div className="card">
          <div className="card-body">
            <samp className="card-number">{id}</samp>
            <h5 className="card-author">{category}</h5>
            <h2 className="card-title">{name}</h2>
            <span className="card-description">
             {description}
            </span>
            <div className="card-read">{price}</div>
          </div>
          <img className="card-image" src={image} alt='image'></img>
          <h3 className="card-tage">order</h3>
        </div>
      </div>
        </>
      )
     })} 
      </section>

      
      </>
)
     
  }