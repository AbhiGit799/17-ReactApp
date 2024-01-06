// import { myContext, myExtraContext } from "./store";
// import { Student2 } from "./student2";

// const Student = () => {
//   return (
//     <>
//       <h2>Student Component</h2>
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
//       <Student2 />
//     </>
//   );
// };
// export { Student };


// import { myContext, myExtraContext } from "./store";
// import { Student2 } from "./student2";
// import { useContext } from "react"; //Hook

// const Student = () => {
//   const myContextdata = useContext(myContext);
//   const myExtraContextdata = useContext(myExtraContext);

//   return (
//     <>
//       <h2>Student Component</h2>

//       <p>ID = {myContextdata.id}</p>
//       <p>Name = {myContextdata.name}</p>
//       <p>Age = {myContextdata.age}</p>
//       <p>Email = {myExtraContextdata}</p>

//       <Student2 />
//     </>
//   );
// };

// export { Student };




import { myContext, myExtraContext } from "./store";
import { Student2 } from "./student2";
import { useContext } from "react"; //Hook

const Student = () => {
  const {id,name,age} = useContext(myContext);
  const myExtraContextdata = useContext(myExtraContext);

  return (
    <>
      <h2>Student Component</h2>

      <p>ID = {id}</p>
      <p>Name = {name}</p>
      <p>Age = {age}</p>
      <p>Email = {myExtraContextdata}</p>

      <Student2 />
    </>
  );
};

export { Student };


