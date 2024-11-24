import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import PageLayoutComp from '@/components/PageLayoutComp';
import Footer from '@/components/footer';
import postToApiBinary from '@/api/postBinary';

// IBR stands for Image Background Removal
const PageContent_IBR = () => {
  const [alert, setAlert] = useState({ type: '', message: '' });
  const text =
    'Easily remove backgrounds from your images with precision and speed. No technical skills required!';

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
        title="Remove Image Background"
        text={text}
        component_1={
          <FileUploadComp
            setAlert={setAlert}
            fileTypes={['image/jpeg', 'image/png', 'image/gif', 'image/svg']}
            apiUrl="http://localhost:8000/img/remove-bg/"
            message="Removed file background"
          />
        }
      />
      <Footer />
    </>
  );
};

const FileUploadComp = ({
  setAlert,
  fileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg'],
  fileTypeText,
  uploadFileType = 'image',
  apiUrl,
  message,
}) => {
  const [file, setFile] = useState(null);
  const [fileDownloadUrl, setFileDownloadUrl] = useState(null);

  const validateFile = (file, fileTypes) => {
    if (!file) return false;
    const fileType = file.type || file.name.split('.').pop();
    const isValid =
      fileTypes.includes(fileType) ||
      (fileType === 'md' && fileTypes.includes('text/markdown'));
    console.log(`File type: ${fileType}, Valid: ${isValid}`);
    return isValid;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (validateFile(selectedFile, fileTypes)) {
      setFile(selectedFile);
      setAlert({
        type: 'Success',
        message: `File selected: ${selectedFile.name}`,
      });
    } else {
      setAlert({
        type: 'Error',
        message: `Invalid file type. Please select a valid image file.`,
      });
    }
  };

  const handleButtonClick = async () => {
    if (!file) {
      setAlert({
        type: 'Error',
        message: 'Please select a file to upload',
      });
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await postToApiBinary(apiUrl, formData, {
        responseType: 'blob', // Important for handling binary data
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setFileDownloadUrl(url);
      setAlert({
        type: 'Success',
        message: `${message} successfully. Click the link below to download the image.`,
      });
    } catch (error) {
      setAlert({
        type: 'Error',
        message:
          error.response.data.error ||
          'An error occurred. Please try again later.',
      });
    }
  };

  return (
    <>
      <div className="border-gray-400 border-dashed border-[1px] border-opacity-50 bg-red-300 bg-opacity-20 rounded-lg py-6">
        <label htmlFor="file-upload" className="w-full max-w-lg p-2">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <i className="fas fa-cloud-upload-alt text-6xl text-red-600"></i>
            <p className="text-lg text-center text-gray-600">
              Drag and drop your {uploadFileType} here or click to upload
            </p>
            <p className="text-sm text-center text-gray-500">
              {fileTypeText || 'Supported file types: JPEG, PNG, GIF, SVG'}
            </p>
            {file && (
              <p className="text-sm text-center text-green-500">
                File selected: {file.name}
              </p>
            )}
          </div>
        </label>
        <div className="flex justify-center mt-4">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-all ease-in-out"
            onChange={handleFileChange}
            onClick={handleButtonClick}
            disabled={!file}
          >
            Submit
          </button>
        </div>
      </div>
      {fileDownloadUrl && (
        <div className="mt-4 text-center">
          <a
            href={fileDownloadUrl}
            download="image.png"
            onClick={() => setFileDownloadUrl(null)}
            className="text-blue-600 hover:text-blue-800"
          >
            <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all ease-in-out">
            <i class="bi bi-download mr-2 text-lg"></i>
              Download
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default PageContent_IBR;
export { FileUploadComp };
