import React from 'react'
const ima = require('../img/windows-10-logo.gif')

export default function Home() {
  return (
    <>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-10">
                <div id="carouselExampleCaptions" className="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={"https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80"} className="d-block w-100" alt="..." />
    
    </div>
    <div class="carousel-item">
      <img src={ima} className="d-block w-100" alt="..." />
     
    </div>
    <div class="carousel-item">
      <img src={"data:image/jpeg;base64,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"} className="d-block w-100" style={{width:"700px",height:"900px"}} alt="..." />
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
        </div>
    </>
  )
}

