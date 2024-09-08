import React from 'react'

export default function About() {
    return (
        <div className="py-44 w-full mb-0 bg-orange-400">
            <div className="container  px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-16">
                    <div className="md:3/12 lg:w-3/12">
                        <img className=" w-[1200px] h-[400px]  rounded-lg bg-cover bg-center "
                            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJTUgd_bVk21G3mhJbcH3mIuRnQwDKIPNmQ&s"
                            // src="src\componantes\gg.webp"
                            src="src\componantes\geeta.gif"
                            alt="image"
                        />
                    </div>
                    <div className="md:8/12 lg:w-8/12 ">
                        <h2 className="text-1xl text-gray-900 font-bold  md:text-2xl">
                       <span className='text-2xl font-extrabold text-black'> The Bhagavad Gita:- </span>the Gita is a Hindu scripture that is part of the Indian epic Mahabharata,  It is a philosophical and spiritual dialogue between Prince Arjuna, a warrior prince, and Lord Krishna.
                        </h2>
                        <h3 className='text-2xl font-semibold text-black'>*Key Themes of the Bhagavad Gita:</h3>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}