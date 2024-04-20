import React from 'react'
import './Community.css'
import bgimg1 from '../../assets/bgimg1.svg'
import bgimg2 from '../../assets/bgimg2.svg'
import bgimg3 from '../../assets/bgimg3.svg'
export default function Community() {
  return (
    <div className='container-fluid  mainndiv py-5 '>
      <div className='row justify-content-center'>
        <div className='col-lg-10 col-md-10 col-sm-12'>

          <div className='roundeddiv  bg-white p-4 '>
            <div className='row'>
              <div className='col-md-6'>
                <div className="row justify-content-lg-start justify-content-center align-items-start">
                  <div className="col-lg-9 col-12 d-flex align-items-center ml-lg-0 ml-3 ">
                    <div className="w-100 align-items-start w-lg-50 ml-lg-3 py-5 mt-4 text-secondary">
                      <span className="font-weight-bold fs-5">Connect your brokerage</span>
                      <span className="font-weight-normal fs-5">accounts and get access to trading ideas, aggregated stats and discussions in your tech investing community right away.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="" style={{height:"100%"}}>
                  <div className="row justify-content-center" style={{height:"100%", position:"relative"}}>
                    <div className=" col-12 p-4 pl-md-5 pl-0">
                      <div className="position-relative w-100 h-100  justify-content-center">
                        <div className="image-container">
                          <img src={bgimg1} alt="" className="img-fluid  position-relative top-0  w-100" />
                          <img src={bgimg2} alt="" className="img-fluid position-absolute top-160px start-0 w-100" />
                          <img src={bgimg3} alt="" className="img3 img-fluid position-absolute  top-110  w-100" style={{left:0}} />
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
