import Image from "next/image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GridTemp from "./components/gridtemplate/gridtemp";
import Project from "./components/projects/project";
import TextField from '@mui/material/TextField';
import LeftCard from "./components/sixthcard/leftCard";
import RightCard from "./components/sixthcard/rightCard";

export default function Home() {
  return (
    <div className="bg-gray-100 w-screen">
      {/* NAVBAR */}
      <nav className="nav items-center bg-white flex h-24 sticky top-0">
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </div>
        <div className="framer w-1/2 font-medium">
          <ul className="flex flex-row">
            {['Service', 'Media', 'Cases', 'FAQ', 'Contacts'].map((item) => (
              <li key={item} className="ml-8 text-sm hover:underline hover:font-semibold">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="cont flex flex-row font-medium h-4 items-center">
          <div className="flex flex-row mr-8">
            <Image src="/phone.png" alt="phone" width={24} height={24} className="mr-2" />
            <p className="flex text-sm items-center">+91 <span className="ml-4">000000000</span></p>
          </div>
          <div className="flex flex-row">
            <Image src="/mail.png" alt="mail" width={24} height={24} className="mr-2" />
            <p className="flex text-sm items-center">demo@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* HOME PAGE */}
      <div className="first p-24 flex flex-row bg-gray-100 h-screen text-4xl">
        <div className="w-1/2">
          <div className="fcont1">
            <h1 className="fhead font-semibold leading-10">
              <span className="text-amber-400 font-extrabold">User-Centric Excellence</span>: Our <span className="font-bold">App Development services</span> Tackles Your Pain Points
            </h1>
            <h1 className="font-medium text-lg fpara">
              Experience a Seamless Digital Journey with <span className="font-extrabold text-lime-600">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="font-extrabold text-amber-400">Elevates Your App Experience</span> to Unparalleled Heights.
            </h1>
          </div>
          <div className="fcont2 bg-white p-6 mt-20">
            <h1 className="font-extrabold f2head">Leave your contacts and we will call you back within 30 minutes</h1>
            <div className="form mt-8 flex flex-row">
              <div className="w-3/4">
                <div className="change flex justify-between">
                  <TextField
                    className="textfield"
                    required
                    id="standard-required"
                    label="Full name"
                    defaultValue="My Name"
                    variant="standard"
                  />
                  <TextField
                    className="textfield"
                    required
                    id="standard-required"
                    label="Phone number"
                    defaultValue="+91 000000000"
                    variant="standard"
                  />
                </div>
                <div className="marin flex justify-between mt-9">
                  <TextField
                    className="textfield"
                    required
                    id="standard-required"
                    label="Business name"
                    defaultValue="ABC Technologies PVT LTD"
                    variant="standard"
                  />
                  <TextField
                    className="textfield"
                    required
                    id="standard-required"
                    label="Business mail"
                    defaultValue="demoaccount@gmail.com"
                    variant="standard"
                  />
                </div>
              </div>
              <div className="w-2">
                <button type="submit" className="bg-lime-700 text-xl font-medium text-white w-32 py-1 mt-16 px-6 btn flex justify-end ml-7">
                  Get consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <Image src="/sixthphone.png" alt="phone" width={500} height={500} />
        </div>
      </div>

      {/* SECOND PAGE */}
      <div className="second pb-14 bg-white h-screen w-screen pt-10">
        <div className="logo_line">
          <hr />
          <div className="flex flex-row items-center justify-evenly h-48">
            {Array(6).fill("/logoplant.png").map((src, index) => (
              <Image key={index} src={src} alt="company logo" width={80} height={80} />
            ))}
          </div>
          <hr />
        </div>
        <div className="sec2 flex justify-center mt-14">
          <div className="field">
            <h1 className="font-bold text-4xl mt-2">Full development cycle</h1>
            <p className="mt-4 text-base font-medium">We use proven technologies</p>
            <div className="mt-7">
              <h1 className="font-semibold text-xl">Web</h1>
              <p className="w-3/4">PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / GO lang / django / Python</p>
            </div>
            <div className="mt-7">
              <h1 className="font-semibold text-xl">Mobile</h1>
              <p className="w-3/4">Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
            </div>
          </div>
          <ul className="option flex flex-col justify-evenly">
            {['iOS development', 'Android development', 'Web development', 'UI/UX design', 'Testing', 'Launch', 'IT consulting'].map((item) => (
              <li key={item} className="flex items-center">
                {item} <ChevronRightIcon />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* THIRD PAGE */}
      <div className="third w-screen bg-gray-100 p-24">
        <h1 className="font-bold text-4xl line-hei">
          Developed more than <span className="text-lime-600">100</span> projects in <span className="text-lime-600">15</span> industries
        </h1>
        <GridTemp />
      </div>

      {/* FOURTH PAGE */}
      <div className="fourth w-screen p-24 text-4xl">
        <div className="ffirst">
          <h1 className="font-bold">Projects we are proud of</h1>
          <p className="text-sm font-medium mt-5">
            Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership
          </p>
        </div>
        <Project />
        <div className="flex">
          <div>
            <h1 className="font-bold text-4xl mt-11">Project 1</h1>
            <p className="text-sm pr-4 mt-6">
              Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels
            </p>
            <p className="text-lg font-normal mt-11">
              Business analysis <span className="text-amber-400">/</span> iOS <span className="text-amber-400">/</span> Android <span className="text-amber-400">/</span> QA <span className="text-amber-400">/</span> UI<span className="text-amber-400">/</span>UX Design
            </p>
            <div className="flex mt-11">
              <div className="flex mr-11">
                <Image src="/location.png" alt="location" width={24} height={24} />
                <p className="text-sm">India</p>
              </div>
              <div className="flex">
                <Image src="/realestate.png" alt="real estate" width={24} height={24} />
                <p className="text-sm">Real estate</p>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <Image src="/project1.png" alt="Project 1" width={500} height={500} />
          </div>
        </div>
      </div>

      {/* FIFTH PAGE */}
      <div className="fifth bg-gray-100 flex p-24 w-screen">
        <div className="fleft">
          <h1 className="text-4xl font-bold">
            We are ready to fulfill your task. Leave a request for a free consultation
          </h1>
        </div>
        <div className="fright flex flex-row">
          <TextField
            className="textfield"
            required
            id="standard-required"
            label="Name"
            defaultValue="My Name"
            variant="standard"
          />
          <TextField
            className="textfield"
            required
            id="standard-required"
            label="Phone"
            defaultValue="+91 000000000"
            variant="standard"
          />
          <button type="submit" className="bg-lime-700 text-xl font-medium text-white w-32 py-1 mt-5 px-6 btn flex justify-end ml-7">
            Get consultation
          </button>
        </div>
      </div>

      {/* SIXTH PAGE */}
      <div className="sixth bg-white w-screen">
        <div className="stop">
          <h1 className="text-4xl font-bold p-24 leading-10">
            Full-Cycle Development for Leading Brands - Empowering Businesses with Innovative Mobile Apps and Web Solutions.
          </h1>
        </div>
        <div className="card flex justify-center items-center bg-white w-screen pb-24">
          <LeftCard />
          <RightCard />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="foot bg-black w-screen h-60 text-white flex justify-between items-center p-14">
        <div className="f1">
          <h1 className="font-bold text-4xl">Desun Tech</h1>
          <p className="text-sm font-normal mt-5">Crafting Digital Excellence for Your Business Success</p>
        </div>
        <div className="f2 flex flex-row">
          {['About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <div key={item} className="mr-14">
              <h1 className="font-bold text-xl">{item}</h1>
              <ul className="text-sm font-normal mt-5">
                {['Link 1', 'Link 2', 'Link 3'].map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
