// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const square = entry.target.querySelector('.square')
//
//     if (entry.isIntersecting) {
//       square.classList.add('square-animation')
//       return // if we added the class, exit the function
//     }
//
//     // We're not intersecting, so remove the class!
//     square.classList.remove('square-animation')
//   })
// })
//
// observer.observe(document.querySelector('.square-wrapper'))
import React from 'react'
import { useInView } from 'react-intersection-observer'
import * as styles from './animation-test.module.css'
const LazyAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  // <div className={`${classes.container} ${classes.border_radius}`}></div>

  return (
    <div className="square-wrapper">
      <div
        ref={ref}
        className={`${inView ? 'styles.squareTransition' : ''} ${
          styles.square
        }`}
      ></div>
    </div>
  )
}

export default LazyAnimation
