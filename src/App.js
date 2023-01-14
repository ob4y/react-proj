import React from 'react'
import './App.css'
import Card from './Card'

const courses = [
  { id: 'PSYCH100', name: 'Intro to Psychology', image: 'https://www.udc.edu/social-udc/wp-content/uploads/sites/24/2018/03/Importance-of-Psychology_UDC.jpg'},
  { id: 'MATH230', name: 'Calculus AB', image: 'https://www.thoughtco.com/thmb/irSi_hwriBZL3QbGsCiiNsgaSWI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/calculus-on-blackboard-79338340-5be4695946e0fb0026d6856f.jpg' },
  { id: 'HIST100', name: 'US History', image: 'http://pioneerinstitute.org/wp-content/uploads/Constitution-and-flag-1024x682.jpg' }
]


function App() {
  return (
    <div className="app">
      <div className='course-container'>
        {courses.map((course)=><Card course={course}/>)}
      </div>
      
    </div>
  )
}

export default App