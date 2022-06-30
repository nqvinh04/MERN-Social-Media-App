import React, {useState, useRef} from "react";
import ProfileImage from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import {useSelector} from "react-redux";

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const desc = useRef();
    const {user} = useSelector((state) => state.auth.authData)
    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if(image) {
            const data = new FormData();
            const filename = Date.now() + image.name;
            data.append("name", filename);
            data.append("file", image);
            newPost.image = filename;
            console.log(1111, newPost);
        }
    }

    return(
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input
                    ref={desc}
                    type="text"
                    placeholder="What's happening" />
                <div className="postOptions">
                    <div className="option" style={{color: "#4CB256"}}
                         onClick={() => imageRef.current.click()}
                    >
                        <UilScenery/>
                        Photo
                    </div>
                    <div className="option" style={{color: "#4A4EB7"}}>
                        <UilPlayCircle/>
                        Play
                    </div>
                    <div className="option" style={{color: "#EF5757"}}>
                        <UilLocationPoint/>
                        Location
                    </div>
                    <div className="option" style={{color: "#E1AE4A"}}>
                        <UilSchedule/>
                        Schedule
                    </div>
                    <button className="button ps-button"
                            onClick={handleSubmit}
                    >
                        Share
                    </button>
                    <div style={{display: 'none'}}>
                        <input type="file"
                               name="myImage"
                               ref={imageRef}
                               onChange={onImageChange}
                        />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="preview" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare;