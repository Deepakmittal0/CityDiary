// import React from 'react'
// import Card from './Card'
// import list3 from "../../public/list3.json"
// import {Link} from "react-router-dom"
// import Navbar from './Navbar'
// import Footer from './Footer'

// function Resturant() {
//   return (
//     <>
//     <Navbar/>
//     <section className='py-10 px-4  text-center mt-10'>
//     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 px-4  text-center '>
//       <div className=' justify-center items-center text-center '>
//         <h1 className=' text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Resturant Here..!</span>
//         </h1>
//         <p className='mt-8 md:ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe alias consequatur ullam corrupti, labore ex. Odio voluptates ex quas tenetur iusto officia, deleniti sunt necessitatibus esse maxime eius cum alias, ad aut. Molestiae necessitatibus aliquid labore! Corrupti, impedit officia sapiente, expedita, rem nulla accusamus nisi voluptatem ipsum molestiae cum.</p>
//    <Link to="/"><button className='bg-pink-500 text-white- px-4 py-2 mt-8 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
   
//     </div>
//     <div className='mt-12 grid grid-cols-1 md:grid-cols-2'>
// {
//   list3.map((item)=>(
//     <Card key={item.id} item={item}/>
//   ))
// }

//     </div>
    
//     </div>
 
//     </section><Footer/>   
//     </>
  
  
//   )
// }


// export default Resturant


// import { useEffect, useRef, useState } from "react";
// import Navbar from "./Navbar";

// const GoogleMapsAutocomplete = () => {
//   const mapRef = useRef(null);
//   const inputRef = useRef(null);
//   const [map, setMap] = useState(null);
//   const [autocomplete, setAutocomplete] = useState(null);

//   useEffect(() => {
//     const loadGoogleMapsScript = (callback) => {
//       if (window.google) {
//         callback();
//         return;
//       }
//       const script = document.createElement("script");
//       script.src = `https://maps.gomaps.pro/maps/api/js?key=AlzaSyZcGorqQGs-vT5S4x59i0GGeJ0slm0DkGn&libraries=geometry,places&callback=initMap`;
//       script.async = true;
//       script.defer = true;
//       window.initMap = callback;
//       document.body.appendChild(script);
//     };

//     loadGoogleMapsScript(() => {
//       const mapInstance = new google.maps.Map(mapRef.current, {
//         center: { lat: -33.8688, lng: 151.2195 }, // Default to Sydney
//         zoom: 13,
//       });
//       setMap(mapInstance);

//       const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current);
//       autocompleteInstance.bindTo("bounds", mapInstance);
//       setAutocomplete(autocompleteInstance);

//       autocompleteInstance.addListener("place_changed", () => {
//         const place = autocompleteInstance.getPlace();
//         if (!place.geometry) return;

//         if (place.geometry.viewport) {
//           mapInstance.fitBounds(place.geometry.viewport);
//         } else {
//           mapInstance.setCenter(place.geometry.location);
//           mapInstance.setZoom(17);
//         }

//         new google.maps.Marker({
//           position: place.geometry.location,
//           map: mapInstance,
//         });
//       });
//     });
//   }, []);

//   return (
//     <>
//       <Navbar/>
//       <input ref={inputRef} type="text" placeholder="Search for a place" className="border p-2 w-100 h-20  mt-20  ml-40" />
//       <div ref={mapRef} style={{ height: "200px", width: "100%" }}></div>
//     </>
//   );
  
// };

// export default GoogleMapsAutocomplete;


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const PoluntyNavbar = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loadGoogleMapsScript = (callback) => {
      if (window.google) {
        callback();
        return;
      }
      const script = document.createElement("script");
      script.src = `https://maps.gomaps.pro/maps/api/js?key=AlzaSyZcGorqQGs-vT5S4x59i0GGeJ0slm0DkGn&libraries=geometry,places&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = callback;
      document.body.appendChild(script);
    };

    loadGoogleMapsScript(() => {
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
      });
      setMap(mapInstance);

      const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current);
      autocompleteInstance.bindTo("bounds", mapInstance);
      setAutocomplete(autocompleteInstance);

      autocompleteInstance.addListener("place_changed", () => {
        const place = autocompleteInstance.getPlace();
        if (!place.geometry) return;

        if (place.geometry.viewport) {
          mapInstance.fitBounds(place.geometry.viewport);
        } else {
          mapInstance.setCenter(place.geometry.location);
          mapInstance.setZoom(17);
        }

        new google.maps.Marker({
          position: place.geometry.location,
          map: mapInstance,
        });
      });
    });
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 bg-gray-300 dark:bg-slate-900 ${sticky ? "shadow-md" : ""}`}>
        <div className="navbar container mx-auto px-4 py-3 flex justify-around items-center">
        <a className=" text-2xl font-bold cursor-pointer">CityDairy</a>
         <div></div> <li><a href='/'>Home</a></li>
      <li>
        <details className='dark:bg-slate-900 dark:text-white'>
          <summary >choose</summary>
          <ul className="p-2 dark:bg-slate-900 dark:text-white">
            <li><a href='/hospital'>Hospital</a></li>
            <li><a href='/temple'>Temple</a></li>
            <li><a href='/famous'>places</a></li>
            <li><a href='/resturant'>Restaurant</a></li>
          </ul>
        </details>
      </li>
      <li><a href='/about'>About</a></li>
      <li><a href='/contact'>Contact</a></li>

          <input ref={inputRef} type="text" placeholder="Search for a place" className="border p-2 w-80" />
          <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2 rounded bg-gray-200 dark:bg-gray-800">Toggle Theme</button>
            <Link to="/signup" className="ml-4 p-2 bg-blue-500 text-white rounded">Sign In</Link>
          </div>
        </div>
      </div>
      <div ref={mapRef} style={{ height: "400px", width: "100%", marginTop: "80px" }}></div>
    </>
  );
};

export default PoluntyNavbar;
