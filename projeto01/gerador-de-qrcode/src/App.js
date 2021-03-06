import QRCode  from 'qrcode'
import { useEffect, useState } from 'react'

const App = ({text}) => {

  const [src, setSrc] = useState ("")

  useEffect (() => {
    QRCode.toDataURL(text).then((setSrc))
  }, [text])

  return ( 
    <div>
      <img src={src}/>
    
    </div>
  )
}
  

export default App