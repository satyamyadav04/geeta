
import '../style/About.css';
export default function About() {
    return (
        <div className="py-44 w-full mb-0 ">
            <div className="container  px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-16">
                    <div className="md:3/12 lg:w-3/12">
                        {/* <img className=" w-[1200px] h-[400px]  rounded-lg bg-cover bg-center "
                          
                            // src="src\assets\geeta.gif"
                            
                            alt="image"
                        /> */}
                    </div>
                    <div className="md:20/12 lg:w-10/12 ">
                        <h2 className="text-1xl text-orange-600 font-bold  md:text-2xl">
                       <span className='text-2xl font-extrabold text-yellow-500'> The Bhagavad Gita:- </span>the Gita is a Hindu scripture that is part of the Indian epic Mahabharata,  It is a philosophical and spiritual dialogue between Prince Arjuna, a warrior prince, and Lord Krishna.
                        </h2>
                        <h3 className='text-2xl text-yellow-500 font-medium md:text-2xl'>the GPT model themed around the Bhagavad Gita, potentially referred to as "Gita GPT".</h3>
                        <p className="mt-6  text-yellow-500 text-1xl font-medium md:text-2xl">
                        Data Collection: Gather extensive texts from the Bhagavad Gita, along with commentaries and interpretations by various scholars to create a diverse dataset.
                        </p>
                        <p className="mt-6  text-yellow-500 text-1xl font-medium md:text-2xl">
                        A model could serve as an educational tool, helping students and scholars to better understand the complex themes of the Gita.
                        </p>
                        <p className="mt-6  text-yellow-500 text-1xl font-medium md:text-2xl">
                        It could power interactive experiences where users engage in a dialogue with the model to explore various "what-if" scenarios or philosophical discussions based on the Gita.
                        </p>
                        <p className="mt-6  text-yellow-500 text-1xl font-medium md:text-2xl">
                        the model understands and respects the cultural and religious context of the Bhagavad Gita.
                        </p>
  
                    </div>
                </div>
            </div>
        </div>
    );
}