import React from 'react';

export const GA_MEASUREMENT_ID = 'G-PC53XDZNRK';

const GoogleAnalytics4 = () => (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
    `,
      }}
    />
  </>
);

export { GoogleAnalytics4 };
