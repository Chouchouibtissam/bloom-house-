import { useLocation } from "react-router-dom";


const Home = () =>{
    const location = useLocation();
   let userId = location.state.userId;
   console.log(userId)
   return (
    <body >
     <h1>
        `Welcome to your home page ${userId}`

     </h1>
    </body>
    
  );
}
 export default Home;