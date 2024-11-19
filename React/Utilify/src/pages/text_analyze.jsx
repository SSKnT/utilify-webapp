import { TextSummarize } from "./text_summarize";
import Footer from "@/components/footer";

const PageContent_TA = () => {         // TA stands for Text Analyze
    return(
        <div className='flex flex-col h-full w-full'>
            <TextSummarize heading='Analyze Text' />
            <Footer />
        </div>
    )
}

export default PageContent_TA;