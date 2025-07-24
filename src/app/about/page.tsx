import Image from 'next/image'
// import image1 from  '../../../public/image1.jpg'
import image2 from  '../../../public/image2.jpg'
import image3 from  '../../../public/image3.jpg'
import image4 from  '../../../public/image4.jpg'


const images = [
    // {
    // src: image1 ,alt: "owner",description:"lorem"
    // },
    {
    src: image2 ,alt: "owner",description:"Onsite Support"
    },
     {
    src: image3 ,alt: "owner",description:"Digital Solutions"
    },
     {
    src: image4 ,alt: "owner",description:"24/7 Support"
    },
]

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Smartyy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {images.map((image, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center 
 justify-between">
            <Image src={image.src} alt={image.alt} width={200} height={200} className="rounded-lg object-cover" />
            <p className="mt-2 text-center text-gray-700">{image.description}</p>
          </div>
        ))}
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Who We Are</h2>
        <p className="text-center text-gray-600">
          Smartyy is a leading e-commerce platform committed to bringing you the latest products at unbeatable prices. 
          Our team is passionate about technology, fashion, and lifestyle, ensuring a diverse range of quality products for every customer.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Mission</h2>
        <p className="text-center text-gray-600">
          To deliver an exceptional shopping experience by providing top-notch customer service, fast shipping, and a secure platform. 
          We believe in transparency, trust, and building long-lasting relationships with our customers.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Why Shop With Us?</h2>
        <ul className="list-disc list-inside text-center text-gray-600">
          <li>Wide selection of products</li>
          <li>Competitive pricing</li>
          <li>Fast and reliable delivery</li>
          <li>Easy returns and exchanges</li>
          <li>Secure payment options</li>
          <li>24/7 customer support</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600">
          For any inquiries, please email us at <a href="mailto:support@smartyy.com" className="text-blue-600 hover:underline">support@smartyy.com </a> 
          or call us at <span className="font-semibold">+251 961 17 79 53</span>.
        </p>
      </section>
      
      
    </div>
  );
}