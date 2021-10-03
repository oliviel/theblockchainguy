import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useProfileImg } from '../../../graphql/queries';

export const Header = () => {
  const profileImg = useProfileImg();

  return (
    <header className="pt-10 max-w-screen-sm mx-auto  text-white font-sans px-5">
      <Link to="/">
        <h1 className="font-bold text-2xl text-blue-300">THEBLOCKCHAINGUY</h1>
      </Link>
      <div className="mt-5 mb-14 flex items-center">
        <Img
          fixed={profileImg.childImageSharp.fixed}
          alt={profileImg.name}
          className="rounded-full h-20 w-20"
        />
        <div className="ml-3">
          <p className="text-base	sm:text-lg">
            Personal blog by
            <Link to="/about">
              <span aria-label="about me" className="text-blue-300 ml-1 underline">
                Holiviel Valdez
              </span>
            </Link>
            .
          </p>
          <p className="text-base	sm:text-lg">
            Documenting and learning about
            <br />
            blockchain development.
          </p>
        </div>
      </div>
    </header>
  );
};
