import React, { Component, useEffect, useState } from "react";
import About from "./about";
import Contactus from "./contactus";

// export function App() {
//   return (
//    <>
//     <Parent/>
//    </>
//   )
// }

// function Parent()
// {
//   const [name,setName] = useState("Tech World Pvt LTD.");

//   return(<>
//     <div>
//       This is Parent Component.
//     </div>
//     <br/>
//     <ChildA companyName={name}/>
//   </>)

// }

// function ChildA({companyName})
// {
//   return(<>

//    <p>This is ChildA Component.</p>

//    <ChildB companyName={companyName}/>

//   </>)
// }

// function ChildB({companyName})
// {
//   return(<>
//    <p>This is ChildB Component.</p>

//    <ChildC companyName={companyName}/>

//   </>)
// }

// function ChildC({companyName})
// {
//   return(<>
//    <p>This is ChildC Component.</p>
//    <h2> {companyName} </h2>
//   </>)
// }

// export function App() {
//   return (
//    <>

//     <About developerName="Raman Singh" age={50}/>

//     <hr />

//     <br/><br/>

//     <Contactus developerName="Raman Singh" age={20}/>

//    </>
//   )
// }

// export function App() {
//   return (
//    <>

//     <About developerName="Raman Singh" age={33} exp={17}/>

//     <hr />

//     <br/><br/>

//     <Contactus developerName="Raman Singh" age={29} mobileNo={123456}/>

//    </>
//   )
// }

// const Student3 = ()=>{
//   return(<>

//     <h1>Hello</h1>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>

//     <Student2/>

//   </>)
// }

// // let agg=30;
// // export default agg;  //supported in this way

// // const App = () =>{
// //   return(<>
// //    <h1>Hello</h1>
// //   </>)
// // }

// // export default App;

// export function App()
// {
//   return(<>
//    <Student/>
//   </>)
// }

// import { createContext } from "react";
// const myContext = createContext();

// const Student3 = ()=>{
//   return(<>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return <h1>Hello {mydata}</h1>
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>
//     <Student3/>
//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//    <myContext.Provider value="Tech World Pvt Ltd.">
//       <Student/>
//    </myContext.Provider>

//   </>)
// }

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return <h1>Hello {mydata}</h1>
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//         (data)=>{
//            return <h1>Good {data}</h1>
//         }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (data)=>{
//            return <h1> Better {data}</h1>
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//    <myContext.Provider value="Tech World Pvt Ltd.">
//       <Student/>
//    </myContext.Provider>

//   </>)
// }

// import { createContext } from "react";
// const myContext = createContext("Tech World Pvt Ltd.");
// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return <h1>Hello {mydata}</h1>
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//         (data)=>{
//            return <h1>Good {data}</h1>
//         }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (data)=>{
//            return <h1> Better {data}</h1>
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//       <Student/>

//   </>)
// }

// import { createContext } from "react";
// const myContext = createContext({id:101,name:"Ajeet",age:29});

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//       (mydata)=>{
//         return (<>

//          <p>{mydata.id}</p>
//          <p>{mydata.name}</p>
//          <p>{mydata.age}</p>

//         </>)
//       }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>
//       <Student/>
//   </>)
// }

// import { createContext } from "react";
// const myContext = createContext();

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//       (mydata)=>{
//         return (<>

//          <p>{mydata.id}</p>
//          <p>{mydata.name}</p>
//          <p>{mydata.age}</p>

//         </>)
//       }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>
//     <myContext.Provider value={{id:101,name:"Ajeet",age:29}}>
//       <Student/>
//     </myContext.Provider>

//   </>)
// }

// import { createContext } from "react";
// import myContext from "./store.js";

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//       (mydata)=>{
//         return (<>

//          <p>{mydata.id}</p>
//          <p>{mydata.name}</p>
//          <p>{mydata.age}</p>

//         </>)
//       }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//       <Student/>

//   </>)
// }

// import { createContext } from "react";
// import myContext from "./store.js";

// class Student3 extends Component {

//   //static contextType = myContext;

//   render() {
//     return (
//       <>
//         <h2>Student 3 Component</h2>

//         <myContext.Consumer>
//           {(mydata) => {
//             return (
//               <>
//                 <p>{mydata.id}</p>
//                 <p>{mydata.name}</p>
//                 <p>{mydata.age}</p>
//               </>
//             );
//           }}
//         </myContext.Consumer>
//       </>
//     );
//   }
// }

// class Student2 extends Component {
//   render() {
//     return (
//       <>
//         <h2>Student 2 Component</h2>

//         <myContext.Consumer>
//           {(mydata) => {
//             return (
//               <>
//                 <p>{mydata.id}</p>
//                 <p>{mydata.name}</p>
//                 <p>{mydata.age}</p>
//               </>
//             );
//           }}
//         </myContext.Consumer>

//         <Student3 />
//       </>
//     );
//   }
// }

// class Student extends Component {
//   render() {
//     return (
//       <>
//         <h2>Student Component</h2>
//         <myContext.Consumer>
//           {(mydata) => {
//             return (
//               <>
//                 <p>{mydata.id}</p>
//                 <p>{mydata.name}</p>
//                 <p>{mydata.age}</p>
//               </>
//             );
//           }}
//         </myContext.Consumer>
//         <Student2 />
//       </>
//     );
//   }
// }

// // export function App() {
// //   return (
// //     <>
// //       <Student />
// //     </>
// //   );
// // }

// export class App extends Component
// {
//  render()
//  {
//   return(<>
//    <Student/>
//   </>)
//  }
// }

// import { createContext } from "react";
// import myContext from "./store.js";

// class Student3 extends Component {
//   static contextType = myContext;

//   render() {
//     return (
//       <>
//         <h2>Student 3 Component</h2>
//         <p>{this.context.id}</p>
//         <p>{this.context.name}</p>
//         <p>{this.context.age}</p>
//         <hr />
//       </>
//     );
//   }
// }

// class Student2 extends Component {
//   static contextType = myContext;
//   render() {
//     return (
//       <>
//         <h2>Student 3 Component</h2>
//         <p>{this.context.id}</p>
//         <p>{this.context.name}</p>
//         <p>{this.context.age}</p>
//         <hr />
//         <Student3/>
//       </>
//     );
//   }
// }

// class Student extends Component {
//   static contextType = myContext;
//   render() {
//     return (
//       <>
//         <h2>Student 3 Component</h2>
//         <p>{this.context.id}</p>
//         <p>{this.context.name}</p>
//         <p>{this.context.age}</p>
//         <hr />
//         <Student2/>
//       </>
//     );
//   }
// }

// export class App extends Component {
//   render() {
//     return (
//       <>
//         <Student />
//       </>
//     );
//   }
// }

//Multiple context in React JS
//Standard code

// import { createContext } from "react";
// import {myContext,myExtraContext} from "./store.js";

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (

//             <myExtraContext.Consumer>

//             {
//               (myexdata)=>{
//                 return(<>

//                 <p>ID = {mydata.id}</p>
//                 <p>Name = {mydata.name}</p>
//                 <p>Age = {mydata.age}</p>
//                 <p>Email = {myexdata}</p>

//                 </>)
//               }
//             }

//             </myExtraContext.Consumer>

//           )
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (

//             <myExtraContext.Consumer>

//             {
//               (myexdata)=>{
//                 return(<>

//                 <p>ID = {mydata.id}</p>
//                 <p>Name = {mydata.name}</p>
//                 <p>Age = {mydata.age}</p>
//                 <p>Email = {myexdata}</p>

//                 </>)
//               }
//             }

//             </myExtraContext.Consumer>

//           )
//         }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (

//             <myExtraContext.Consumer>

//             {
//               (myexdata)=>{
//                 return(<>

//                 <p>ID = {mydata.id}</p>
//                 <p>Name = {mydata.name}</p>
//                 <p>Age = {mydata.age}</p>
//                 <p>Email = {myexdata}</p>

//                 </>)
//               }
//             }

//             </myExtraContext.Consumer>

//           )
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//       <Student/>

//   </>)
// }

//Below code is not standard for multiple context
// import { createContext } from "react";
// const myContext = createContext({ id: 101, name: "Arjun", age: 29 });
// const myExtraContext = createContext("arjun12@gmail.com");

// const Student3 = () => {
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

// export function App() {
//   return (
//     <>
//       <Student />
//     </>
//   );
// }

// import { createContext } from "react";
// const myContext = createContext();
// const myExtraContext = createContext();

// const Student3 = () => {
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

// export function App() {
//   return (
//     <>
//       <myContext.Provider value={{ id: 101, name: "Arjun", age: 29 }}>
//         <myExtraContext.Provider value="arjun12@gmail.com">
//           <Student />
//         </myExtraContext.Provider>
//       </myContext.Provider>
//     </>
//   );
// }

// import { createContext } from "react";
// import { Student } from "./student";

// export function App() {
//   return (
//     <>
//       <Student/>
//     </>
//   );
// }

// Hook useReducer
// import { useReducer } from "react";

// const iState = "Ajeet Singh";
// const reducer = (state, action) => {
//   switch (action) {
//     case "changeName":
//       return "Chandan Singh";
//     default:
//       return state;
//   }
// };

// export function App() {
//   const [name, dispatch] = useReducer(reducer, iState);

//   return (
//     <>
//       <h1>Hello {name} </h1>
//     </>
//   );
// }

// import { useReducer } from "react";

// const iState = "Ajeet Singh";
// const reducer = (state, action) => {
//   switch (action) {
//     case "changeName":
//       return "Chandan Singh";
//       case "updateName":
//         return "Ram Singh";
//     default:
//       return state;
//   }
// };

// export function App() {
//    const [name, dispatch] = useReducer(reducer, iState);

//   return (
//     <>
//       <h1>Hello {name} </h1>

//       <button type="button" onClick={()=>dispatch("changeName")}>Change Name</button>

//       &nbsp; &nbsp;

//       <button type="button" onClick={()=>dispatch("updateName")}>Update Name</button>

//     </>
//   );
// }




// import { useReducer } from "react";

// const iState = {
//   name: "Sita Singh",
//   course: ["Angular", "React"],
// };
// const reducer = (state, action) => {
//   switch (action) {
//     case "changeName":
//       return {
//         name: "Chandan Kumar",
//         course: ["Angular", "React"],
//       };
//     case "updateName":
//       return {
//         name: "Gita Singh",
//         course: ["Angular", "React"],
//       };
//     default:
//       return state;
//   }
// };


// export function App() {
//   const [myName, dispatch] = useReducer(reducer, iState);

//   return (
//     <>
//       <h1>Hello {myName.name} </h1>
//       My Courses :{" "}
//       {myName.course.map((c) => {
//         return <p key={c}> {c} </p>;
//       })}
//       <button type="button" onClick={() => dispatch("changeName")}>
//         Change Name
//       </button>
//       &nbsp; &nbsp;
//       <button type="button" onClick={() => dispatch("updateName")}>
//         Update Name
//       </button>
//     </>
//   );
// }



// import { useReducer } from "react";

// const iState = {
//   name: "Ajeet Singh",
//   course: ["Angular", "React"],
// };
// const reducer = (state, action) => {
//   switch (action) {
//     case "changeName":
//       return {
//         ...state,
//         name:"Chandan Singh"
//       };
//     case "updateName":
//       return {
//         ...state,
//         name:"Pawan Singh",
//       };
//     default:
//       return state;
//   }
// };


// export function App() {
//   const [myName, dispatch] = useReducer(reducer, iState);

//   return (
//     <>
//       <h1>Hello {myName.name} </h1>
//       My Courses :{" "}
//       {myName.course.map((c) => {
//         return <p key={c}> {c} </p>;
//       })}
//       <button type="button" onClick={() => dispatch("changeName")}>
//         Change Name
//       </button>
//       &nbsp; &nbsp;
//       <button type="button" onClick={() => dispatch("updateName")}>
//         Update Name
//       </button>
//     </>
//   );
// }





// import { useReducer } from "react";

// const iState = {
//   name: "Ajeet Singh",
//   course: ["Angular", "React"],
// };
// const reducer = (state, action) => {
//   switch (action) {
//     case "changeName":
//       return {
//         ...state,
//         name:"Chandan Singh",
//         course:["JAVA","NODE"],
//       };
//     case "updateName":
//       return {
//         ...state,
//         name:"Pawan Singh",
//         course:["AWS","SALESFORCE"],
//       };
//     default:
//       return state;
//   }
// };


// export function App() {
//   const [myName, dispatch] = useReducer(reducer, iState);

//   return (
//     <>
//       <h1>Hello {myName.name} </h1>
//       My Courses :{" "}
//       {myName.course.map((c) => {
//         return <p key={c}> {c} </p>;
//       })}
//       <button type="button" onClick={() => dispatch("changeName")}>
//         Change Name
//       </button>
//       &nbsp; &nbsp;
//       <button type="button" onClick={() => dispatch("updateName")}>
//         Update Name
//       </button>
//     </>
//   );
// }




// import { useReducer } from 'react'
// const iState = {
//   name: "Ajeet Singh",
//   course: ["Angular", "React"]
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'changeName':
//       return {
//        ...state,
//         name: action.payload
//       }
//     case 'updateName':
//       return {
//        ...state,
//         name: action.payload
//       };
//     default:
//       return state;
//   }
// }

// export function App() {
//   const [data, dispatch] = useReducer(reducer, iState);
//   return (
//     <>
//       <h1>Hello {data.name}</h1>
//       My Courses :  {data.course.map(c => {
//         return <p key={c} >{c}</p>
//       })}
//       <button type='button' onClick={() => dispatch({type : 'changeName', payload :  "Mohan"})} >Change Name</button>
      
//       &nbsp; &nbsp;
      
//       <button type='button' onClick={() => dispatch({type : 'updateName', payload :  "Ram Singh"})} >Update Name</button>
//     </>
//   )
// }




// import { useReducer } from 'react'
// const iState = {
//   name: "Ajeet Singh",
//   course: ["Angular", "React"]
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'changeName':
//       return {
//        ...state,
//         name: action.payload.name,
//         course:action.payload.course
//       }
//     case 'updateName':
//       return {
//        ...state,
//         name: action.payload.name,
//         course:action.payload.course
//       };
//     default:
//       return state;
//   }
// }

// export function App() {
//   const [data, dispatch] = useReducer(reducer, iState);
//   return (
//     <>
//       <h1>Hello {data.name}</h1>
//       My Courses :  {data.course.map(c => {
//         return <p key={c} >{c}</p>
//       })}
//       <button type='button' onClick={() => dispatch({type : 'changeName', payload : {name:"Mohan",course:["Node","JS"]}})} >Change Name</button>
      
//       &nbsp; &nbsp;
      
//       <button type='button' onClick={() => dispatch({type : 'updateName', payload : {name:"Ankit",course:["AWS","Python"] }})} >Update Name</button>
//     </>
//   )
// }




import { useReducer } from 'react'
const iState = {
  name: "Ajeet Singh",
  course: ["Angular", "React"]
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'changeName':
      return {
       ...state,
        name: action.payload.name,
        course:action.payload.course
      }
    case 'updateName':
      return {
       ...state,
        name: action.payload.name,
        course:action.payload.course
      };
    default:
      return state;
  }
}

export function App() {
  const [data, dispatch] = useReducer(reducer, iState);
  const cdata={name:"Mohan",course:["Node","JS"]};
  const udata={name:"Ankit",course:["AWS","Python"] };
  return (
    <>
      <h1>Hello {data.name}</h1>
      My Courses :  {data.course.map(c => {
        return <p key={c} >{c}</p>
      })}
      <button type='button' onClick={() => dispatch({type : 'changeName', payload :cdata })} >Change Name</button>
      
      &nbsp; &nbsp;
      
      <button type='button' onClick={() => dispatch({type : 'updateName', payload : udata })} >Update Name</button>
    </>
  )
}





