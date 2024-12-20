import { useState } from 'react';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import postToApi from '@/api/post';
import Footer from '@/components/footer';

const PageContent_TS = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const processApiResponse = (apiResponse) => {
    return apiResponse.summary;
  };

  // TS stands for Text Summarize
  return (
    <div className="flex flex-col h-full w-full">
      <TextSummarize
        className={`${loading ? 'hidden' : 'block'}`}
        heading="Summarize Text"
        txt="Enter your text below to get a summary."
        processApiResponse={processApiResponse}
        params={{ text: text }}
        text={text}
        setText={setText}
        url="http://localhost:8000/text/summarize/"
        loading={loading}
        setLoading={setLoading}
      />

      <Footer />
    </div>
  );
};

const TextSummarize = ({
  heading,
  txt,
  url,
  processApiResponse,
  params,
  text,
  setText,
  loading,
  setLoading,
}) => {
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const getApiData = async () => {
    try {
      const data = await postToApi(url, params);
      return data;
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  const handleButtonClick = async () => {
    setLoading(true);
    if (text === '') {
      toast.error('Please enter some text to summarize.');
      setLoading(false);
    } else {
      const apiResponse = await getApiData();
      if (apiResponse) {
        setTimeout(() => {
          setLoading(false);
          setText(processApiResponse(apiResponse)); // Api returns a json object with key appropriate to the process
        }, 2000);
      }
    }
  };

  return (
    <div className="p-6 h-full w-full mx-auto flex flex-col justify-center bg-gradient-to-b from-blue-50 to-blue-100 pb-28">
      <h1 className="md:text-5xl text-3xl text-center font-extrabold text-blue-800 mt-4 mb-4 animate-fade-in">
        {heading}
      </h1>
      <p className="md:text-lg text-md text-gray-600 mb-8 max-w-xl mx-auto text-center">
        {txt}
      </p>
      <div className="w-full max-w-2xl flex flex-col mx-auto">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-800 font-sans mb-2"
        >
          Text
        </label>
        {loading ? (
          <Skeleton className="w-full h-[10.5rem] mx-auto bg-blue-200" />
        ) : (
          <textarea
            id="message"
            className="w-full ml-auto mr-auto border border-gray-600 bg-gray-200 text-gray-700 bg-opacity-40 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Paste your text here"
            rows="6"
            value={text}
            onChange={handleTextChange}
          ></textarea>
        )}
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
