// import { range } from './utils';

function StarRating({ rating }) {


  const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === "undefined") {
        end = start;
        start = 0;
    }
  
    for (let i = start; i < end; i += step) {
      output.push(i)
    }
  
    return output;
  };

  console.log(range(rating));

  
  const printStar = range(rating).map(rating => {
   return <img key={rating}
    alt=""
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />

  })
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

  return (
    <>
     <div className="star-wrapper">{printStar}</div>
    </>
  )
}

export default StarRating;
