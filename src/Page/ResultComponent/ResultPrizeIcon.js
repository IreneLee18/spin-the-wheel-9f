import React from "react";

function ResultPrizeIcon({ prizeIcon }) {
  // create "9" array,let <li/> repeat 9.
  const lengthArr = [...Array(9).keys()].map((item) => item + 1);
  
  // Determine prizeIcon is object or string.
  // When wheel is Prize6 then show 「icon & title」,is Prize20 show 「id」.
  const isOBJ = typeof prizeIcon === "object" ? true : false;
  return (
    <>
      {lengthArr.map((i) =>
        isOBJ ? (
          <li key={i} className={prizeIcon[0]}>
            {prizeIcon[1]}
          </li>
        ) : (
          <li key={i}>{prizeIcon}</li>
        )
      )}
    </>
  );
}

export default ResultPrizeIcon;
