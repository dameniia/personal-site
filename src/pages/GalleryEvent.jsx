import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Lightbox } from "../components/Lightbox";
import gallery from "../data/gallery.json";
import "../css/gallery.css";
import "../css/tag-buttons.css";

export function GalleryEvent() {
  const { eventId } = useParams();
  const event = gallery.find((e) => e.id === eventId);

  const [activeFilter, setActiveFilter] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!event) {
    return (
      <section className="gallery-container content">
        <Link to="/gallery" className="gallery-back">← Gallery</Link>
        <p className="gallery-empty">Event not found.</p>
      </section>
    );
  }

  const hasVideos = event.items.some((i) => i.type === "video");
  const hasPhotos = event.items.some((i) => i.type === "photo");
  const showFilters = hasVideos && hasPhotos;

  const filtered =
    activeFilter === null
      ? event.items
      : event.items.filter((i) => i.type === activeFilter);

  return (
    <>
      <header className="main-header">
        <div className="page-header-inner">
          {event.location && (
            <p className="page-subtitle">{event.location}</p>
          )}
          <h1 className="page-title">{event.title}</h1>
        </div>
      </header>

      <section className="gallery-container content">
        <Link to="/gallery" className="gallery-back">← Gallery</Link>

        {showFilters && (
          <div className="gallery-filter-row">
            <button
              className={`tag_button${activeFilter === null ? " tag_button--active" : ""}`}
              onClick={() => setActiveFilter(null)}
            >
              All
            </button>
            <button
              className={`tag_button${activeFilter === "photo" ? " tag_button--active" : ""}`}
              onClick={() => setActiveFilter((p) => (p === "photo" ? null : "photo"))}
            >
              Photos
            </button>
            <button
              className={`tag_button${activeFilter === "video" ? " tag_button--active" : ""}`}
              onClick={() => setActiveFilter((p) => (p === "video" ? null : "video"))}
            >
              Videos
            </button>
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="gallery-empty">Nothing here yet.</p>
        ) : (
          <div className="gallery-grid">
            {filtered.map((item, idx) => (
              <button
                key={item.id}
                className={`gallery-item${item.type === "video" ? " gallery-item--video" : ""}`}
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Open ${item.title || item.type}`}
              >
                <img
                  src={item.thumbnail || item.poster}
                  alt={item.title || ""}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  {item.title && (
                    <span className="gallery-item-title">{item.title}</span>
                  )}
                </div>
                <span className="gallery-item-badge">
                  {item.type === "video" ? "Video" : "Photo"}
                </span>
                {item.type === "video" && (
                  <span className="gallery-play-icon" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
        )}
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </>
  );
}
