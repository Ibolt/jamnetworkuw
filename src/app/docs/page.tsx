import { listDocs } from "../api/googleApiController";
import BaseFilePage from "../components/baseFilePage";

export const revalidate = 1;
export default async function DocsPage() {
  const files = await listDocs();

  return <BaseFilePage title="Club Documents" files={files} />;
}
