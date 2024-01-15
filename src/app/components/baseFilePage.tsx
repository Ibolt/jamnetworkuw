import { GDriveFile } from "../api/types";
import { HoverGradientFileCard } from "./hoverGradientCards";

type BaseFilePageProps = {
  files: GDriveFile[];
  buttonText?: string;
};

export default async function BaseFilePage({
  files,
  buttonText,
}: BaseFilePageProps) {
  return (
    <div style={{ padding: "0em 8em 8em 8em", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "0.5em" }}>Forms</h1>
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
