/*******************************************************************************************************
 * *************************************** MAP DATA CARD (DAY 29) **************************************
 *
 * New Topics Covered in Day 29:
 * - Single Responsibility Component Architecture (Modularity)
 * - Safe deep object path resolution using Optional Chaining (`?.`)
 * - Attributing generic attributes via spread forwarding (`{...props}`)
 *
 * Cross-File & Architecture References:
 * - Imported by: `pages/Home.jsx`
 * - Styled by: `MapData.css`
 * - Props: Receives an item representing user object data
 *******************************************************************************************************/

import "./MapData.css";
/*
We import the corresponding CSS styling sheet containing transition animations and layout rules.
*/

const MapData = ({ item, ...props }) => {
  return (
    /*
    user-card handles hover translation and shadow adjustments.
    - item?.name?.firstname: Optional chaining ensures if API is still pending and item/name is undefined,
      the client application does not crash.
    - item?.address?.city: Safely extracts nested city string.
    - item?.email: Safely extracts email string.
    */
    <div className="user-card" {...props}>
      <h4>{item?.name?.firstname}</h4>
      <p>{item?.address?.city}</p>
      <p>{item?.email}</p>
    </div>
  );
};

export default MapData;


