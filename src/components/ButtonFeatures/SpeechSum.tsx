import React, { useRef } from "react";
import Layout from "../Layouts/Layout";

const SpeechSum = () => {
    const inputRef = useRef(null);

    const handleInputChange = async () => {
        const file = inputRef.current.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("audioFile", file);
            
            try 
            {
                console.log("Data:",formData);
                for (var pair of formData.entries()) {
                    console.log(pair[0] + ', ' + pair[1]);
                }        
                const response = await fetch("http://localhost:3000/upload", {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json()
                console.log("Response:",data);
            } catch (error) 
            {
                console.error("Error:", error);
            }
        };
    };
    return (
            <Layout>
                <div className="container mx-auto my-10">
                    <h1 className="text-3xl font-bold">Speech Summarisation</h1>
                </div>
                <div className="container mx-auto">
                    <form className="flex items-center">
                        <input
                            type="file"
                            ref={inputRef}
                            className="py-2 px-4 border border-gray-300 rounded mr-2"
                        />
                        <button type="submit" onClick={handleInputChange} className="py-2 px-6 bg-blue-500 text-white rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </Layout>

        );
}

export default SpeechSum
