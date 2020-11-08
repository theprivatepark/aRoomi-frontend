import React from 'react'
import image from '../assets/images/landing-page.png'


const SearchPage = props => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" placeholder="Search Listings By School"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>

      <img src={image}/>
     
    </div>
  )

}

export default SearchPage;