import React from 'react'
import image from '../assets/images/landing-page.png'
import styled from 'styled-components'

const SearchPage = props => {
  const Image = styled.img`
    width: 100%;  
  `
  return (
    // <div className="row" id="landing-page">
    // <div className="col">
    <>
      <div className="row">
        <div className="col">
          <form>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search Listings By School" aria-label="Search Listings By School" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-warning" type="button">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Image src={image} />
        </div>
      </div>
    </>
    //   </div>

    // </div>
  )

}

export default SearchPage;