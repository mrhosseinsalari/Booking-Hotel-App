import { useNavigate, useParams } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkListContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";

function SingleBookmark() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookmark, currentBookmark, isLoadingCurrBookmark } =
    useBookmarks();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  if (isLoadingCurrBookmark && !currentBookmark) return <Loader />;

  return (
    <div className="singleBookmark">
      <button onClick={() => navigate(-1)} className="btn btn--back">
        &larr; Back
      </button>
      <h2>{currentBookmark.host_location}</h2>
      <div className="bookmarkItem">
        <div className="title">
          <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
          <strong>{currentBookmark.cityName}</strong>
        </div>
        <span>{currentBookmark.country}</span>
      </div>
    </div>
  );
}

export default SingleBookmark;
