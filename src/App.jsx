import { useState } from 'react'
import { budlitenames } from './budlite-data'
import './App.css'

function App() {
  const [budlite, setBudlite] = useState("CHOOSE YOUR FATE")
  const [budliteBGColor, setBudliteBGColor] = useState("bg-emerald-400");
  const [budliteFillColor, setBudliteFillColor] = useState("fill-emerald-500");

  const rollBud = () => {
    const theDrink = budlitenames[Math.floor(Math.random() * budlitenames.length)];
    setBudlite(theDrink.name);
    setBudliteBGColor(theDrink.bg);
    setBudliteFillColor(theDrink.fill);

  }


  return (
    <div className='w-screen h-screen flex items-center flex-col gap-52'>
      <div className={`h-fit w-6/12 ${budliteBGColor} relative z-10 flex justify-center items-center flex-col gap-10 rounded-b-3xl ease-linear duration-150`}>
        <h1 className="text-9xl text-center font-bold">Unlock Your Tropical Twist</h1>
        <p className='text-5xl text-center h-40 font-semibold italic'>{budlite}</p>
      </div>
      <button className={`z-10 ${budliteBGColor} p-5 rounded-3xl text-2xl font-semibold active:scale-90 hover:scale-110 ease-linear duration-150`} onClick={() => {rollBud()}}>Let the God's decide</button>
      <svg className='w-screen h-screen absolute z-0 inset-0' viewBox="0 0 1728 1117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="197" cy="228" r="150" className={`${budliteFillColor} ease-linear duration-150`}/>
        <circle cx="588" cy="948" r="150" className={`${budliteFillColor} ease-linear duration-150`}/>
        <circle cx="1629.5" cy="1024.5" r="305.5" className={`${budliteFillColor} ease-linear duration-150`}/>
        <circle cx="671" cy="489" r="150" className={`${budliteFillColor} ease-linear duration-150`}/>
        <circle cx="1215" cy="419" r="213" className={`${budliteFillColor} ease-linear duration-150`}/>
        <circle cx="66" cy="1050" r="131" className={`${budliteFillColor} ease-linear duration-150`}/>
        <circle cx="1090" cy="841" r="107" className={`${budliteFillColor}ease-linear duration-150`}/>
        <circle cx="223" cy="649" r="107" className={`${budliteFillColor} ease-linear duration-150`}/>
        <circle cx="695" cy="132" r="107" className={`${budliteFillColor} ease-linear duration-150`}/>
        <circle cx="1614.5" cy="101.5" r="174.5" className={`${budliteFillColor}`}/>
      </svg>
    </div>

  )
}

export default App
