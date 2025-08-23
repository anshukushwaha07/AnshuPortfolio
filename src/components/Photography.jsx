import React, { useEffect, useState, useCallback } from "react";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
  </div>
);

function Photography() {
  const [photos, setPhotos] = useState([]);
  const [pagingInfo, setPagingInfo] = useState({ next: null, previous: null });
  const [isLoading, setIsLoading] = useState(true);

  const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
  //const accessToken =
  //"IGAAKrsqTOyI5BZAFBNZA1htc3VOSEVDRTVhaWpWMkV1cS1QSlRhcFREVXRVZA1lZANGE2UXdvQkZACeHF6X2RPYWR0RDFHYURKNUk4MVRZAMm1oVDZAVbmRmaWJ0djdVWjljM3g5NG96dkNyQXhsQUIxdFkxeDdzN1hHT29LVlJQWFVRQQZDZD";
  const initialUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=6&access_token=${accessToken}`;

  const fetchPage = useCallback(async (url) => {
    if (!url) return;
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        console.error("Instagram API Error:", data.error.message);
        setPhotos([]);
      } else {
        const imagePosts = (data.data || []).filter(
          (post) => post.media_type === "IMAGE"
        );
        setPhotos(imagePosts);
        setPagingInfo(data.paging || { next: null, previous: null });
      }
    } catch (error) {
      console.error("Error fetching Instagram photos:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(initialUrl);
  }, [fetchPage, initialUrl]);

  const handleNext = () => fetchPage(pagingInfo.next);
  const handlePrevious = () => fetchPage(pagingInfo.previous);

  const getCleanAltText = (caption) => {
    if (!caption) return "Instagram Photo";
    return caption.replace(/#\w+/g, "").trim();
  };

  return (
    <div className="py-16 px-4 md:px-12 lg:px-24 bg-white transition-all duration-300 cursor-pointer">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
          {photos.length > 0 ? (
            photos.map((photo) => (
              // This is the card structure from your "Design" component reference
              <a
                href="https://www.instagram.com/mr.anshu.in/"
                target="_blank"
                rel="noopener noreferrer"
                key={photo.id}
                className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform bg-white border border-gray-200"
              >
                <img
                  src={photo.media_url}
                  alt={getCleanAltText(photo.caption)}
                  className="w-full h-64 object-cover" // Consistent height for images
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">@mr.anshu.in</h3>
                  <p className="text-sm text-gray-600 mt-1">Instagram</p>
                </div>
              </a>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No photos to display.
            </p>
          )}
        </div>
      )}

      {/* Pagination: Next and Previous Buttons */}
      {!isLoading && (photos.length > 0 || pagingInfo.previous) && (
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={!pagingInfo.previous || isLoading}
            className="px-6 py-2 bg-black text-white rounded-full text-base font-normal font-raleway transition-colors hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!pagingInfo.next || isLoading}
            className="px-6 py-2 bg-black text-white rounded-full text-base font-normal font-raleway transition-colors hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Photography;
