import React from 'react'
import './Monitoring.css'
import image11 from '../../assets/bgimg11.svg'
import moni1 from '../../assets/monitor1.svg'
import moni2 from '../../assets/moni2.svg'
import moni3 from '../../assets/moni3.svg'
export default function Monitoring() {
  return (
    <div>
      <div className='container-fluid  maimndiv py-5 '>
        <div className='row justify-content-center'>
          <div className='col-lg-10 col-md-10 col-sm-12'>
            <div className='outer'>
              <div className='roundeddiv bg-white p-4'>
                <div className='row'>
                  <div className='col-md-6 py-lg-5'>
                    <div className="py-5">
                      <div className="row justify-content-lg-start justify-content-center align-items-start py-lg-5">
                        <div className="col-lg-9 col-12 d-flex align-items-center ml-lg-0 ml-3">
                          <div className="w-100 align-items-start w-lg-50 ml-lg-3 py-5 text-secondary">
                            <span className="font-weight-bold fs-5 ">Automate monitoring  </span>
                            <span className="font-weight-normal fs-5">of your trading accounts 24/7. Control your risks and manage your portfolio like a PRO.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className='col-md-6  '>
                    <div className="container-fluid ">
                      <div className=" justify-content-center">
                        <div className="col-lg-12  pl-md-5 pl-0 " style={{ height: "30rem", position: "relative" }}>
                          {/* <div className='bakcend' style={{height:"37rem", width:"27rem", position:"absolute"}} /> */}
                          <div className='img3 helo1' style={{ height: "8rem", marginTop: "4rem"}}></div>
                          <div className='helo2' style={{ height: "8rem", marginTop: "0rem" }}></div>
                          <div className='helo3' style={{ height: "8rem", marginTop: "0rem" }}></div>
                          

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
