function BoatVideo() {
  return (
    <video
      className="h-100vh w-full object-cover animate-clip-from-top-animation"
      autoPlay
      muted
      loop
    >
      <source
        src="https://www.youtube.com/watch?v=ijF4-Dea4bM&ab_channel=EranHaviv"
        type="video/mp4"
      />
    </video>
  );
}

export default BoatVideo;
