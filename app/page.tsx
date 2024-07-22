import Image from "next/image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GridTemp from "./components/gridtemplate/gridtemp";
import Project from "./components/projects/project";
import TextField from '@mui/material/TextField';
import LeftCard from "./components/sixthcard/leftCard";
import RightCard from "./components/sixthcard/rightCard";

export default function Home() {
  return (
    <div className=" bg-gray-100 w-screen">

      {/*NAVBAR */}
      <nav className="nav items-center bg-white flex h-24 sticky top-4 ">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="w-20"/>
        </div>

        <div className="framer w-1/2 font-medium">
          <ul className="flex flex-row">
            <li className='ml-8 text-sm hover:underline hover:font-semibold'><a href="#">Service</a></li>
            <li className='ml-8 text-sm hover:underline hover:font-semibold'><a href="#">Media</a></li>
            <li className='ml-8 text-sm hover:underline hover:font-semibold'><a href="#">Cases</a></li>
            <li className='ml-8 text-sm hover:underline hover:font-semibold'><a href="#">FAQ</a></li>
            <li className='ml-8 text-sm hover:underline hover:font-semibold'><a href="#">Contacts</a></li>
          </ul>
        </div>

        <div className="cont flex flex-row font-medium h-4 items-center">
          <div className="flex flex-row mr-8">
            <img src="/phone.png" alt="phone" className='w-6 h-6 mr-2' />
            <p className=' flex text-sm items-center'>+91 <span className='ml-4'>000000000</span></p>
          </div>
          <div className="flex flex-row">
            <img src="/mail.png" alt="mail" className='w-6 h-6 mr-2' />
            <p className='flex text-sm items-center'>demo@gmail.com</p>
          </div>
        </div>
      </nav>


      {/* HOME PAGE */}
      <div className="first p-24 flex flex-row bg-gray-100 h-screen text-4xl">
        <div className="w-1/2">
          <div className="fcont1">
            <h1 className="fhead font-semibold leading-10"><span className="text-amber-400 font-extrabold">User-Centric Excellence</span>: Our <span className="font-bold">App Development services</span> Tackles Your Pain Points</h1>
            <h1 className="font-medium text-lg fpara">Experience a Seamless Digital Journey with <span className="font-extrabold text-lime-600">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="font-extrabold text-amber-400">Elevates Your App Experience</span> to Unparalleled Heights.</h1>
          </div>

          <div className="fcont2  bg-white p-6 mt-20">
            <h1 className="font-extrabold f2head">Leave your contacts and we will call you back<br />
              within 30 minutes</h1>

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
                <button type="submit" className="bg-lime-700 text-xl font-medium text-white w-32 py-1 mt-16 px-6 btn  flex justify-end ml-7">Get consultion</button>
              </div>
            </div>
          </div>
        </div>

        <div className="image">
          <img src="/sixthphone.png" alt="" />
        </div>
      </div>

      {/* SECOND PAGE */}
      <div className="second pb-14 bg-white  h-screen w-screen pt-10">
        <div className="logo_line">
          <hr />
          <div className="flex flex-row items-center justify-evenly h-48">
            <img src="/logoplant.png" alt="company logo" className="h-20" />
            <img src="/logoplant.png" alt="company logo" className="h-20" />
            <img src="/logoplant.png" alt="company logo" className="h-20" />
            <img src="/logoplant.png" alt="company logo" className="h-20" />
            <img src="/logoplant.png" alt="company logo" className="h-20" />
            <img src="/logoplant.png" alt="company logo" className="h-20" />
          </div>
          <hr />
        </div>


        <div className="sec2 flex justify-center mt-14 ">
          <div className="field">
            <h1 className="font-bold text-4xl mt-2">Full development cycle</h1>
            <p className=" mt-4 text-base font-medium">We use proven technologies</p>

            <div className="mt-7">
              <h1 className="font-semibold text-xl">Web</h1>
              <p className="w-3/4">PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt / MySQL / Laravel / GO lang / django / Python</p>

            </div>

            <div className="mt-7">
              <h1 className="font-semibold text-xl">Mobile</h1>
              <p className="w-3/4">Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>

            </div>
          </div>


          <ul className="option flex flex-col justify-evenly">
            <li>iOS development <ChevronRightIcon /></li>
            <li>Android development <ChevronRightIcon /></li>
            <li>Web development <ChevronRightIcon /></li>
            <li>UI/UX design <ChevronRightIcon /></li>
            <li>Testing <ChevronRightIcon /></li>
            <li>Launch <ChevronRightIcon /></li>
            <li>IT consulting <ChevronRightIcon /></li>
          </ul>
        </div>
      </div>

      {/* THIRD PAGE */}
      <div className="third w-screen bg-gray-100 p-24">
        <h1 className="font-bold text-4xl line-hei">Developed more than <span className="text-lime-600">100</span><br /> projects in <span className="text-lime-600">15</span> industries</h1>

        <div>
          <div>
            <GridTemp />
          </div>
        </div>
      </div>

      {/* FOURTH PAGE */}
      <div className="fourth w-screen p-24 text-4xl">
        <div className="ffirst">
          <h1 className="font-bold">Projects we are proud of</h1>
          <p className="text-sm font-medium mt-5">Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership</p>
        </div>

        <Project />

        <div className="flex">
          <div>
            <h1 className="font-bold text-4xl mt-11">Project 1</h1>
            <p className="text-sm pr-4 mt-6">Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels</p>
            <p className="text-lg font-normal mt-11">Business analysis <span className="text-amber-400">/</span> iOS <span className="text-amber-400">/</span> Android <span className="text-amber-400">/</span> QA <span className="text-amber-400">/</span> UI<span className="text-amber-400">/</span>UX Design</p>
            <div className="flex mt-11">
              <div className="flex mr-11">
                <img src="/location.png" alt="" />
                <p className="text-sm">India</p>
              </div>

              <div className="flex">
                <img src="/realestate.png" alt="" />
                <p className="text-sm">Real Estate</p>
              </div>
            </div>

            <div className="flex mt-11">
              <div >
                <p className="font-bold text-2xl">400%</p>
                <p className="text-xs font-normal">User Growth</p>
              </div>
              <div className="ml-10">
                <p className="font-bold text-2xl">+200 000</p>
                <p className="text-xs font-normal">Active Users</p>
              </div>
            </div>

            <img src="/playstore.png" alt="" className="w-80 mt-9 pointer" />
          </div>

          <img src="/Sphone.png" alt="" className="image" />

          <div>

          </div>
        </div>

      </div>

      {/* FIFTH CONTAINER */}
      <div className="fifth flex px-24 py-14 justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">Let's discuss</h1>
          <p className="mt-3 text-4xl font-bold text-white">Your project</p>
          <p className="font-medium mt-9 text-white">Let's figure out how to create an effective application,<br />its cost and terms of its development</p>
        </div>

        <div className="form ">
          <div className="flex justify-between">
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

          <div className="marin flex justify-between mt-4">
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

          <div>
            <button type="submit" className="bg-amber-400 w-44 py-2.5 px-6 btn mt-9 flex justify-end ml-72">Discuss the project</button>
          </div>
        </div>
      </div>

      {/* SIXTH PAGE */}
      <div className="sixth flex flex-col w-screen  bg-white p-24">
        <h1 className="font-bold text-4xl">Application Development Stages</h1>
        <div className="sixCard flex mt-11 justify-center">
          <div>
            <LeftCard />
          </div>

          <div>
            <img src="/sixthphone.png" alt="" />
          </div>

          <div>
            <RightCard />
          </div>
        </div>
      </div>

      {/* SEVENTH PAGE */}
      <div className="seventh w-screen flex justify-between ">
        <div >
          <h1 className="font-bold text-4xl">Our team</h1>
          <p className="texti font-medium text-base mt-9">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>

          <div className="flex mt-11 count">
            <div className="mr-9">
              <h1 className="font-bold text-5xl">28</h1>
              <p className="text-sm font-medium text text-slate-400 mt-4">team members</p>
            </div>

            <div className="mr-9">
              <h1 className="font-bold text-5xl">+100</h1>
              <p className="text-sm font-medium text text-slate-400 mt-4">projects</p>
            </div>

            <div>
              <h1 className="font-bold text-5xl">7 years</h1>
              <p className="text-sm font-medium text text-slate-400 mt-4">in IT sphere</p>
            </div>
          </div>

          <p className="texti font-medium text-base mt-9">All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it</p>
        </div>

        <img src="/team.png" alt="" className="w-1/2" />
      </div>

      {/* EIGHT PAGE */}
      <div className="eight p-24 bg-white w-screen">
        <h1 className="font-bold text-4xl ">FAQ</h1>

        <div className="faq flex justify-between mt-9">
          <div>
            <hr />
            <div className="flex justify-between ques items-center font-semibold text-lg">
              <h1>What is the cost of a mobile application?</h1>
              <img src="/plus.png" alt="" />
            </div>
            <hr />
            <div className="flex justify-between ques items-center font-semibold text-lg">
              <h1>Do you provide a guarantee for the mobile application?</h1>
              <img src="/plus.png" alt="" className="" />
            </div>
            <hr />
          </div>

          <div>
            <hr />
            <div className="flex justify-between ques items-center font-semibold text-lg">
              <h1>How long will development take?</h1>
              <img src="/plus.png" alt="" />
            </div>
            <hr />
            <div className="flex justify-between ques items-center font-semibold text-lg">
              <h1>I will not tell my idea, do you guarantee confidentiality?</h1>
              <img src="/plus.png" alt="" className="" />
            </div>
            <hr />
          </div>
        </div>
      </div>


      {/* FOOTER */}
      <footer className="w-screen bg-white px-24">
        <div className="footer">
          <div className="flex justify-center">
            <img src="/logo-light.png" alt="" className="text-center" />
          </div>

          <div className="flex justify-between mt-6 option">
            <div className="fotion">
              <div className="flex items-center mb-2">
                <img src="/smartphone_outline.png" alt="" className="w-6 h-6" />
                <h1 className="text-slate-400 text-sm ml-1">Contact number</h1>
              </div>
              <p className="text-white">+91 000000000</p>
            </div>

            <div className="fotion">
              <div className="flex items-center mb-2">
                <img src="/mail_outline.png" alt="" className="w-6 h-6" />
                <h1 className="text-slate-400 text-sm ml-1">Gmail</h1>
              </div>
              <p className="text-white">demo@gmail.com</p>
            </div>

            <div className="fotion">
              <div className="flex items-center mb-2">
                <img src="/place_outline.png" alt="" className="w-6 h-6" />
                <h1 className="text-slate-400 text-sm ml-1">Address</h1>
              </div>
              <p className="text-white">Mumbai, India</p>
            </div>

            <div className="fotion">
              <div className="flex items-center mb-2">
                <img src="/document_outline.png" alt="" className="w-6 h-6" />
                <h1 className="text-slate-400 text-sm ml-1">Leave a request</h1>
              </div>
              <p className="text-white">Leave a request</p>
            </div>
          </div>

          <h1 className="text-center text-white mt-16 text-sm">We work throughout the world</h1>
        </div>
      </footer>

    </div>
  );
}
