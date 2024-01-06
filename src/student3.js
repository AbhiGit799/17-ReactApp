// import { myContext, myExtraContext } from "./store";

// const Student3 = () => {
//     const myContextdata = useContext(myContext);
//   const myExtraContextdata = useContext(myExtraContext);
//   return (
//     <>
//       <h2>Student 3 Component</h2>

//       <myContext.Consumer>
//         {(mydata) => {
//           return (
//             <myExtraContext.Consumer>
//               {(myexdata) => {
//                 return (
//                   <>
//                     <p>ID = {mydata.id}</p>
//                     <p>Name = {mydata.name}</p>
//                     <p>Age = {mydata.age}</p>
//                     <p>Email = {myexdata}</p>
//                   </>
//                 );
//               }}
//             </myExtraContext.Consumer>
//           );
//         }}
//       </myContext.Consumer>
//     </>
//   );
// };

// export { Student3 };



import { myContext, myExtraContext } from "./store";
import { useContext } from "react"; //Hook

const Student3 = () => {
  const myContextdata = useContext(myContext);
  const myExtraContextdata = useContext(myExtraContext);
  return (
    <>
      <h2>Student 3 Component</h2>

      <p>ID = {myContextdata.id}</p>
      <p>Name = {myContextdata.name}</p>
      <p>Age = {myContextdata.age}</p>
      <p>Email = {myExtraContextdata}</p>

    </>
  );
};

export { Student3 };

//17:25