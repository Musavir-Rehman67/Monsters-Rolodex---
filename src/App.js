import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components";

import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";



const Shop = () => {
  return(
    <h1>I am the shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        {/* <Route path="home" element={ <Home />} />  */}
        <Route index element={ <Home />} /> 
        <Route path="shop" element={ <Shop />} />
        <Route path="auth" element={ <Authentication />} />
      </Route>
    </Routes>
  
  )
}

export default App



// // import CategoryItem from './components/category-item/category-item.component';
// // import './categories.styles.scss';
// import Directory from './components/directory/directory.component';

// const App = () => {

//   const categories = [
//     {
//       "id": 1,
//       "title": "hats",
//       "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
//     },
//     {
//       "id": 2,
//       "title": "jackets",
//       "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
//     },
//     {
//       "id": 3,
//       "title": "sneakers",
//       "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
//     },
//     {
//       "id": 4,
//       "title": "womens",
//       "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
//     },
//     {
//       "id": 5,
//       "title": "mens",
//       "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//     }
//   ]

//   return (
//     <Directory categories={categories} />

//     // <div className="categories-container">
//     //   {/* {categories.map(({title, id,imageUrl}) => ( */}
//     //   {categories.map((category) => (
//     //     <CategoryItem key={categories.id} category={category}/>
//       //   <div key={id} className="category-container">
//       //     <div 
//       //     className="background-image" style={{
//       //       backgroundImage: `url(${imageUrl})`
//       //     }} />
//       //   <div className="category-body-container">
//       //     <h2>{title}</h2>
//       //     <p>Shop Now</p>
//       //   </div>
//       // </div>
//     //   ))}

//     // </div>
//   );
// }
// export default App;
