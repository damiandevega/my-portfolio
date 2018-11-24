import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="my_location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24138.9643955656!2d-74.00849609057448!3d40.86374162618644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7250af17859%3A0x78fef919ad3854eb!2sLeonia%2C+NJ!5e0!3m2!1sen!2sus!4v1541834378531" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen
        ></iframe>

        <div className="location_tag">
            <div>My Location</div>
        </div>
    </div>
  )
}

export default Location;