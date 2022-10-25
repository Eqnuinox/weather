import { useEffect, useState } from "react";


    const Header = ({startDecoding}) => {

      const [location, setLocation] = useState('Минск')
      const [currentLoc, setCurrentLoc] = useState()
      const [lat, setLat] = useState()
      const [long, setLong] = useState()
  
      const handleSearchChange = (event) => setLocation(event.target.value);
      
      // useEffect(() => {
      //     navigator.geolocation.getCurrentPosition(function(position) {
      //       setLat(position.coords.latitude);
      //       setLong(position.coords.longitude);
      //     });
          

      //     console.log("Shirota:", lat)
      //     console.log("Dolgota:", long)

      // }, [lat, long]);
  
      return (
          <div>
              <div>
                  <input
                      type=""
                      value={location}
                      placeholder="Search..."
                      onChange={handleSearchChange}
                  />
                  <button onClick={() => startDecoding(location)}>
                      <i>search</i>
                  </button>
                  <button onClick={() => startDecoding("Minsk")}>
                      <i>Minsk</i>
                  </button>
                  <button onClick={() => startDecoding("Moscow")}>
                      <i>Moscow</i>
                  </button>
                  <button onClick={() => startDecoding('Bratislava')}>
                      <i>Bratislava</i>
                  </button>
              </div>
          </div>
      )
  }
  
  export default Header;