import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <TestimonialSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

// Hero Section
const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Welcome to Utilify</h1>
                <p className="text-xl mb-8">Your one-stop solution for utility management</p>
                <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    Get Started
                </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 animate-slow-pulse"></div>
        </section>
    );
};

// Features Section
const FeaturesSection = () => {
    const features = [
        { title: "Feature One", description: "Description of feature one.", icon: "⚡" },
        { title: "Feature Two", description: "Description of feature two.", icon: "💡" },
        { title: "Feature Three", description: "Description of feature three.", icon: "🚀" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Testimonial Section
const TestimonialSection = () => {
    const testimonials = [
        { name: "John Doe", review: "Utilify has revolutionized the way I manage my utilities!" },
        { name: "Jane Smith", review: "A seamless and easy-to-use platform for everyone." },
        { name: "Mark Wilson", review: "Highly recommended for anyone looking for efficient utility tools." },
    ];

    return (
        <section className="py-20 bg-blue-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
                <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-4 space-y-4 md:space-y-0">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg w-[80%] md:w-full md:transition-transform md:transform md:hover:scale-105"
                        >
                            <p className="text-gray-600 italic">"{testimonial.review}"</p>
                            <h4 className="text-lg font-semibold mt-4">{testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section
const ContactSection = () => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Your Message"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};



export default Home;
