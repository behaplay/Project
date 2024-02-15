import { Baground } from "./Main/Baground"
import { Card } from "./Main/Card"
import { Card2 } from "./Main/Card2"
import { Hero } from "./Main/Hero"
import { Information } from "./Main/Information"
import { Information2 } from "./Main/Information2"
import { Information3 } from "./Main/Information3"
import { Information4 } from "./Main/Information4"
import { OurService } from "./Main/OurService"
import { Pople } from "./Main/Pople"
import { Registor } from "./Main/Registor"
import { Video } from "./Main/Video"

export const Mian = () => {
  return (
    <main>
       <Hero />
       <Information />
       <Video />
       <Information2 />
       <OurService />
       <Information3 />
       <Information4 />
       <Registor />
       <Card />
       <Baground />
       <Pople />
       <Card2 />
    </main>
  )
}
