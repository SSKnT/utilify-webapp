import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import PageLayoutComp from '@/components/PageLayoutComp';
import Footer from '@/components/footer';
import postToApiBinary from '@/api/postBinary';

const PageContent_MD_to_PDF = () => {
  const [alert, setAlert] = useState({ type: '', message: '' });

  useEffect(() => {
    if (alert.message) {
      if (alert.type === 'Success') {
        toast.success(alert.type, {
          description: alert.message,
          action: {
            label: 'Close',
          },
        });
      } else if (alert.type === 'Error') {
        toast.error(alert.type, {
          description: alert.message,
          action: {
            label: 'Close',
          },
        });
      }
    }
  }, [alert]);

  return (
    <>
      <PageLayoutComp
        title="Convert Markdown to PDF"
        text="Convert your markdown files to PDF. Preserve the formatting of your markdown files."
        component_1={<MarkdownAreaComp setAlert={setAlert} />}
      />
      <Footer />
    </>
  );
};

const MarkdownAreaComp = ({ setAlert }) => {
  const [text, setText] = useState('');
  const [fileDownloadUrl, setFileDownloadUrl] = useState(null);

  const handleSubmit = async () => {
    if (text == '') {
      setAlert({ type: 'Error', message: 'Please enter some text' });
      return;
    }

    try {
      const response = await postToApiBinary(
        'http://localhost:8000/file/markdown-to-pdf/',
        { content: text }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setFileDownloadUrl(url);
      setAlert({ type: 'Success', message: 'File converted successfully' });
    } catch (error) {
      setAlert({
        type: 'Error',
        message: 'An error occurred. Please try again',
      });
    }
  };

  return (
    <>
      <div className="w-full max-w-2xl flex flex-col mx-auto">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-800 font-sans mb-2"
        >
          Markdown
        </label>
        <textarea
          id="message"
          className="w-full ml-auto mr-auto border border-gray-600 bg-gray-200 text-gray-700 bg-opacity-40 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Paste your markdown here"
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-red-600 md:w-[30%] text-white mx-auto py-2 px-4 rounded-lg hover:bg-red-700 transition-all ease-in-out mt-4"
          onClick={handleSubmit}
        >
          Convert to PDF
        </button>
      </div>
      { fileDownloadUrl && (
        <div className="mt-4 text-center">
          <a className='text-blue-600 hover:text-blue-800' href={fileDownloadUrl} download="file.pdf" onClick={() => setFileDownloadUrl(null)}>
            <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all ease-in-out">
              <i className="bi bi-download mr-2 text-lg"></i>
              Download
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default PageContent_MD_to_PDF;
