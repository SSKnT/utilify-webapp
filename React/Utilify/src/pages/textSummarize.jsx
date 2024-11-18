import { useState } from 'react';

const TextSummarize = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    // You can add more logic here to handle the stored text
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white w-full h-full ">
      <h1 className="text-4xl font-extrabold text-black mb-8 animate-fade-in">Summarize Text</h1>
      <div className="w-full max-w-2xl flex flex-col">
        <label htmlFor="message" className="block text-sm font-medium text-gray-800 font-sans mb-2">
          Text
        </label>
        <textarea
          id="message"
          className="w-full ml-auto mr-auto border border-gray-600 bg-gray-200 text-gray-700 bg-opacity-40 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Paste your text here"
          rows="6"
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <button
          onClick={handleButtonClick}
          className="mt-5 md:w-[25%] md:ml-auto md:mr-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 duration-300"
        >
          Summarize Text
        </button>
      </div>
    </div>
  );
};

export default TextSummarize;