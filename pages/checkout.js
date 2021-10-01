import { useState } from "react"
import ProtectedLayout from "../components/ProtectedLayout";
import Paypal from "../components/paypal";


export default function page() {

 const [value1, setValue1] = useState("")
 const [value2, setValue2] = useState("")
 const [value, setValue] = useState("")
 const [popUp, setPopUp] = useState(false)
 const [subscriptionType, setSubscriptionType] = useState("")

 const Submit1 = (e) => {
  setPopUp(true)
  setValue(value1)
  setSubscriptionType("Rental")
  e.preventDefault()
 }
 const Submit2 = (e) => {
  setPopUp(true)
  setValue(value2)
  setSubscriptionType("Sells & Rental")
  e.preventDefault()
 }

 if (popUp) {
  document.documentElement.scrollTop = 0;
 }


 return (
  <>

   {popUp && <>

    <div className='pb-5 px-4 paypal-popup-main' style={{ background: 'rgba(0, 0, 0, 0.1)', position: "fixed", zIndex: 2000, width: '100%', height: '100%', overflowY: 'scroll', paddingTop: '10%' }}>

     <div className="d-flex justify-content-center pt-4 pb-5 px-5 paypal-popup row" style={{ width: '60%', margin: 'auto', background: 'white' }}>

      <div className="px-2 mb-5 d-flex justify-content-end col-12 ">
       <div className='ml-5 mx-md-2 d-flex align-items-center justify-content-center btn paypal-popup-close' style={{ background: '#FFDCD8', borderRadius: '100%', width: '2.5em', height: '2.5em' }} onClick={() => setPopUp(false)}><img src="/images/close-icon.png" alt="" width='auto' /></div>
      </div>

      <Paypal
       price={value}
       subscription_type={subscriptionType}
       popup={(val) => setPopUp(val)}
       val1={(val) => { setValue1(val) }}
       val2={(val) => { setValue2(val) }}
      />
     </div>

    </div>
   </>}
   <ProtectedLayout>
    <div className="p-5 checkout2">
     <h1 className="p-4 font-weight-bold text-center">Pricing</h1>
     <div className="p-5 checkout2-backbox" >

      <div className="row justify-content-around">
       <div className="checkout2-backbox2"></div>
       <div className="col-sm-10 col-md-5 mb-3 mb-md-0" >
        <div className="card checkout2-frame1 mt-md-5" >
         <div className="card-body">
          <div className="card-title ">
           <h5 className="font-weight-bold" style={{ color: "black" }}>Rental Subscription
            <br />
           </h5>
           <h3 className="font-weight-bold" style={{ color: '#4AAEE8' }}>$100/M</h3>

          </div>

          <hr className="checkout2-hr my-4"></hr>

          <div className=" font-weight-bold" > WHAT'S INCLUDED
          </div>
          <br />


          <ul className='px-3'>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Ipsum cursus vestibulum massa faucibus.</li>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Elementum ullamcorper viverra id faucibus.</li>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Nulla ut nec ornare porttitor mi feugiat nulla.</li>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Egestas magna amet augue leo bibendum.</li>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Velit in scelerisque orci in eget vitae nulla.</li>
          </ul>
          <br />
          <form onSubmit={Submit1} className="px-3" >
           <div className="form-group">
            <label className=" font-weight-bold">DOWN PAYMENT</label>
            <input required style={{ height: "49px", background: "#DFE1E6" }} type="number" className="form-control" id="payment" placeholder="$300" value={value1} onChange={(e) => { setValue1(e.target.value) }} />
           </div>

           <button type="submit" className="btn checkout2-btn"><img src="../images/logos_paypal.png" width="13px" /> Pay With PayPal </button>
          </form>
         </div>
        </div>
       </div>

       <div className="col-sm-10 col-md-5" >
        <div className="card checkout2-frame1 mt-md-5" >
         <div className="card-body">
          <div className="card-title ">
           <h5 className="font-weight-bold" style={{ color: "black" }}>Sells & Rental
            <br />
           </h5>
           <h3 className="font-weight-bold" style={{ color: '#4AAEE8' }}>$150/M</h3>

          </div>

          <hr className="checkout2-hr my-4"></hr>

          <div className=" font-weight-bold" > WHAT'S INCLUDED
          </div>
          <br />

          <ul className='px-3'>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Ipsum cursus vestibulum massa faucibus.</li>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Elementum ullamcorper viverra id faucibus.</li>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Nulla ut nec ornare porttitor mi feugiat nulla.</li>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Egestas magna amet augue leo bibendum.</li>
           <li><img src="../images/Ellipse 22.png" width="10px" className="mr-1" />Velit in scelerisque orci in eget vitae nulla.</li>
          </ul>

          <br />

          <form onSubmit={Submit2} className="px-3" >
           <div className="form-group">
            <label className=" font-weight-bold">DOWN PAYMENT</label>
            <input
             required
             style={{ height: "49px", background: "#DFE1E6" }}
             type="number"
             className="form-control"
             placeholder="$300"
             value={value2}
             onChange={(e) => { setValue2(e.target.value) }}
            />
           </div>

           <button type="submit" className="btn checkout2-btn"><img src="../images/logos_paypal.png" width="13px" /> Pay With PayPal </button>
          </form>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>

   </ProtectedLayout>
  </>
 )
}

