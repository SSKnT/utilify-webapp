import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import PageLayoutComp from '@/components/PageLayoutComp';
import { FileUploadComp } from './img_bg_removal';
import Footer from '@/components/footer';

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
        component_1={
          <FileUploadComp
            setAlert={setAlert}
            fileTypes={['text/markdown', 'text/x-markdown', '.md']}
            fileTypeText={'Supported formats: MD'}
            uploadFileType='file'
          />
        }
      />
      <Footer />
    </>
  );
};

export default PageContent_MD_to_PDF;
