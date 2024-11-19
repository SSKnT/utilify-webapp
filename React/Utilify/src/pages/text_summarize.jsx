import { useState } from 'react';
import Footer from '@/components/footer';

const PageContent_TS = () => {            // TS stands for Text Summarize
  return(
    <div className='flex flex-col h-full w-full'>
      <TextSummarize heading='Summarize Text' txt='Enter your text below to get a summary.' />
      <Footer />
    </div>
  )
}


const TextSummarize = ({heading, txt}) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    // You can add more logic here to handle the stored text
  };

  return (
    <div className="p-6 h-full w-full mx-auto flex flex-col justify-center mb-14">
      <h1 className="md:text-5xl text-3xl text-center font-extrabold text-blue-800 mt-4 mb-4 animate-fade-in">{heading}</h1>
      <p className="md:text-lg text-md text-gray-600 mb-8 max-w-xl mx-auto text-center">{txt}</p>
      <div className="w-full max-w-2xl flex flex-col mx-auto">
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
          className="mt-5 w-[50%] md:w-[25%] ml-auto mr-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 duration-300"
        >
          {heading}
        </button>
      </div>
    </div>
  );
};

export default PageContent_TS;
export { TextSummarize };