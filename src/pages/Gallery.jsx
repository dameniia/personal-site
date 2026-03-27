import { Link } from "react-router-dom";
import gallery from "../data/gallery.json";
import "../css/gallery.css";

export function Gallery() {
  return (
    <>
      <header className="main-header">
        <div className="page-header-inner">
          <p className="page-subtitle">Photos &amp; Videos</p>
          <h1 className="page-title">Gallery</h1>
        </div>
      </header>

      <section className="gallery-container content">
        <p className="gallery-wip">
          This section is a work in progress — photos and videos coming soon.
        </p>
        {gallery.length === 0 ? (
          <p className="gallery-empty">No events yet.</p>
        ) : (
          <div className="gallery-events-grid">
            {gallery.map((event) => (
              <Link
                key={event.id}
                to={`/gallery/${event.id}`}
                className="gallery-event-card"
                aria-label={event.title}
              >
                <img src={event.cover} alt={event.title} />
                <div className="gallery-event-card-overlay">
                  <p className="gallery-event-card-title">{event.title}</p>
                  <div className="gallery-event-card-meta">
                    {event.date && (
                      <span className="gallery-event-card-date">{event.date}</span>
                    )}
                    {event.location && (
                      <span className="gallery-event-card-location">{event.location}</span>
                    )}
                    <span className="gallery-event-card-count">
                      {event.items.length} {event.items.length === 1 ? "item" : "items"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
