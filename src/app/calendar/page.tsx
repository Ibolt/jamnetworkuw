import "../../styles/basePage.css";

export default function CalendarPage() {
  return (
    <div className="base-page-container">
      <h1 style={{ marginBottom: "0.5em" }}>Event Calendar</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&src=amFtbmV0d29ya3V3QGdtYWlsLmNvbQ&color=%23D50000"
        style={{ border: "solid 1px #777", width: "100%", height: "80vh" }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
