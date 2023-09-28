import React, { useState } from 'react'
import Layout from '../Layouts/Layout'
const { ipcRenderer } = window.require('electron');

const Grammar = () => {
  const [text, setText] = useState<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };


  const handleSubmit = async () => {

    setIsLoading(true)
    
    const response = await fetch("http://192.168.189.220:5001/grammar", {
      method: "POST",
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text
      })
    });

    console.log(response)

    if(!response.ok) {
      setIsLoading(false)
      return;
    }

    const data = await response.json()

    setResponse(data.result)
    setIsLoading(false)
  };
  return (
    <>
        <Layout>
        <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Enter your input for grammatical correction</label>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md bg-blue-600 text-white focus:outline-none focus:bg-blue-600 focus:text-white transition duration-300 ease-in-out`}
            >
             Please enter your text 
            </button>
          </div>
        </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Enter Text:</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2"
              value={text}
              onChange={handleInputChange}
            />
          </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {isLoading && 
          <div className=" text-lg">
            Loading....
          </div>}
        {response && (
          <div className="mt-6">
            <label className="block text-gray-600 mb-2">Response:</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2"
              value={response}
              readOnly
            />
          </div>
        )}
      </div>

        </Layout>
    </>
  );
};

export default Grammar