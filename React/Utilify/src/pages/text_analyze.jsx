import { useState } from "react";
import { TextSummarize } from "./text_summarize";
import Footer from "@/components/footer";

const PageContent_TA = () => {         // TA stands for Text Analyze
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    const processApiResponse = (apiResponse) => {
        return `Sentiment: ${(apiResponse.sentiment)}\nPolarity: ${apiResponse.polarity}\nSubjectivity: ${apiResponse.subjectivity}`;
    }

    return(
        <div className='flex flex-col h-full w-full'>
            <TextSummarize heading='Analyze Text' 
                txt='Analyze your text to gain insights and understand the key points. Add more words to get a detailed summary.' 
                url = 'http://localhost:8000/text/analyze/'
                processApiResponse={processApiResponse}
                params = {{text: text}}
                text = {text}
                setText = {setText}
                loading={loading}
                setLoading={setLoading}
                />

            <Footer />
        </div>
    )
}

export default PageContent_TA;