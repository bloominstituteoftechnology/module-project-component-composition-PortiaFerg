import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`





function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
        console.log(err.message)
        })
    }
    //fetchPhoto()
    setApod({
      "date": "2024-05-26",
      "explanation": "What's happened to our Sun?  Nothing very unusual -- it just threw a filament. Toward the middle of 2012, a long standing solar filament suddenly erupted into space, producing an energetic coronal mass ejection (CME).  The filament had been held up for days by the Sun's ever changing magnetic field and the timing of the eruption was unexpected. Watched closely by the Sun-orbiting Solar Dynamics Observatory, the resulting explosion shot electrons and ions into the Solar System, some of which arrived at Earth three days later and impacted Earth's magnetosphere, causing visible auroras. Loops of plasma surrounding the active region can be seen above the erupting filament in the featured ultraviolet image. Our Sun is nearing the most active time in its 11-year cycle, creating many coronal holes that allow for the ejection of charged particles into space. As before, these charged particles can create auroras.    Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)",
      "hdurl": "https://apod.nasa.gov/apod/image/2405/filament_sdo_1080.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Solar Filament Erupts",
      "url": "https://apod.nasa.gov/apod/image/2405/filament_sdo_960.jpg"
  })
  }, [])

  if(!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
   </section>
  )
}

export default App
