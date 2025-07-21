import Image from 'next/image'
import image1 from  '../../../public/image1.jpg'
import image2 from  '../../../public/image2.jpg'
import image3 from  '../../../public/image3.jpg'
import image4 from  '../../../public/image4.jpg'


const images = [
    {
    src: image1 ,alt: "owner",description:"lorem"
    },
    {
    src: image2 ,alt: "owner",description:"lorem"
    },
     {
    src: image3 ,alt: "owner",description:"lorem"
    },
     {
    src: image4 ,alt: "owner",description:"lorem"
    },
]

export default function AboutUs() {
  return (
    <div className="bg-[#f9f9f9] font-serif text-[#333] text-[1.6px]">
      {/* Hero Section */}
      <div className="relative w-100% h-[400px] overflow-hidden">
        <Image
          src={image3}
          alt="Our team working together"
          fill
          className="w-100% h-100% object-cover"
        />
        <h1 className="absolute top-50% left-50% text-white text-[3.5rem] font-[700px] items-center">About Us</h1>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-0 my-auto px-[40px] py-[20px]">
        <p className='text-[#555] text-[1.1rem] h-1.8px'>We are a passionate team, driven by our love for travel and discovery. Our mission is to create meaningful experiences that bring people together.</p>

        {/* First Section */}
        <div className="flex items-center gap-40px mb-60px">
          <Image
            src={image1}
            alt="The story of our team"
            width={400}
            height={300}
            className="w-100% max-w-[400px] border-r-[12px]"
          />
          <div className="flex-1">
            <h2 className='text-[#2c3e50] text-[2rem] mb-[20px]'>Our Story</h2>
            <p>We started with a dream to help people connect with the world in deeper, more meaningful ways. Our founders, passionate about exploring new places, believe that travel is one of the best ways to learn, grow, and connect with people from all walks of life.</p>
            <h2 className='text-[#2c3e50] text-[2rem] mb-[20px]'>Our Mission</h2>
            <p>Our mission is to create unique travel experiences that inspire adventure, spark curiosity, and create lasting memories. We are here to bring the world closer to you and make every journey unforgettable.</p>
            <h2 className='text-[#2c3e50] text-[2rem] mb-[20px]'>Our Values</h2>
            <ul className='list-disc mx-[[20px] my-0 pl-[20px]'>
              <li className='text-[#555] mb-[10px]'>Integrity</li>
              <li className='text-[#555] mb-[10px]'>Innovation</li>
              <li className='text-[#555] mb-[10px]'>Customer Satisfaction</li>
              <li className='text-[#555] mb-[10px]'>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex items-center gap-40px mb-[60px]">
          <div className="flex-1">
            <h2>Our Vision</h2>
            <p>We envision a world where travel is not just a journey, but a way to enrich lives and create lasting bonds between people and cultures. Our goal is to empower travelers to explore the world with confidence and curiosity.</p>
          </div>
          <Image
            src={image2}
            alt="Exploring new horizons"
            width={400}
            height={500}
            className="text-[#555] mb-[10px]"
          />
        </div>

        {/* Travel Guides Section */}
        <div className="bg-[#fff] p-[40px] border-r-[12px]">
          <h1 className="text-[2.5rem] text-[#2c3e50] items-center mb-[40px]">Our Travel Guides</h1>
          <ul className="flex flex-wrap gap-[30px] p-0 list-none">
            {images.map((image, index) => (
              <li key={index} className="hover:scale-[1.1] hover:border-[#e67e22] items-center w-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={150}
                  className='w-[150px] h-[150px] border-r-[50%] object-cover border-solid border-[#2c3e50]'
                />
                <p className="mt-[15px] text-[#555] text-[0.95rem] h-1.4px">{image.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}