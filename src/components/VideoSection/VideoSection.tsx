
type VideoCardProps = {
  src: string;
  title: string;
  description: string;
};

const VideoCard = ({ src, title, description }: VideoCardProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="w-full h-56 md:h-64 lg:h-80"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-[#951aa1]">{title}</h3>
          <p className="text-gray-600 mt-2">{description.slice(0,40)}</p>
        </div>
      </div>
    </div>
  );
};



const VideoSection = () => {
  const videos = [
    {
      src: 'https://www.youtube.com/embed/_r58G5iM_NU?si=McxvRwgQqIt6G2ay',
      title: 'জাতীয় সংগীত',
      description: '‘আমার সোনার বাংলা, আমি তোমায় ভালোবাসি’',
    },
    {
      src: 'https://www.youtube.com/embed/GT9ShGE_qjg?si=UVy1elqv5XXw9WTS',
      title: 'বন্যার সময় কি করণীয়',
      description: 'বন্যার সময় সুরক্ষা নিশ্চিত করার জন্য কিছু গুরুত্বপূর্ণ পদক্ষেপ নেওয়া উচিত',
    },
    // Add more video objects as needed
  ];

  return (
    <section className="p-4 ">
 
      <h1 className="my-8 sm:my-8 md:my-16 lg:my-16 xl:my-16 2xl:my-16 text-center text-2xl md:text-4xl text-[#6265da] font-bold">
          Watch Our Latest Videos
        </h1>
        <div  data-aos="fade-up"  className="flex flex-wrap justify-center gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              src={video.src}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      
    </section>
  );
};

export default VideoSection;
