import React from 'react'
import bgimg5 from '../../assets/bgimg5.svg'
import bgimg6 from '../../assets/bgimg6.svg'
import bgimg4 from '../../assets/bgimg4.svg'
import './Portfolio.css'
export default function Portfolio() {
  return (
    <div className='container-fluid  maindiv py-5 '>
      <div className='row justify-content-center'>
        <div className='col-lg-10 col-md-10 col-sm-12'>
          <div className='roundeddiv bg-white p-4'>
            <div className='row'>
              <div className='col-md-6'>
                <div className="" style={{ height: "100%" }}>
                  <div className="row justify-content-center " style={{ height: "100%", position: "relative" }}>
                    <div className=" col-12 p-4 pl-md-5 pl-0">
                      <div className="position-relative w-100 h-100  justify-content-center">
                        <div className="image-container">
                          <img src={bgimg4} alt="" className="img-fluid  position-relative top-0  w-100" />
                          <img src={bgimg5} alt="" className="img-fluid position-absolute top-160px start-0 w-100" />
                          <img src={bgimg6} alt="" className="img3 img-fluid position-absolute  top-110  w-100" style={{ left: 0 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="">
                  <div className="row justify-content-lg-start justify-content-center align-items-start ">
                    <div className="col-lg-9 col-12 d-flex align-items-center ml-lg-0 ml-3">
                      <div className="w-100 align-items-start w-lg-50 ml-lg-3 py-5 text-secondary">
                        <span className="font-weight-bold fs-5 ">Track your net worth </span>
                        <span className="font-weight-normal fs-5">automatically and spend less time managing your personal finances. No need to update spreadsheets manually anymore.</span>
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
