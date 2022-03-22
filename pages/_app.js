import '../styles/style.scss';
import Layout from '../components/layout'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faToggleOff,
  faToggleOn
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('');

  useEffect(() => {

    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let newTheme = "light";
    if (userPrefersDark) {
      setTheme("dark");
      newTheme = "dark";
    }


    console.log(newTheme);
    document.querySelector("body").setAttribute("data-theme", newTheme)
  }, [])

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.querySelector("body").setAttribute("data-theme", newTheme)
  }

  return (
    <Layout>
      <Component {...pageProps} />
      <button onClick={switchTheme} theme={theme} className='theme-btn'>
        <FontAwesomeIcon
          icon={theme === 'dark' ? faToggleOn : faToggleOff}

        />
      </button>
    </Layout>
  )

}

export default MyApp
