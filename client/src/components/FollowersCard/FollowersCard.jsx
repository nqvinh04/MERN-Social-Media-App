import React, {useEffect, useState} from "react";
import { Followers } from "../../Data/FollowersData";
import './FollowersCard.css';
import User from "../User/User";
import {useSelector} from "react-redux";
import {getAllUser} from "../../api/UseRequest";

const FollowersCard = () => {
    const [persons, setPersons] = useState([]);
    const {user} = useSelector((state) => state.auth.authData);

    useEffect(() => {
        const fetchPersons = async () => {
            const {data} = await getAllUser();
            setPersons(data);
        }
        fetchPersons();
    }, []);
    

    return(
        <div className="FollowerCard">
            <h3>People you may know</h3>

            {persons.map((person, id)=>{

                if(person._id !== user._id){
                    return(
                        <User person={person} key={id} />
                    )
                }
            })}
        </div>
    )
}

export default FollowersCard;