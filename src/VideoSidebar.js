import React, { useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

import "./VideoSidebar.css";

function VideoSidebar({likes, shares, messages}) {
    const [Liked, setLicked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSide_button">
                {Liked ? (
                    <FavoriteIcon fontSize="large" onClick={e => setLicked(false)}/>
                ) : ( 
                    <FavoriteBorderIcon fontSize="large"  onClick={e => setLicked(true)}/>
                    )}
                <p>{Liked ? likes +1 : likes}</p>
            </div>
            <div className="videoSide_button">
                <MessageIcon  fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSide_button">
                <ShareIcon  fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
};

export default VideoSidebar;
