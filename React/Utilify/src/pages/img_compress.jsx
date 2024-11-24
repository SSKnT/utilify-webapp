import { useState, useEffect } from 'react';
import PageLayoutComp from '@/components/PageLayoutComp';
import { FileUploadComp } from './img_bg_removal';
import Footer from '@/components/footer';
import { toast } from 'sonner';

// IC stands for Image Compress
const PageContent_IC = () => {
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
        title="Compress Image"
        text="Compress your images without losing quality. Reduce the size of your images with ease."
        component_1={
          <FileUploadComp
            setAlert={setAlert}
            fileTypes={['image/jpeg', 'image/png', 'image/gif', 'image/svg']}
            apiUrl={'http://localhost:8000/img/compress-img/'}
            message="Compressed image"
          />
        }
      />
      <Footer />
    </>
  );
};

export default PageContent_IC;
