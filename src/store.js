// import { createContext } from "react";
// const myContext = createContext({id:101,name:"Ajeet",age:29});
// export default myContext;

//Multiple context in React JS

import { createContext } from "react";
const myContext = createContext({ id: 101, name: "Arjun", age: 29 });
const myExtraContext = createContext("arjun12@gmail.com");

export { myContext, myExtraContext };
