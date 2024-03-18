import { useCallback, useState,useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(true)
  const [char , setChar] = useState(true)
  const [password, setPassword] = useState('')
  
  const passwordGenerator = useCallback(()=> {
    let chars = ''
    if(num) chars += '0123456789'
    if(char) chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = ''
    for (let i = 1; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(password)
  } ,[length, num, char, password]) 

  useEffect(()=>{passwordGenerator()},[length, num, char])
  return (
    <>
    
    <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
    <h2 className=' text-center px-5 py-3' >Password Generator</h2>
      <div className=" flex shadow rounded-lg overflow-hidden mb-4" >
      
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly />

        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' >Copy</button>
        </div> 
        <div className='flex justify-between items-center px-5 py-1'>
        <input type="range" className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
        <label >Length: {length}</label>
        </div>
        <div className='flex justify-between items-center px-5 py-1'>
          <label>Include numbers:</label>
          <input type="checkbox" checked={num} onChange={() => setNum(!num)} className="mr-2"/>
          <label>Include letters:</label>
          <input type="checkbox" checked={char} onChange={() => setChar(!char)}/>
          </div>
    </div>
    </>
  )
}

export default App
