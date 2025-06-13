import { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div
      id='contactForm'
      className='flex flex-col justify-center items-center '>
      <div className='max-w-6xl flex w-full flex-col items-start lg:flex-row gap-8 py-20 px-8 lg:px-0'>
        <div className='w-full' data-aos='fade-right'>
          <h2 className='font-monument tracking-wide text-4xl mb-4'>
            How Can we Help <br /> <span className='text-[#7F61FF]'>You?</span>
          </h2>
          <p className='font-bold max-w-[480px] text-gray-500 mt-6'>
            Our team is here to support your digital transformation with
            tailored solutions. Explore the resources below, and feel free to
            reach out if you have any questions.
          </p>
          <p className='font-bold text-gray-500 mt-10'>
            or send us an email to{" "}
            <Link
              to={`mailto:dev@techinorm.com`}
              target='_blank'
              className='text-[#7F61FF] font-semibold underline underline-offset-2'>
              dev@techinorm.com
            </Link>
          </p>
          <p className='font-bold text-black mt-10'>
            Connect with{" "}
            <Link
              to={`https://wa.me/919746400392`}
              target='_blank'
              className='text-[#7F61FF] font-semibold underline underline-offset-2'>
              Whatsapp
            </Link>
          </p>
        </div>
        <div className='w-full' data-aos='fade-left'>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

const Form = () => {
  const GoogleSheetUrl = import.meta.env.VITE_GoogleSheetUrl;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "contact",
  });
  const handleSubmit = async e => {
    e.preventDefault();
    // Handle form submission logic here

    const GoogleSheetId = import.meta.env.VITE_GoogleSheetId;
    const response = await fetch(GoogleSheetUrl, {
      method: "POST",
      mode: "no-cors",

      headers: {
        "Content-Type": "application/x-form-urlencoded",
      },
      body: JSON.stringify(formData, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        token: GoogleSheetId,
        type: "contact",
      }),
    });
    console.log(response);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-6  w-full px-8 py-8 xl:py-0 '>
      <div className='flex flex-col gap-4 w-full'>
        <label className='font-semibold'>Name</label>
        <input
          type='text'
          placeholder='Name'
          className='w-full text-lg p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <label className='font-semibold'>Work email</label>
        <input
          type='email'
          placeholder='hello@company.com'
          className='w-full text-lg p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <label className='font-semibold'>Phone Number</label>
        <input
          type='text'
          placeholder='+1 XXX (XXX) (XXXX)'
          className='w-full text-lg p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <label className='font-semibold'>Message</label>
        <textarea
          rows='6'
          type='text'
          placeholder='Message....'
          className='w-full text-lg p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type='submit'
        className='p-4 bg-[#7F61FF] text-white hover:bg-[#6a4cd8] transition-colors duration-300'>
        Submit
      </button>
    </form>
  );
};
