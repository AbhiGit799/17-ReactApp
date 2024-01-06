// const wrapper = (Wcomponent) => {

//   const newComponent = (props) => { //to get data from apps props that we passed to about and contactus
    
//     console.log(props);
//     const companyName="Tech World Pvt LTD";


//     return (

//       <div style={{backgroundColor:'green'}}>
      
//       <Wcomponent companyName={companyName} developerName={props.developerName} age={props.age}/>
      
//       </div>

//     );
//   };
//   return newComponent;
// };

// export default wrapper;


const wrapper = (Wcomponent) => {

    const newComponent = (props) => { //to get data from apps props that we passed to about and contactus
      
      console.log(props);
      const companyName="Tech World Pvt LTD";
  
  
      return (
  
        <div style={{backgroundColor:'green'}}>
        
        <Wcomponent companyName={companyName} {...props}/>
        
        </div>
  
      );
    };
    return newComponent;
  };
  
  export default wrapper;
