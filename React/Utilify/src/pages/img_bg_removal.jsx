import { useState, useEffect } from "react";
import PageLayoutComp from "@/components/PageLayoutComp";
import Footer from "@/components/footer";
import { toast } from "sonner";

// IBR stands for Image Background Removal
const PageContent_IBR = () => {
    const [alert, setAlert] = useState({ type: "", message: "" });
    const text ="Easily remove backgrounds from your images with precision and speed. No technical skills required!";

    useEffect(() => {
        if (alert.message) {
          if (alert.type === "Success") {
            toast.success(alert.type, {
              description: alert.message,
              action: {
                label: "Close",
              },
            });
          } else if (alert.type === "Error") {
            toast.error(alert.type, {
              description: alert.message,
              action: {
                label: "Close",
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
        component_1={<FileUploadComp setAlert={setAlert} fileTypes={["image/jpeg", "image/png", "image/gif", "image/svg"]} />}
      />
      <Footer />
    </>
  );
};

const FileUploadComp = ({ setAlert, fileTypes=["image/jpeg", "image/png", "image/gif", "image/svg"], fileTypeText, uploadFileType='image' }) => {
  const [file, setFile] = useState(null);

  const validateFile = (file, fileTypes) => {
    if (!file) return false;
    const fileType = file.type || file.name.split('.').pop();
    const isValid = fileTypes.includes(fileType) || (fileType === 'md' && fileTypes.includes('text/markdown'));
    console.log(`File type: ${fileType}, Valid: ${isValid}`);
    return isValid;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (validateFile(selectedFile, fileTypes)) {
      setFile(selectedFile);
      setAlert({ type: "Success", message: `File selected: ${selectedFile.name}` });
    } else {
      setAlert({
        type: "Error",
        message: `Invalid file type. Please select a valid image file.`,
      });
    }
  };

  return (
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
            {fileTypeText || "Supported file types: JPEG, PNG, GIF, SVG"}
          </p>
          {file && (
            <p className="text-sm text-center text-green-500">
              File selected: {file.name}
            </p>
          )}
        </div>
      </label>
      <div className="flex justify-center mt-4">
        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-all ease-in-out">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PageContent_IBR;
export { FileUploadComp };
