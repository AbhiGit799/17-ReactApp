// import { myContext, myExtraContext } from "./store";
// import { Student3 } from "./student3";

// const Student2 = () => {
//   return (
//     <>
//       <h2>Student 2 Component</h2>

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

//       <Student3 />
//     </>
//   );
// };

// export { Student2 };


import { myContext, myExtraContext } from "./store";
import { Student3 } from "./student3";
import { useContext } from "react"; //Hook

const Student2 = () => {
  const myContextdata = useContext(myContext);
  const myExtraContextdata = useContext(myExtraContext);

  return (
    <>
      <h2>Student 2 Component</h2>

      <p>ID = {myContextdata.id}</p>
      <p>Name = {myContextdata.name}</p>
      <p>Age = {myContextdata.age}</p>
      <p>Email = {myExtraContextdata}</p>

      <Student3 />
    </>
  );
};

export { Student2 };
