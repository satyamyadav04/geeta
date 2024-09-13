
import "../style/About.css";
export default function About() {
    return (
        <div className="py-44 w-full mb-0 bg-orange-400">
            <div className="container  px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-16">
                    <div className="md:3/12 lg:w-3/12">
                        <img className=" w-[1200px] h-[400px]  rounded-lg bg-cover bg-center "
                          
                            src="src\assets\geeta.gif"
                            
                            alt="image"
                        />
                    </div>
                    <div className="md:8/12 lg:w-8/12 ">
                        <h2 className="text-1xl text-gray-900 font-bold  md:text-2xl">
                       <span className='text-2xl font-extrabold text-black'> The Bhagavad Gita:- </span>the Gita is a Hindu scripture that is part of the Indian epic Mahabharata,  It is a philosophical and spiritual dialogue between Prince Arjuna, a warrior prince, and Lord Krishna.
                        </h2>
                        <h3 className='text-2xl text-black font-extrabold md:text-2xl'>*Key Themes of the Bhagavad Gita:-</h3>
                        <p className="mt-6  text-black text-1xl font-medium md:text-2xl">
                         *Dharma (Duty): The Gita emphasizes performing one’s duty without attachment to the results.
                        </p>
  
                    </div>
                </div>
            </div>
        </div>
    );
}