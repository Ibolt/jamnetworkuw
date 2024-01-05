import { listForms } from "../api/googleApiController";
import "../../styles/components/homepage-sections/events.css";

export default async function FormsPage() {
  const files = await listForms();

  const fileCard = (id: string, title: string, webViewLink: string) => {
    return (
      <div key={id} className="event-card" style={{ aspectRatio: 0 }}>
        <div className="event-card-content">
          <h3
            className="event-card-title"
            style={{ fontSize: "1.5rem", marginBottom: "2rem" }}
          >
            {title}
          </h3>
          <a
            href={webViewLink}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              border: "1px solid #4af8ba",
              backgroundColor: "#4af8ba",
              borderRadius: "2px",
              fontSize: "1rem",
              fontWeight: 500,
              textDecoration: "none",
              color: "black",
              padding: "0.5rem 1rem",
            }}
          >
            Fill Out
          </a>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: "0em 8em 8em 8em" }}>
      <h1
        style={{ fontSize: "7.25em", fontWeight: 400, marginBottom: "0.5em" }}
      >
        Forms
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5em" }}>
        {files.map((file) => fileCard(file.id, file.name, file.webViewLink))}
      </div>
    </div>
  );
}
