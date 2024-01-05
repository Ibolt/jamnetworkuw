import { google } from "googleapis";

import credentials from "../../../credentials.json";
import { GDriveForm } from "./types";

const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
const FORM_MIME_TYPE = "application/vnd.google-apps.form";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: SCOPES,
});
const driveAPI = google.drive({ version: "v3", auth });

export const listForms = async (): Promise<GDriveForm[]> => {
  try {
    const res = await driveAPI.files.list({
      fields: "files(id, name, webViewLink, mimeType)",
    });
    const files = res.data.files;

    const data = files
      ?.filter((f) => f.mimeType === FORM_MIME_TYPE && f.id)
      .map((file) => {
        return {
          id: file.id,
          name: file.name,
          webViewLink: file.webViewLink,
        } as GDriveForm;
      });

    return data || ([] as GDriveForm[]);
  } catch (error: any) {
    console.error("Error fetching files:", error.message);
    return [];
  }
};
