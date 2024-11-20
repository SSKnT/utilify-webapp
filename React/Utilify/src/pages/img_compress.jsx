import { useState, useEffect } from "react";
import ImagePageComp from "@/components/imagePageComp";
import { FileUploadComp } from "./img_bg_removal";
import Footer from "@/components/footer";
import { toast } from "sonner";


const PageContent_IC = () => {            // IC stands for Image Compress
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
                title="Compress Image"
                text="Compress your images without losing quality. Reduce the size of your images with ease."
                component_1={<FileUploadComp setAlert={setAlert} />}
            />
            <Footer />
        </>
    )
}

export default PageContent_IC;