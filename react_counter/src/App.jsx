import { useState } from 'react'
function App() {
  
  const [number, setNumber] = useState(10);

  let addNumber = () => {
    if(number <= 19 && number >= 0){
      console.log(number)
      setNumber(number + 1)
    }
    
  }

  let removeNumber = () => {
    if(number <=20 && number >0){
      console.log(number)
      setNumber(number - 1)
    }
    
  }

  return (
    <>
      <div className='d-flex justify-center items-center relative'>
      <h1 className=' text-4xl text-center bg-green-600 text-yellow-100 rounded px-4 py-1 mb-4'>React Counter Project</h1>
      </div>


      <h3 className='text-2xl mb-5'>Number {number}</h3>

      <button onClick={addNumber} className='btn bg-teal-300 text-black mr-5 px-3 py-1 rounded'>Add Number {number}</button>
      <button onClick={removeNumber} className='btn bg-teal-300 text-black px-3 py-1 rounded'>Remove Number {number}</button>

    </>
  )
}

export default App
