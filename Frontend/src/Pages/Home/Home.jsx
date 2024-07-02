import { useState } from 'react';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import Header from '../../Components/Header/Header';
import './Home.css'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDown from '../../Components/AppDown/AppDown';


const Home=()=>{

    const[category, setCategory]=useState("All");

    return (
<div>
 <Header/>
 <ExploreMenu category={category} setCategory={setCategory}/>
 <FoodDisplay category={category}/>
 <AppDown />
</div>
    )
}

export default Home;