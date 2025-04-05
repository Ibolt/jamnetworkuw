import { GDriveFile } from "../api/types";
import { HoverGradientFileCard } from "./hoverGradientCards";
import "../../styles/basePage.css";

type BaseFilePageProps = {
  title: string;
  files: GDriveFile[];
  buttonText?: string;
};

export default async function BaseFilePage({
  title,
  files,
  buttonText,
}: BaseFilePageProps) {
  return (
    <div className="base-page-container">
      <h1 style={{ marginBottom: "0.5em" }}>{title}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5em" }}>
        {files.map((file) => (
          <HoverGradientFileCard
            key={file.id}
            id={file.id || ""}
            title={file.name || ""}
            webViewLink={file.webViewLink || ""}
            buttonText={buttonText}
          />
        ))}
      </div>
    </div>
  );
}
