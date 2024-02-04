import { google } from "googleapis";

import { GDriveFile } from "./types";

const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
const FOLDER_MIME_TYPE = "application/vnd.google-apps.folder";

let credentials;
if (process.env.NODE_ENV === "development") {
  credentials = require("../../../credentials.json");
} else {
  credentials = {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
  };
  console.log(credentials);
}

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: SCOPES,
});
const driveAPI = google.drive({ version: "v3", auth });

const queryDrive = async (fields: string, query: string) => {
  try {
    const res = await driveAPI.files.list({
      fields,
      q: query,
    });
    const files = res.data.files;
    return files || ([] as GDriveFile[]);
  } catch (error: any) {
    console.error("Error fetching files:", error.message);
    return [];
  }
};

export const listForms = async (): Promise<GDriveFile[]> => {
  const FORM_MIME_TYPE = "application/vnd.google-apps.form";
  const FORMS_FOLDER_ID = "1DThjY3P52H84sUY6cubSmn_BKJlUFxgT";

  return await queryDrive(
    "files(id, name, webViewLink, mimeType)",
    `mimeType='${FORM_MIME_TYPE}' and parents in '${FORMS_FOLDER_ID}'`
  );
};

export const listDocs = async (): Promise<GDriveFile[]> => {
  const DOCS_FOLDER_ID = "1IIFwJc6BfGmWuYU-WKcHZXidXjPq38Pr";

  const docs = await queryDrive(
    "files(id, name, webViewLink, mimeType)",
    `mimeType!='${FOLDER_MIME_TYPE}' and '${DOCS_FOLDER_ID}' in parents`
  );

  // Remove filename extensions
  docs.forEach((doc) => {
    if (doc.name) {
      doc.name = doc.name.split(".")[0];
    }
  });

  return docs;
};
