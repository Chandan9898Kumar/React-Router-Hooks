import React from 'react'
import { useNavigate } from 'react-router-dom';

import {useParams} from "react-router-dom";

import { useLocation } from "react-router-dom";

import {  useMatch } from "react-router-dom";
const ProfilePage=(props)=> {
    // useParams() returns an object of the parameters
    // defined in the url of the page
    // For example, the path given in the Route component
    // consists of an "userName" parameter
    // in this form ---> "/profile/:userName"
    const param = useParams();

    const location = useLocation();
  // location.search returns a string containing all
  // the query parameters.
  // Suppose the URL is "some-website.com/profile?id=12454812"
  // then location.search contains "?id=12454812"
  // Now you can use the URLSearchParams API so that you can
  // extract the query params and their values



// UseMatch Hook is same as useRouteMatch.
const match=useMatch('/Profile/:input');

//useNavihate
const navigate=useNavigate()
 
return(
    <>
    <h2> Welcome to Profile Page</h2><br />
            Hello : {param.input}
    <h3> Hello there , you  are redirected to your profile Page</h3>
    <br />
    <h2> State coming from navigate can be accessed by : {location.state.NewLocation}</h2><br />
    Match output : {match.params.input}<br /><br />
    <button
    onClick={()=> navigate(-1)}
    >Go Back</button>



    </>
)
}
export default ProfilePage;