import React, { useState } from "react";
import Layout from "../Layouts/Layout";

const DocSum = () => {
  const [inputType, setInputType] = useState<"document" | "text">("document");
  const [text, setText] = useState<string>("");
  const [response, setResponse] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // file upload handle kro yha pe
    }
  };

  const handleSubmit = async () => {
    if (inputType === "document") {
      // agar docs upload kia toh yeh reuslt la logic likho
    } else if (inputType === "text" && text) {
      // agar text submit lkiya hai toh is result ka logic likho
    }
  };

  return (
    <>
      <Layout>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Upload Your Document</h1>
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Choose Input Type:</label>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${
                inputType === 'document' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              } hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white transition duration-300 ease-in-out`}
              onClick={() => setInputType('document')}
            >
              Upload Document
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                inputType === 'text' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              } hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white transition duration-300 ease-in-out`}
              onClick={() => setInputType('text')}
            >
              Enter Text
            </button>
          </div>
        </div>
        {inputType === 'document' ? (
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Upload Document:</label>
            <input type="file" onChange={handleFileUpload} className="border rounded-md p-2 w-full" />
          </div>
        ) : (
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Enter Text:</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2"
              value={text}
              onChange={handleInputChange}
            />
          </div>
        )}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          Submit
        </button>
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

export default DocSum;
