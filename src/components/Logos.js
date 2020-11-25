// import React, { Component } from 'react';

// import Gallery from 'react-photo-gallery';

// class Logos extends Gallery {
//  columns(containerWidth) {
//     let columns = 1;
//     if (containerWidth >= 500) columns = 1;
//     if (containerWidth >= 900) columns = 2;
//     if (containerWidth >= 1500) columns = 2;
//     return columns;
//   };
export function columnsLogos(containerWidth) {
  let columns = 3;
  if (containerWidth >= 500) columns = 5;
  if (containerWidth >= 900) columns = 7;
  if (containerWidth >= 1500) columns = 10;
  return columns;
}

export const logoGallery = [
  {
    src: '/img/logos/Appian.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Abbott.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Adobe.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Aera.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Apptio.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Autodesk.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/BD.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Blackline.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/BMW.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Caption_Health.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Charels_Schwab.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Chef.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Cisco.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Cloudability.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Consensys.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/DocuSign.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Ducati.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/E-Trade.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Eloqua.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Epic_Games.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Extreme.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Facebook.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Flatiron.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/GAP.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Genentech.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Genesys.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Gigamon.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Hitachi.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Imprivata.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/JP_Morgan.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Juniper.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Kaiser.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Komatsu.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/LinkedIn.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/McAfee.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/McKesson.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Microsoft.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Mini.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/NetSuite.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Oculus.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/OSISoft.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Salesforce.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/SAP_Ariba.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/SAP_SuccessFactors.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/SAP.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Siemens.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Silver_Legacy.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Skillsoft.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Stanford_Alumni.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/TIBCO.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/UCSF.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Unit4.svg',
    width: 128,
    height: 100
  },
  {
    src: '/img/logos/Veeva.svg',
    width: 128,
    height: 100
  }
];

//   return (
//     <Gallery photos={LogoGallery} direction="column" columns={columns} />
//   );
// }

// export default Logos;
