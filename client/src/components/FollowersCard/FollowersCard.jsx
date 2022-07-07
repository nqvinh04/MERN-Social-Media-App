import React, {useEffect, useState} from "react";
import { Followers } from "../../Data/FollowersData";
import './FollowersCard.css';
import User from "../User/User";
import {useSelector} from "react-redux";

const FollowersCard = () => {
    const [persons, setPersons] = useState([]);
    const {user} = useSelector((state) => state.auth.authData);

    useEffect(() => {
        const fetchPersons = async () => {
            const {data} = await getAllUse();
            setPersons(data);
        }
        fetchPersons();
    }, []);
    

    return(
        <div className="FollowerCard">
            <h3>People you may know</h3>

            {Followers.map((person, id)=>{
                return(
                    <User person={person} key={id} />
                )
            })}
        </div>
    )
}

export default FollowersCard;