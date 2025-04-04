import { useState } from "react";
import { Home,Download,CheckCircle, GraduationCap, Brain, Handshake, UserCheck, DollarSign, BadgeDollarSign, Video, BookCheck, Briefcase, User} from "lucide-react";
import Form from "./component/Form";
import Card from "./component/card/Card";
import Button from "./component/Button";
import Reviews from "./component/card/Reviews";
import MentorCard from "./component/card/MentorCard";
import QuestionCard from "./component/card/QuestionCard";
import { singlTeacher,ManAlone, Dhurina, Kodu, Kodu4, KoduMam, KoduMam2, KoduMamSir } from "./data/ImgData";

function App() {

  const toolsArray = [
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Adobe_Photoshop_CC_icon.svg.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-1.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/rank.png",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-1-1.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/e.webp",
    'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-3.png',
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-2.png",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/meta-icon.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/174881.png",
  ];

  const ReviewsArray= [
    {
      name:'Rajesh Kumar',
      description:'Enrolling in Digital Chaabi Academy was the best decision for my business. The strategies I learned helped me increase my revenue by 50% within just six months. My business became profitable for the first time, and I owe it all to the expert guidance and practical insights from the academy.',
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-1.webp'
    },
    {
      name:'Anil Mehta',
      description:"I was able to implement advanced digital marketing techniques that boosted my client base and significantly increased my earnings. The academy's comprehensive training not only helped me grow my business but also paved the way for continuous career growth. A game-changer for digital entrepreneurs",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-3.webp'
    },
    {
      name:'Suresh Ray',
      description:"The courses are incredibly detailed and hands-on, providing me with the tools and knowledge to effectively market my business online. I've seen a substantial increase in both traffic and sales, making my business more profitable than I ever imagined. This academy is a must for anyone serious about success",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-2.webp'
    },
    {
      name:'Ravneet Singh',
      description:"The courses are well-structured and cover everything you need to know about digital marketing. Not only did I advance my career, but my business also became profitable faster than I expected. The academy's focus on practical application ensures you see real results",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/person.png'
    }
  ]

  const mentors = [
    {
      name: "Ankush Mehta",
      title: "Multipreneur, Founder- Digital Chaabi Brands",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Ankush-Mehta.webp',
    },
    {
      name: "Sunil Mehta",
      title: "Admin, Healthcare & Influencer Marketing Practitioner",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/rohit-sir.webp',
    },
    {
      name: "Aryan Tiwari",
      title: "Growth Catalyst Brand Marketer",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Harsh-sir-1.webp'
    }
  ];

  const quesArray=[
    {
      title:'What sets apart the Digital Marketing program in Hisar from other programs? ',
      discription:'The Digital Marketing program in Hisar is different because it’s all about what works right here. You’ll learn practical stuff that you can use in businesses around Hisar. Plus, you’ll actually do things, not just talk about them. It’s like learning by doing, which makes it way easier to understand and remember. So, when you finish, you’ll be ready to confidently tackle any digital marketing job.',
    },
    {
      title:'How is AI technology integrated into the Digital Marketing curriculum?',
      discription:'In our Digital Marketing program, we show you how to use AI to make your marketing super effective. You’ll learn to understand data, know your customers better, and create ads that really work. It’s like having a super-smart helper by your side! So, when you finish, you’ll be ahead of the pack and impress everyone with your awesome skills.',
    },
    {
      title:'Is prior marketing experience necessary to enroll in the Digital Marketing program?',
      discription:'No, you don’t need any marketing experience to join our Digital Marketing program. We welcome beginners who are just starting, as well as those with some experience looking to level up their skills. Our program is designed to meet you where you are and help you succeed, no matter your background.',
    },
    {
      title:'What are the potential career paths after completing a Digital Marketing program in Hisar?',
      discription:'Upon completion, graduates can pursue various career paths, including direct positions such as Digital Marketing Specialist, Social Media Manager, SEO Analyst, Content Marketer, Email Marketing Manager, Paid Advertising Specialist, and Digital Marketing Strategist.',
    }
  ] 

  const trainers = [
    {
      name: "Shushmita goyal",
      title: "Multipreneur, Founder - Digital Chaabi Brands",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/a.webp',
    },
    {
      name: "Tammana Rathi",
      title: "Admin, Healthcare & Influencer Marketing Practitioner",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/renu-300x300-1.webp',
    },
    {
      name: "Rahul Jhangra",
      title: "Growth Catalyst Brand Marketer",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Monu-Saharan-SEO-1-1.webp',
    },
  ];
  

  return (
    <div className="h-full w-screen bg-gray-800 text-white">
      {/* First Section */}
      <section className="p-10 pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-50 mt-10 ml-10">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Logo and Featured Section */}
            <div className="flex items-center gap-4 ml-15">
              <img
                src={Kodu}
                alt="Logo"
                height={100}
                width={100}
              />
              <div>
                <h1 className="font-bold text-xl">KODU</h1>
                <h1 className="font-bold text-xl">Code Your Future</h1>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-bold leading-tight ml-15">
              Bano Ek <br />
              <p className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent ">Skilled Digital Marketer</p>
              Sirf 100 Dino Mai
            </h1>

            {/* Collaboration Section */}
            <div className="flex items-center gap-4 ml-15">
              <p className="text-lg font-bold">In Collaboration With</p>
              <img
                src={Dhurina}
                alt="SmallLogo"
                className="h-12"
              />
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-2xl mt-5">
              <img
                src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-2.png"
                className="w-full h-auto object-cover rounded-lg ml-12"
              />
            </div>
          </div>
          {/* Form Component */}
          <div className=" self-start">
            <Form />
          </div>

          {/* Right Content */}
        </div>
      </section>

      {/* Second Section */}
      <section className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {[
            { title: "100 Days", subtitle: "Duration" },
            { title: "15+ AI Tools", subtitle: "Features" },
            { title: "100% Placement", subtitle: "Assistance*" },
            { title: "Scholarship", subtitle: "Get up to 100% scholarship!" },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-t from-purple-600 to-blue-600 text-center p-4 rounded-lg`}
            >
              <p className="font-bold text-2xl">{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section */}
      <section className="py-10 text-center">
        <h2 className="font-bold text-5xl mb-12">Learn from Experts!</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {text:"Access to Recorded Classes",icon:<Video/>},
            {text:"Expert Live Sessions",icon:<BookCheck/>},
            {text:"Hands-on Projects",icon:<GraduationCap/>},
            {text:"100% Job Placement Assistance",icon:<Briefcase/>},
            {text:"Industry Certifications",icon:<UserCheck/>},
            {text:"Lifetime Access",icon:<User/>},
          ].map((itm, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Icon Placeholder */}
              <span className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">{itm.icon}</span>
              <p className="font-bold text-xl">{itm.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fourth Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8">
            What our learners say →
          </h2>

          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
            {/* Video 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/lQ61Py-yK_g?si=sjZskYAnHR5WG4ls"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/H1wJ65CHjHg?si=_uShHVjTRt4FwoZK"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.youtube.com/embed/ii56gROfb80?si=4YaO1oXUkmzhMHhD"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="py-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-5xl">
            Curriculum Jo Banaye Apko Skill Ready
          </h2>
          <p className="font-semibold mt-4 text-lg">
            With new & updated modules!
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            {[
              "WordPress Website",
              "SEO",
              "Content and Copywriting",
              "Shopify and E-Commerce",
              "Google Ads",
              "Meta Ads",
              "Influencer Marketing",
              "Communication Skills",
              "AI Integration",
            ].map((itm, idx) => (
              <Card key={idx} title={itm} buttonText={"Read More"} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { number: "180+", label: "Learning Hours" },
            { number: "13+", label: "Live Projects" },
            { number: "3", label: "Months Internship" },
          ].map((itm, idx) => (
            <div
              key={idx}
              className="bg-gray-900 w-60 h-32 flex flex-col items-center justify-center rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-5xl">{itm.number}</h3>
              <p className="font-semibold text-lg">{itm.label}</p>
            </div>
          ))}
        </div>

        {/* Download Brochure Button */}
        <div className="flex justify-center mt-10">
          <Button
            className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-3 px-6 rounded-lg text-2xl 
                 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:-translate-y-1 flex flex-row gap-3"
            text="Download Brochure" icon={<Download className="mt-1"/>}
          />
        </div>
      </section>

      {/* Sixth Section */}
      <section>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl">Join this program if you are a</h2>

          <div className="flex flex-wrap grid-cols-2 gap-7 justify-center">
            {[
              {
                title: "Student & Recent Graduate",
                description:
                  "Grab Your 1st Job with the help of our AI-powered marketing course and kickstart your career now",
                  icons:<GraduationCap className="mt-1"/>,
              },
              {
                title: "Marketing Enthusiast",
                description:
                  "Level up your skills and master advanced marketing strategies with our practical skill-based course",
                  icons:<Brain className="mt-1"/>,
              },
              {
                title: "Entrepreneur",
                description:
                  "Don’t wait anymore, grow your business success with practical insights and actionable strategies.",
                  icons:<Handshake className="mt-1"/>,
              },
              {
                title: "Freelancer",
                description:
                  "Maximize your freelancing revenue with our specialized strategies and expert guidance.",
                  icons:<BadgeDollarSign className="mt-1"/>,
              },
            ].map((itm, idx) => (
              <div key={idx}>
                <Card title={itm.title} description={itm.description} icon={itm.icons} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seventh Section */}
      <section>
        <div className="flex flex-col items-center mt-10">
          <h1 className="font-bold text-5xl">
            Pleasure to Meet Few Known Faces
          </h1>
          <div className="flex mt-8 gap-2">
            <img
              src={Kodu4}
              alt=""
              className="h-80 w-90 rounded-2xl"
            />
            <img
              src={KoduMam}
              alt=""
              className="h-80 w-80 rounded-2xl"
            />
            <img
              src={KoduMam2}
              alt=""
              className="h-80 w-80 rounded-2xl"
            />
            <img
              src={KoduMamSir}
              alt=""
              className="h-80 w-80 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Eighth Section */}
      <section>
        <div className="flex flex-col items-center mt-8">
          <h1 className="font-bold text-5xl">Expected Outcomes</h1>
          <div className="flex flex-wrap grid-cols-2 justify-center items-center">
            {[
              {
                title: "State Your Own Business",
                description:
                  "Have the freedom to make decisions, set your direction, and start a business that is your dream and inspires you most.",
              },
              {
                title: "Get Your First Job",
                description:
                  "With 100% Job Placement Assistance, you’re not just preparing for a job but opening your door for endless career opportunities.",
              },
              {
                title: "Be A Transformed Personality",
                description:
                  "Transform Your Personality and become corporate-ready. We focus on training you with essential soft skills and interview-cracking hacks.",
              },
              {
                title: "Start Your Career as an Influencer",
                description:
                  "Become a famous face and learn how to create engaging content that helps you build an audience and personal brand.",
              },
            ].map((itm, idx) => (
              <div key={idx}>
                <Card
                  title={itm.title}
                  description={itm.description}
                  className={"hover:border-1"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ninth Section */}

      <section className="py-10">
        <div className="flex justify-center">
          <h1 className="font-bold text-5xl mb-12 mt-5">
            Baniye Kodu Academy Ke Sath Career-Ready
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto bg-gradient-to-r from-blue-600  bg-transparent rounded-2xl">
          {/* Left Side */}
          <div className="flex flex-col items-center text-center gap-6 max-w-sm">
            <div>
              <h4 className="text-2xl font-bold">Industry-Driven Projects</h4>
              <p className="text-gray-300 mt-2">
                Get hands-on experience through projects sponsored by industry
                leaders for your career.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Mentorship Program</h4>
              <p className="text-gray-300 mt-2">
                Receive guidance from industry mentors who provide valuable
                advice, ensuring you have the best support.
              </p>
            </div>
          </div>

          {/* Image in Center */}
          <div className="w-60 h-60 flex-shrink-0">
            <img
              src={singlTeacher}
              alt="Teacher"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center text-center gap-6 max-w-sm">
            <div>
              <h4 className="text-2xl font-bold">Internship Opportunities</h4>
              <p className="text-gray-300 mt-2">
                Access strategic internships for career-boosting hands-on
                experience and professional growth.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">1 to 1 Career Counseling</h4>
              <p className="text-gray-300 mt-2">
                Receive personalized career counseling sessions to identify your
                strengths, interests, and career goals.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center mt-28">
            <h2 className="font-bold text-5xl">Our Brands</h2>
          </div>
          <div className="flex justify-center gap-5 mt-5 animate-pulse">
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-55.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-57.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-52.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-51.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-53.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-54.png"
              alt=""
              className="h-25 w-50"
            />
          </div>
        </div>
      </section>

      {/* Tenth Section */}

      <section>
        <div className="flex flex-col items-center mt-3 justify-center">
          <h2 className="font-bold text-5xl">
            Internships & Placements for Your Success
          </h2>
          <p className="font-semibold w-250 mt-7 text-center">
            We go beyond education—we build careers! Our students have
            successfully secured internships and placements in top companies,
            gaining hands-on experience and industry insights. With our strong
            network and dedicated support, we ensure you get the right
            opportunities to grow and succeed. Start your journey with us and
            step into a brighter future!
          </p>
        </div>

        <div>
          <div className="flex justify-center gap-5 mt-15 animate-pulse">
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-55.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-57.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-52.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-51.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-53.png"
              alt=""
              className="h-25 w-50"
            />
            <img
              src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-54.png"
              alt=""
              className="h-25 w-50"
            />
          </div>
        </div>
      </section>

      {/* Eleventh Section */}

      <section>
        <div className="flex flex-col items-center gap-5 mt-5">
          <h2 className="font-bold text-5xl mt-5">Master 20+ Tools</h2>
          <p className="font-semibold mt-5 mb-5">And become a pro digital marketer</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 ">
            {toolsArray.map((itm, idx) => (
              <div
                key={idx}
                className="bg-black p-8 shadow-white shadow-2xs border border-black flex justify-center items-center rounded-2xl w-45"
              >
                <img src={itm} alt="Tools Logo" className="h-25 w-40 rounded-2xl " />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Twelth Section */}

      <section>
        <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-r from-violet-700 to-sky-700 mt-12 rounded-2xl w-screen">

          <h2 className="font-bold text-5xl w-6xl text-center">Special Discount 30% Off on Fees only for today if you enquire now</h2>
          <Button text={'Enquire Now'} className={'text-2xl mt-8'} icon={<CheckCircle className="mt-1.5"/>}/>
          <p className="font-semibold mt-5">Last 16 Seats Left</p>
        </div>
      </section>

      {/* Thirteenth Section */}

      <section >
        <h2 className="text-center font-bold text-5xl mt-12 mb-8">What our students say!</h2>
        <div className="flex">
          {
            ReviewsArray.map((itm,idx)=>(
              <div key={idx}>
                <Reviews name={itm.name} description={itm.description} img={itm.img}/>
              </div>
            ))
          }
        </div>
      </section>

      {/* Fourteenth Section */}

      <section>
        <div className="h-120 bg-gray-800 shadow-white shadow-[0px_-2px_5px_rgba(34,197,94,0.6)]">

          <div className="flex justify-center mt-7 pt-9 gap-8">

            <div className="flex flex-col w-122 gap-5">
              <h2 className="font-bold text-5xl pt-12 right-8">Get certified with a verifiable certificates.</h2>
              <p className="font-serif">We will also assist you with getting certificates from Google, Meta, Semrush, and more.</p>
              <div className="flex flex-col w-52 items-center gap-5 ml-4">
              <Button text={'Download Brochure'} className={'bg-gradient-to-r from-violet-600 to-green-500 text-xl w-68 h-13 flex pt-3 '} icon={<Download className="mr-3"/>}/></div>

            </div>
            {/* Certificate Section */}

            <img src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-63-1.webp" alt="Certificate"
            className="h-90 w-130 shadow-black shadow-2xl" />
          </div>

        </div>
      </section>

      {/* Fifteenth Section */}

      <section>
        <h2 className="font-bold text-5xl text-center text-slate-100 mt-8">Learn from top Industry Experts</h2>
        <div className="flex flex-col items-center mt-5">
          <h4 className=" flex gap-5 text-3xl mb-5 mt-3">Our <p className="text-3xl font-bold">Mentors</p></h4>
          <div className="flex grid-cols-4 gap-7">
            {
              mentors.map((itm,idx)=>(
                <div key={idx}>
                  <MentorCard name={itm.name} title={itm.title} img={itm.img}/>
                </div>
              ))
            }

          </div>          
          <h4 className=" flex gap-5 text-3xl mb-5 ">Our <p className="text-3xl font-bold">Trainers</p></h4>

          <div className="flex grid-cols-4 gap-7">
            {
              trainers.map((itm,idx)=>(
                <div key={idx}>
                  <MentorCard name={itm.name} title={itm.title} img={itm.img}/>
                </div>
              ))
            }

          </div> 
        </div>
      </section>

      {/* Sixtinth Section */}

      <section>
        <div className="flex flex-col items-center mb-8 gap-12">

        <h1 className="font-bold text-5xl">Frequently Asked Questions</h1>

        {
          quesArray.map((itm,idx)=>(
            <div key={idx}>
              <QuestionCard title={itm.title} discription={itm.discription}/>
            </div>
          ))
        }


        {/* left content of questions here.... */}

        <Button text={'Download Brochure'} className={'text-xl bg-gradient-to-r from-violet-500 to-blue-600 flex flex-row gap-3'} icon={<Download className="mt-0.5"/>}/>
        </div>
      </section>

      {/* Seventeenth Section */}

      <section>
        <div className="flex flex-col items-center bg-gradient-to-r from-violet-600 to-blue-500 h-80 pt-15">
        <h2 className="text-center font-bold text-5xl mb-8 w-180">Start your Digital Marketing Success Journey Today</h2>
        <Button text={'BOOK MY SEAT'} className={'text-2xl bg-gradient-to-r from-violet-700 to-blue-700 flex flex-row gap-3'} icon={<CheckCircle className="mt-1.5"/>}/>
        </div>
      </section>
    </div>
  );
}

export default App;
