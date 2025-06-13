import { Link } from "react-router-dom";

const ConnectTeam = () => {
  const Info = [
    {
      title: "General Inquiries",
      description: "Have a question about our services or solutions?",
      email: "dev@techinorm.com",
      buttonText: "Talk To Us",
      link: "mailto:dev@techinorm.com",
    },
    {
      title: "Sales & Partnerships",
      description: "Looking to partner out AI, blockchain & tech offerings?",
      email: "sarin@techinorm.com",
      buttonText: "Book A Calender",
      link: "https://calendar.app.google/YmvmiskhMBbi3krn8",
    },
    {
      title: "Strategy & Consulting",
      description: "Looking to explore our tech and other offerings?",
      email: "arun@techinorm.com",
      buttonText: "Book A Calender",
      link: "https://calendar.app.google/Da6GoFXzZbsUvedJA",
    },
  ];
  return (
    <div>
      <div className="pb-[100px] flex flex-col lg:flex-row justify-center items-center gap-8 font-medium">
        {Info.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}
          >
            <h2 className="font-semibold text-xl antialiased">{data.title}</h2>
            <div className="text-center flex flex-col gap-1">
              <p className="font-bold text-gray-500 tracking-tight">
                {data.description}
              </p>
              <Link
                to={`mailto:${data.email}`}
                target="_blank"
                className="text-[#7F61FF] font-semibold underline-offset-2 underline"
              >
                Email: {data.email}
              </Link>
            </div>
            <Link
              to={`${data.link}`}
              target="_blank"
              className="mt-8 bg-[#7F61FF] text-white px-6 py-2 hover:bg-[#6a4cd8] transition-colors duration-300 hover:underline underline-offset-2"
            >
              {data.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectTeam;
