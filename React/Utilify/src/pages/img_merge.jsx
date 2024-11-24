import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import PageLayoutComp from '@/components/PageLayoutComp';
import Footer from '@/components/footer';
import postToApiBinary from '@/api/postBinary';

const PageContent_IM = () => {
  const [alert, setAlert] = useState({ type: '', message: '' });
  const text =
    'Merge your logo with your main image effortlessly. Adjust position and opacity for perfect results!';

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
        title="Merge Images"
        text={text}
        component_1={<FileUploadComp setAlert={setAlert} />}
      />
      <Footer />
    </>
  );
};

const FileUploadComp = ({ setAlert }) => {
  const [mainImage, setMainImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(255);
  const [fileDownloadUrl, setFileDownloadUrl] = useState(null);

  const validateFile = (file, fileTypes) =>
    file && fileTypes.includes(file.type);

  const handleMainFileChange = (e) => {
    const fileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg'];
    const selectedFile = e.target.files[0];

    if (validateFile(selectedFile, fileTypes)) {
      setMainImage(selectedFile);
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

  const handleLogoFileChange = (e) => {
    const fileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg'];
    const selectedFile = e.target.files[0];

    if (validateFile(selectedFile, fileTypes)) {
      setLogoImage(selectedFile);
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

  const handlePositionChange = (e) => {
    const { name, value } = e.target;
    setPosition((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpacityChange = (e) => {
    setOpacity(e.target.value);
  };

  const handleSubmit = async () => {
    if (!mainImage || !logoImage ) {
      setAlert({ type: 'Error', message: 'Please fill all fields.' });
      return;
    }

    const formData = new FormData();
    formData.append('background', mainImage);
    formData.append('logo', logoImage);
    formData.append('x', position.x);
    formData.append('y', position.y);
    formData.append('opacity', opacity);

    try {
      const response = await postToApiBinary(
        'http://localhost:8000/img/add-logo/',
        formData,
        {
          responseType: 'blob',
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setFileDownloadUrl(url);
      setAlert({ type: 'Success', message: 'Image created successfully.' });
    } catch (error) {
      setAlert({
        type: 'Error',
        message: 'An error occurred. Please try again.',
      });
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
        {/* Main Image Upload */}
        <div className="flex flex-col items-center space-y-4 border border-dashed border-gray-300 bg-red-400 bg-opacity-20 rounded-lg p-6">
          <label htmlFor="main-image-upload" className="cursor-pointer">
            <input
              type="file"
              id="main-image-upload"
              className="hidden"
              onChange={(e) => handleMainFileChange(e)}
            />
            <div className="flex flex-col items-center space-y-2">
              <i className="fas fa-cloud-upload-alt text-5xl text-red-600"></i>
              <p className="text-lg font-semibold text-red-500">
                Upload Main Image
              </p>
              <p className="text-sm text-gray-500">
                Drag & drop or click to upload
              </p>
              {mainImage && (
                <p className="text-sm text-green-500">
                  Selected: {mainImage.name}
                </p>
              )}
            </div>
          </label>
        </div>

        {/* Logo Image Upload */}
        <div className="flex flex-col items-center space-y-4 border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
          <label htmlFor="logo-image-upload" className="cursor-pointer">
            <input
              type="file"
              id="logo-image-upload"
              className="hidden"
              onChange={(e) => handleLogoFileChange(e)}
            />
            <div className="flex flex-col items-center space-y-2">
              <i className="fas fa-cloud-upload-alt text-5xl text-gray-500"></i>
              <p className="text-lg font-semibold text-gray-700">Upload Logo</p>
              <p className="text-sm text-gray-500">
                Drag & drop or click to upload
              </p>
              {logoImage && (
                <p className="text-sm text-green-500">
                  Selected: {logoImage.name}
                </p>
              )}
            </div>
          </label>
        </div>

        {/* Logo Position Inputs */}
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label
              htmlFor="x"
              className="block text-sm font-medium text-gray-700"
            >
              X Position
            </label>
            <input
              type="number"
              id="x"
              name="x"
              value={position.x}
              onChange={handlePositionChange}
              placeholder="X coordinate"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="y"
              className="block text-sm font-medium text-gray-700"
            >
              Y Position
            </label>
            <input
              type="number"
              id="y"
              name="y"
              value={position.y}
              onChange={handlePositionChange}
              placeholder="Y coordinate"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Logo Opacity Input */}
        <div>
          <label
            htmlFor="opacity"
            className="block text-sm font-medium text-gray-700"
          >
            Logo Opacity
          </label>
          <input
            type="number"
            id="opacity"
            value={opacity}
            onChange={handleOpacityChange}
            min="1"
            max="255"
            step="1"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs md:text-sm text-opacity-80 text-gray-400">
            Note: The opacity at 1 is fully transparent & fully opaque at 255 (e.g.,
            200 represents 75% opacity).{' '}
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition-all"
            onClick={handleSubmit}
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
            className="text-red-600 hover:text-red-800"
          >
            <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all ease-in-out">
              <i class="bi bi-download mr-2 text-lg"></i>
              Download
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default PageContent_IM;
