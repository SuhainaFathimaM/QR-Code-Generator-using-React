import { useState } from "react"


export const QRCode = () => {

  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrSize] = useState("");

  async function generateQR(){
     setLoad(true);
     try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
     }
     catch(error){
      console.error("Error generating QR code", error)
     }
     finally{
      setLoad(false);
     }
  }
  function downloadQR(name){
    fetch(img).then((response)=>response.blob()).then((blob)=>{
      const link = document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download="qrcode.png";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    
    });

  }



  return (
    <div className="app-container">
      <h1>
        QR CODE GENERATOR
      </h1>
      {load && <p>Please wait.. It's Loading..</p>}
      {img && <img src={img} className="QRimage"/>}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input type="text" id="dataInput" placeholder="Enter data for QR code" value={qrData} onChange={(e)=>setQrData(e.target.value)} />
        <label htmlFor="sizeInput" className="input-label">
          Image Size (eg,. 150)
        </label>
        <input type="text" id="sizeInput" placeholder="Enter size of QR code" value={qrSize} onChange={(e)=>setQrSize(e.target.value)} />
        <button className="generatebtn" disabled={load} onClick={generateQR}>Generate QR Code</button>
        <button className="downloadbtn" onClick={downloadQR}>Download QR Code</button>
      </div>
      <p className="footer">
        Designed by <a href="https://www.linkedin.com/in/suhaina-fathima-m">Suhaina Fathima M</a>
      </p>
    </div>
  )
}
