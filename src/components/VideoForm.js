import React, { useState, useEffect } from 'react';

const VideoForm = ({ addVideo, editingVideo, updateVideo }) => {
  const [video, setVideo] = useState({ id: null, title: '', url: '' });

  useEffect(() => {
    if (editingVideo) {
      setVideo(editingVideo);
    }
  }, [editingVideo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (video.id === null) {
      video.id = Date.now();
      addVideo(video);
    } else {
      updateVideo(video);
    }
    setVideo({ id: null, title: '', url: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={video.title}
        onChange={(e) => setVideo({ ...video, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Video URL"
        value={video.url}
        onChange={(e) => setVideo({ ...video, url: e.target.value })}
      />
      <button type="submit">{video.id ? 'Update Video' : 'Add Video'}</button>
    </form>
  );
};

export default VideoForm;
