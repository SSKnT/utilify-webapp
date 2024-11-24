import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import PageLayoutComp from '@/components/PageLayoutComp';
import Footer from '@/components/footer';
import postToApi from '@/api/post';

const PageContent_IMD = () => {
  // IMD stands for Image Metadata
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
        title="Extract Image Metadata"
        text="Extract metadata from your images. Get information about your images."
        component_1={
          <MetadataFileUploadComp
            setAlert={setAlert}
            fileTypes={['image/jpeg', 'image/png', 'image/gif', 'image/svg']}
            apiUrl="http://localhost:8000/img/extract-md/"
            message="Extracted mtadata"
            uploadFileType='image'
          />
        }
      />
      <Footer />
    </>
  );
};

const MetadataFileUploadComp = ({ setAlert, fileTypes, apiUrl, message, uploadFileType, fileTypeText }) => {
  const [file, setFile] = useState(null);
  const [showMetadata, setShowMetadata] = useState({ flag: false, data: null });

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
      const response = await postToApi(apiUrl, formData, {
        responseType: 'blob',
      });
      setShowMetadata({ flag: true, data: response });
      setAlert({
        type: 'Success',
        message: `${message} successfully. Click the link below to download the image.`,
      });
    } catch (error) {
      setAlert({
        type: 'Error',
        message: error.response.data.error || error.message,
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
      {showMetadata.flag && (
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-black text-center text-red-600 mb-4">Metadata</h2>
            <pre className="text-sm text-gray-800 bg-gray-100 p-4 rounded-lg overflow-auto">
              {JSON.stringify(showMetadata.data, null, 2)
                .replace(/^{|}$/g, '') // Remove the curly braces
                .replace(/"/g, '') // Remove the quotation marks
                .replace(/,/g, ',\n') // Add new lines after commas
                .replace(/:/g, ': ')}  {/* Add space after colons */}
            </pre>
          </div>
        </div>
      )}
    </>
  );
};

export default PageContent_IMD;
