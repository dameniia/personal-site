import "../css/noplan.css";
import "../css/noplan-post.css";

const CLOUD = "https://res.cloudinary.com/dvhlgdwdh/image/upload/f_auto,q_auto,w_800";

const SCREENS = [
  {
    caption: "Clean design",
    src: `${CLOUD}/v1791586984/clean_design_exercise_view_agcux5.png`,
    alt: "noplan exercise view",
  },
  {
    caption: "Before scanning",
    src: `${CLOUD}/v1791587237/before_scanning_zq1jf3.png`,
    alt: "noplan before scanning equipment",
  },
  {
    caption: "After scanning",
    src: `${CLOUD}/v1791587237/after_scanning_fcmqdd.png`,
    alt: "noplan exercise suggestions after scanning equipment",
  },
];

const POINTS = [
  "AI scans your equipment and suggests exercises",
  "AI trainer that knows your profile and progress",
  "Easy to add and swap exercises mid-workout",
  "Built-in database of 270 exercises",
  "Apple Health and Apple Fitness integration",
  "No account, no quizzes. Your data stays on your iPhone",
];

// Standalone 1200×627 canvas (LinkedIn feed image ratio) for taking a screenshot.
export function NoPlanPost() {
  return (
    <div className="np-root np-post-page">
      <div className="np-post">
        <div className="np-post-copy">
          <p className="np-post-logo">noplan</p>
          <h1 className="np-post-title">No plan.<br />Build and swap as you go.</h1>
          <ul className="np-post-points">
            {POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="np-post-phones">
          {SCREENS.map((screen) => (
            <figure key={screen.caption} className="np-post-fig">
              <div className="np-phone np-post-phone">
                <div className="np-screen np-screen--media">
                  <img className="np-screen-video" src={screen.src} alt={screen.alt} />
                </div>
              </div>
              <figcaption className="np-post-cap">{screen.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
