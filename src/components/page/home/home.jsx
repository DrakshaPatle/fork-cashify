import React from "react";
import { data } from "../../data.js";
import { Link } from "react-router-dom";

import styles from "./homepage.module.css"; // Import the CSS module

const HomePage = () => {
  console.log("hii");
  return (
    <>
      <div className={styles["wrapper-sellcash"]}>
        <h2 className={styles["sellcash-heading"]}>Sell for cash</h2>
        <div className={styles["box-container"]}>
          {data.map((box) => (
            <Link
              key={box.id}
              to={`/${box.heading}`}
              className={styles["item-heading"]}
            >
              <div className={styles["box"]}>
                <img src={box.imageSrc} alt={box.heading} />
                <h6>{box.heading}</h6>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className={styles["additional-services-heading"]}>
          Additional Services
        </h2>
        <div className={styles["box-container"]}>
          {data.map((box) => (
            <a className={styles["item-heading"]} key={box.id} href={box.route}>
              <div className={styles["box"]}>
                <img src={box.imageSrc} alt={box.heading} />
                <h6>{box.heading}</h6>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

// import React from 'react';
// import { data } from "../../data.js";
// import { Link } from "react-router-dom";

// import styles from "./homepage.module.css"; // Import the CSS module

// const HomePage = () => {
//   console.log("hii")
//   return (
//     <>
//       <div className={styles['wrapper-sellcash']}>
//         <h2 className={styles['sellcash-heading']}>Sell for cash</h2>
//         <div className={styles['box-container']}>
//           {data.map((box) => (

//             <a className={styles['item-heading']} key={box.id} href={box.route}>
//               <div className={styles['box']}>

//               {/* <img src={process.env.PUBLIC_URL + box.imageSrc} alt="box.heading" /> */}
//                 <img src={box.imageSrc} alt={box.heading} />
//                 <h6>{box.heading}</h6>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className={styles['additional-services-heading']}>Additional Services</h2>
//         <div className={styles['box-container']}>
//           {data.map((box) => (
//             <a className={styles['item-heading']} key={box.id} href={box.route}>
//               <div className={styles['box']}>
//                 <img src={box.imageSrc} alt={box.heading} />
//                 <h6>{box.heading}</h6>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;
