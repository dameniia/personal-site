import { useEffect } from "react";
import PropTypes from "prop-types";

export function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onChange(index - 1);
      if (e.key === "ArrowRight" && hasNext) onChange(index + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, hasPrev, hasNext, onClose, onChange]);

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>

      <button
        className="lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onChange(index - 1); }}
        disabled={!hasPrev}
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {item.type === "video" ? (
          <video
            key={item.id}
            className="lightbox-media-video"
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img
            key={item.id}
            className="lightbox-media-photo"
            src={item.src}
            alt={item.title}
          />
        )}

        <div className="lightbox-info">
          {item.title && <p className="lightbox-title">{item.title}</p>}
          {item.date && <p className="lightbox-date">{item.date}</p>}
        </div>
      </div>

      <button
        className="lightbox-next"
        onClick={(e) => { e.stopPropagation(); onChange(index + 1); }}
        disabled={!hasNext}
        aria-label="Next"
      >
        ›
      </button>

      <span className="lightbox-counter">{index + 1} / {items.length}</span>
    </div>
  );
}

Lightbox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["photo", "video"]).isRequired,
      src: PropTypes.string.isRequired,
      poster: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
