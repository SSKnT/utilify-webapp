import { useState } from "react"
import Footer from "@/components/footer"
import postToApi from "@/api/post"
import { toast } from "sonner"


const PageContent_TF = () => {            // TF stands for Text Fortune

    return(
       <>
        <GetFortune />
        <Footer />
       </>
    )
}



const GetFortune = () => {
  const [age, setAge] = useState(1)
  const [name, setName] = useState('')
  const [query, setQuery] = useState('')
  const [showFortune, setShowFortune] = useState(false)


  const getFortune = async () => {
    const responce = await postToApi('http://localhost:8000/text/fortune/', {name: name, age: age})
    return responce.fortune;
  }

  const handleButtonClick = async () => {
    try{
      setShowFortune(true);
      const fortune = await getFortune();
      setQuery(fortune);
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
      
    
  }

    return(
        <div className="flex flex-col justify-center items-center h-[screen + 2rem] bg-gradient-to-b from-blue-50 to-blue-100 p-6">
          {/* Heading Section */}
          <h1 className="md:text-5xl text-3xl text-center font-extrabold text-blue-800 mb-4 md:mt-4 animate-fade-in">
            Welcome to Your Fortune
          </h1>
          <p className="md:text-lg text-md text-gray-600 mb-8 max-w-xl text-center">
            Your personalized fortune awaits! Enter your query below and let the stars guide you.
          </p>

          {/* Input Section */}
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
            <div className={` ${showFortune ? 'block' : 'hidden'} `}>
              <label
                htmlFor="fortune-query"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Your Fortune
              </label>
              <textarea
                id="fortune-query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-0 focus:shadow-md focus:shadow-black/20 text-gray-700 bg-gray-100"
                placeholder="e.g., Will I get a promotion?"
                rows="5"
              ></textarea>
            </div>
            <div className='flex flex-row w-full space-x-3'>
              <div className="w-[80%] md:w-[85%]">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-[20%] md:w-[15%]">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="1"
                  max="100"
                  step="1"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button
              onClick={handleButtonClick}
              className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Reveal My Fortune
            </button>
          </div>

          {/* Muted Note Section */}
          <p className="mt-6 md:text-sm text-xs text-gray-500 text-center max-w-md">
            <em>
              Note: This fortune is for entertainment purposes only. We are not responsible for any actions taken based on this information. Trust your instincts!
            </em>
          </p>

          {/* Additional Decorative Section */}
          <div className="mt-12 w-full max-w-4xl flex justify-center items-center space-x-6">
              {[
                {
                  link: "https://www.nasa.gov/",
                  src: "https://cdn.mos.cms.futurecdn.net/xKkFJqojdSd8vJuvCLs5mU.jpg",
                  alt: "Stars",
                  label: "Gaze at the stars",
                },
                {
                  link: "https://www.crystalvaults.com/",
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdXfUkX3ElSVPN644ZpDHX2VMg2ls7RdL3Q&s",
                  alt: "Crystal Ball",
                  label: "Consult the crystal ball",
                },
                {
                  link: "https://www.astrology.com/horoscope",
                  src:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlyfPNjWMlkTQsK1A1oGktvhv-R1GPaVyhg&s",
                  alt: "Horoscope",
                  label: "Read your horoscope",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative group"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="rounded-full h-8 w-16 border border-gray-300 shadow-sm cursor-pointer"
                    />
                  </a>
                  <p className="mt-2 text-xs md:text-sm text-center text-gray-600">
                    {item.label}
                  </p>
            
                  {/* Hover Effect */}
                  <div className="absolute hidden md:group-hover:flex -top-28 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg ">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
        </div>
    )
}

export default PageContent_TF;