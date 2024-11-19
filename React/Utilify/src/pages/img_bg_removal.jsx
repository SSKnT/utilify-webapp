import { useState } from "react";
import ImagePageComp from "@/components/imagePageComp";
import Footer from "@/components/footer";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// IBR stands for Image Background Removal
const PageContent_IBR = () => {      
    const [alert, setAlert] = useState({ type: "", message: "" });
    const text = 'Easily remove backgrounds from your images with precision and speed. No technical skills required!';

    return (
        <>
            <div className="w-[90%] md:w-[80%] mt-4 mx-auto">
                {/* Alerts */}
                {alert.message && (
                    <Alert variant={alert.type === "Error" ? "destructive" : "success"}>
                        <div className="w-full h-full flex flex-row">
                            {/* Success Icon */}
                            {alert.type === "Success" && (
                                <i className="bi bi-check-circle h-4 w-4 mr-4 text-green-600"></i>
                            )}
                            {/* Error Icon */}
                            {alert.type === "Error" && (
                                <i className="bi bi-x-circle h-4 w-4 mr-4 text-red-600"></i>
                            )}
                            <div>
                                <AlertTitle>{alert.type}</AlertTitle>
                                <AlertDescription>{alert.message}</AlertDescription>
                            </div>
                        </div>
                    </Alert>
                )}
            </div>
            <ImagePageComp
                title="Remove Image Background"
                text={text}
                component_1={<FileUploadComp alert={alert} setAlert={setAlert} />}
            />
            <Footer />
        </>
    );
};

const validateFile = (file, fileTypes) => file && fileTypes.includes(file.type);

const FileUploadComp = ({ alert, setAlert }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const fileTypes = ["image/jpeg", "image/png", "image/gif", "image/svg"];
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
        <>
            <div className="border-gray-400 border-[1px] bg-blue-50 border-opacity-50 rounded-lg py-6">
                <label htmlFor="file-upload" className="w-full max-w-lg p-2">
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <i className="fas fa-cloud-upload-alt text-6xl text-blue-500"></i>
                        <p className="text-lg text-center text-gray-600">
                            Drag and drop your image here or click to upload
                        </p>
                        <p className="text-sm text-center text-gray-500">
                            Supported formats: JPG, PNG, GIF, SVG
                        </p>
                        {file && (
                            <p className="text-sm text-center text-green-500">
                                File selected: {file.name}
                            </p>
                        )}
                    </div>
                </label>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-all ease-in-out">
                    Submit
                </button>
            </div>
        </>
    );
};

export default PageContent_IBR;
