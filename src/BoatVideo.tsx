import video from "./assets/UE5 Ship Sailing_1080p.mp4";

function BoatVideo() {
  return (
    <video
      className="h-100vh w-full object-cover animate-clip-from-top-animation"
      autoPlay
      muted
      loop
      src={video}
    ></video>
  );
}

export default BoatVideo;
