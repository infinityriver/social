import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/image/1212q.png'
import { Link } from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map((p) => 
            {return <span onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage == p && styles.selectedPage}>{p}</span>})}
            
        </div>
        {
            props.users.map( (u) => <div key={u.id}>
                <span>
                    <div>
                        <Link to={'/profile/' + u.id}>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </Link>
                    </div>
                    <div>
                        { u.followed 
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true, 
                                    headers: {
                                        "api-key": "e00ce4f6-40ad-4eac-ad57-8f5135d8207a"}
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                            
                            }}>UnFollow</button> 
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {} , {
                                    withCredentials: true,
                                    headers: {
                                        "api-key": "e00ce4f6-40ad-4eac-ad57-8f5135d8207a"}
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })
                                                                                       
                                }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    
}

export default Users