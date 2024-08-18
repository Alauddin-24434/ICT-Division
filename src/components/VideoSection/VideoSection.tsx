

const VideoSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Watch Our Latest Videos</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-56 md:h-64 lg:h-80"
                src="https://youtu.be/GT9ShGE_qjg"
                title="Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Video Title 1</h3>
                <p className="text-gray-600 mt-2">Short description of the video goes here.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-56 md:h-64 lg:h-80"
                src="https://youtu.be/GT9ShGE_qjg"
                title="Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Video Title 2</h3>
                <p className="text-gray-600 mt-2">Short description of the video goes here.</p>
              </div>
            </div>
          </div>
          {/* Add more video items as needed */}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
