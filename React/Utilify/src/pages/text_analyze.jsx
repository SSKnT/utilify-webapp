import { TextSummarize } from "./text_summarize";
import Footer from "@/components/footer";

const PageContent_TA = () => {         // TA stands for Text Analyze
    return(
        <div className='flex flex-col h-full w-full'>
            <TextSummarize heading='Analyze Text' 
                txt='Analyze your text to gain insights and understand the key points. Add more words to get a detailed summary.' />
            <Footer />
        </div>
    )
}

export default PageContent_TA;