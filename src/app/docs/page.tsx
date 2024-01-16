import { listDocs, listForms } from "../api/googleApiController";
import BaseFilePage from "../components/baseFilePage";

export default async function DocsPage() {
  const files = await listDocs();

  return <BaseFilePage title="Club Documents" files={files} />;
}
