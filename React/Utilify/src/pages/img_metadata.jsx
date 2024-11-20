import { useState } from "react";
import ImagePageComp from "@/components/imagePageComp";
import { FileUploadComp } from "./img_bg_removal";
import Footer from "@/components/footer";

const PageContent_IMD = () => {            // IMD stands for Image Metadata
    const [alert, setAlert] = useState({ type: "", message: "" });

    return(
        <>
            <ImagePageComp 
                title="Extract Image Metadata"
                text="Extract metadata from your images. Get information about your images."
                component_1={<FileUploadComp setAlert={setAlert} />}
            />
            <Footer />
        </>
    )
}

export default PageContent_IMD;