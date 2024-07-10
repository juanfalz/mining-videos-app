import React, { useState } from 'react';
import VideoItem from './VideoItem';
import VideoForm from './VideoForm';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const updateVideo = (updatedVideo) => {
    setVideos(videos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div>
      <h1>Mining Videos</h1>
      <VideoForm addVideo={addVideo} editingVideo={editingVideo} updateVideo={updateVideo} />
      <ul>
        {videos.map(video => (
          <VideoItem
            key={video.id}
            video={video}
            setEditingVideo={setEditingVideo}
            deleteVideo={deleteVideo}
          />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
