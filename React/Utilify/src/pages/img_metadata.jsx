import { useState, useEffect } from "react";
import ImagePageComp from "@/components/imagePageComp";
import { FileUploadComp } from "./img_bg_removal";
import Footer from "@/components/footer";
import { toast } from "sonner";

const PageContent_IMD = () => {            // IMD stands for Image Metadata
    const [alert, setAlert] = useState({ type: "", message: "" });

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