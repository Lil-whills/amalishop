import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-100 p-8 min-h-screen flex flex-col gap-4 justify-center items-center '>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-4">
        At Amalishop, we are committed to providing our customers with the best shopping experience. We offer a wide range of products to meet all your needs, from electronics to fashion and everything in between. Our team is dedicated to ensuring that you find exactly what you're looking for at competitive prices. We pride ourselves on our excellent customer service and fast shipping. Thank you for choosing Amalishop for your shopping needs!
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact Us
      </button>
    </div>
  )
}

export default About