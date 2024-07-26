import React from 'react'

const Contact = () => {
  return (
    <div className="container text-center m-auto mt-4">
      <h1 className='text-2xl'>Contact Us</h1>
      <form>
        <input type="name" placeholder='First Name' className=' p-2 m-2 border border-black' />
        <input type="name" placeholder='Last Name' className=' p-2 m-2 border border-black' />
        <button data-testid="test-btn" className='p-2 rounded-md bg-black text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
