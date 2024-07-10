import React from 'react';

const VideoItem = ({ video, setEditingVideo, deleteVideo }) => {
  return (
    <li>
      <h3>{video.title}</h3>
      <a href={video.url} target="_blank" rel="noopener noreferrer">Watch Video</a>
      <button onClick={() => setEditingVideo(video)}>Edit</button>
      <button onClick={() => deleteVideo(video.id)}>Delete</button>
    </li>
  );
};

export default VideoItem;
