import React from "react";

//functional component
//====================
// function Article() {
//   return (
//     <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
//   );
// }
//class-based component
//=====================
// class Article extends React.Component {
//   render() {
//     return (
//       <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
//     );
//   }
// }

//arrow-function syntax
//=====================
const Article = () => (
  <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
);

export default Article;
