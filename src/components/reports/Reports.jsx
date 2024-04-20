import React from 'react'
import './Reports.css'
import bgimg7 from '../../assets/bgimg7.svg'
import bgimg8 from '../../assets/bgimg8.svg'
import bgimg9 from '../../assets/bgimg9.svg'
export default function Reports() {
  return (
    <div className='container-fluid  madiv py-5 '>
    <div className='row justify-content-center'>
      <div className='col-lg-10 col-md-10 col-sm-12'>
        <div className='roundeddiv bg-white p-4'>
          <div className='row'>
            {/* <div className='col-md-6'>
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-lg-7 col-12 p-4 pl-md-5 pl-0">
                    <div className="position-relative w-100 h-100 d-flex justify-content-center">
                      <div className="image-container">
                        <img src={bgimg7} alt="" className="img-fluid position-relative left-20 bottom-45" />
                        <img src={bgimg8} alt="" className="img-fluid position-absolute top-160px right-60 inset-0 m-auto" />
                        <img src={bgimg9} alt="" className="img-fluid position-absolute  left-15 top-110" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
           
           <div className='col-md-7'>
                <div className="">
                  <div className="row justify-content-center " style={{ height: "100%", position: "relative" }}>
                    <div className=" col-12 p-4 pl-md-5 pl-0  ">
                      <div className="position-relative w-100 h-100  justify-content-center">
                        <div className="image-container">
                          <img src={bgimg8} alt="" className="img-fluid  position-relative top-0" style={{right:'-4rem', width: '60%' }} />
                          <img src={bgimg9} alt="" className="img4 img-fluid position-absolute   top-110" style={{ right: '8rem',width: '60%' }} />
                          <img src={bgimg7} alt="" className="img-fluid position-absolute top-160px start-0 " style={{width: '60%', bottom:'0px' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className='col-md-5'>
              <div className="">
                <div className="row justify-content-lg-start justify-content-center align-items-start py-lg-5 ">
                  <div className="col-lg-9 col-12 d-flex align-items-center ml-lg-0 ml-3 py-lg-5">
                    <div className="w-100 align-items-start w-lg-50 ml-lg-3 py-5 text-secondary py-lg-5">
                      <span className="font-weight-bold fs-5 ">Connect your brokerage </span>
                      <span className="font-weight-normal fs-5">accounts and get access to trading ideas, aggregated stats and discussions in your tech investing community right away.</span>
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
