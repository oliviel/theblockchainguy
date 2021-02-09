import * as React from 'react';
import { Layout, SEO } from '../components/common';
import { a } from '../../.cache/dummy';

const About = () => (
  <Layout>
    <SEO title="About" />
    <section>
      <h1 className="capitalize font-bold text-3xl">About Me</h1>
      <p className="text-lg mt-3">
        I am a developer advocate who likes jamstack and blockchain
        technologies. I like to write and make video content for the things I
        like, I feel when I explaining the subjects I am learning these topics
        keeps better in my mind.
      </p>
      <p className="text-lg mt-3">
        That is the main reason I created this blog to keep me motivated and
        sharing the things I am learning about blockchain, dapps, crypto, and
        decentralization.
      </p>
      <p className="text-lg mt-3">You can follow me here:</p>
      <ul className="text-lg mt-3">
        <li>
          ▪︎
          <a
            href="https://twitter.com/holiviel_en"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-300"
          >
            Twitter
          </a>
        </li>
        <li>
          ▪︎
          <a
            href="https://github.com/oliviel"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-300"
          >
            Github
          </a>
        </li>
        <li>
          ▪︎
          <a
            href="https://holivielvaldez.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-300"
          >
            Portafolio
          </a>
        </li>
      </ul>
    </section>
  </Layout>
);

export default About;
