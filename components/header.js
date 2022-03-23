import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import Image from 'next/image'
import brandPic from '../public/images/logo.png'
import brandWhitePic from '../public/images/logo-white.png'

export default function Header() {



  return (
    <>
      <header id="header">
        <Container>
          <Navbar>
            <Container>
              <Link href="/" passHref>
                <Navbar.Brand >
                  <Image
                    className="img-cover"
                    src={brandPic}
                    alt="Picture of the author"
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  />
                </Navbar.Brand>
              </Link>
            </Container>
          </Navbar>
        </Container>
      </header>
    </>
  );
}
