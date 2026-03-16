import { Link } from "react-router-dom";
import "../css/patch-notes.css";
import db from "../data/db.json";

export function PatchNotes() {
  const notes = db["patch-notes"];
  const latest = notes[notes.length - 1];

  return (
    <>
      <header className="main-header">
        <div className="page-header-inner">
          <p className="page-subtitle">
            Last updated{" "}
            <a href={`#patch-note-${latest.postId}`}>{latest.date}</a>
          </p>
          <h1 className="page-title">Patch Notes</h1>
        </div>
      </header>

      <section className="container content">
        <div className="patch-notes-list">
          {[...notes].reverse().map((note) => (
            <article
              key={note.postId}
              id={`patch-note-${note.postId}`}
              className="patch-note-card"
            >
              <p className="patch-note-date">{note.date}</p>
              <h3 className="patch-note-title">{note.title}</h3>
              <p className="patch-note-body">{note.body}</p>
              {note.link && (
                <Link to={note.link} className="patch-note-link">
                  View →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
