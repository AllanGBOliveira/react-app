// import '../styles/style.scss';
// import Layout from '../components/layout'

// import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// // Import the FontAwesomeIcon component
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// // import the icons you need
// import {
//   faToggleOff,
//   faToggleOn
// } from "@fortawesome/free-solid-svg-icons";

// import { useEffect, useState } from 'react';


// function MyApp({ Component, pageProps }) {
//   const [theme, setTheme] = useState('');

//   useEffect(() => {
//     window.addEventListener("scroll", menuFixedOnScroll);
//     const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     let newTheme = "light";
//     if (userPrefersDark) {
//       setTheme("dark");
//       newTheme = "dark";
//     }

//     document.querySelector("body").setAttribute("data-theme", newTheme)
//   }, [])

//   const switchTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.querySelector("body").setAttribute("data-theme", newTheme)
//   }

//   function menuFixedOnScroll() {
//     let navHeight = document.getElementById('header').clientHeight;
//     let windowTop = document.documentElement.scrollTop;
//     const nav = document.getElementById('header'),
//       wrapper = document.querySelector('main');

//     if (windowTop > navHeight) {
//       nav.classList.add('nav-small');
//       console.log("maior");
//       wrapper.style.paddingTop = navHeight + 'px';
//     } else {
//       console.log("menor");
//       nav.classList.remove('nav-small');
//       wrapper.style.paddingTop = 0;
//     }
//   }

//   return (
//     <Layout >
//       <Component {...pageProps} />
//       <button onClick={switchTheme} theme={theme} className='theme-btn'>
//         <FontAwesomeIcon
//           icon={theme === 'dark' ? faToggleOn : faToggleOff}
//         />
//       </button>
//     </Layout>
//   )

// }

// export default MyApp


import '../styles/style.scss';
import Layout from '../components/layout'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOff,
  faToggleOn
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import React from "react"
import { wrapper } from "../redux/store"


const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setOsTheme();
    window.addEventListener("scroll", menuFixedOnScroll);

  }, [])

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.querySelector("body").setAttribute("data-theme", newTheme)
  }

  function setOsTheme() {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let newTheme = "light";
    if (userPrefersDark) {
      setTheme("dark");
      newTheme = "dark";
    }

    document.querySelector("body").setAttribute("data-theme", newTheme)
  }

  function menuFixedOnScroll() {
    let navHeight = document.getElementById('header').clientHeight;
    let windowTop = document.documentElement.scrollTop;
    const nav = document.getElementById('header'),
      wrapper = document.querySelector('main');

    if (windowTop > navHeight) {
      nav.classList.add('nav-small');
      console.log("maior");
      wrapper.style.paddingTop = navHeight + 'px';
    } else {
      console.log("menor");
      nav.classList.remove('nav-small');
      wrapper.style.paddingTop = 0;
    }
  }


  return (
    <Layout >
      <Component {...pageProps} />
      <button onClick={switchTheme} theme={theme} className='theme-btn'>
        <FontAwesomeIcon
          icon={theme === 'dark' ? faToggleOn : faToggleOff}
        />
      </button>
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);