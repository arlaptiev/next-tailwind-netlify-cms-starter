import React from 'react';

import { Main } from '../templates/Main';
import { Image } from '../utils/Image';
import { Meta } from '../utils/Meta';

const Index = () => (
  <Main
    meta={
      <Meta description="Next js Boilerplate is the perfect starer code for your project. Build your React application with Next.js framework." />
    }
  >
    <div className="relative w-full" style={{ paddingTop: '50%' }}>
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <Image
          src={`${process.env.baseUrl}/assets/img/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a>
    </div>
    <h1 className="font-bold text-2xl">
      Boilerplate code for your Nextjs project with Tailwind CSS
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis augue tempor tellus
      convallis euismod.
    </p>
    <p>
      Duis metus felis, pretium sed ex in, dignissim rutrum velit. Cras finibus, tellus quis maximus
      aliquet, ipsum nunc dapibus orci, non feugiat risus neque sed libero. Cras porttitor pulvinar
      sodales.
    </p>
    <p>
      Etiam vel augue tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Nulla ornare dapibus nulla, vitae viverra nisl varius a. Donec
      scelerisque ipsum et orci lacinia, vitae imperdiet libero fringilla.
    </p>
  </Main>
);

export default Index;
