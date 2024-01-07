import { listForms } from "../api/googleApiController";
import BaseFilePage from "../components/baseFilePage";

export default async function FormsPage() {
  const files = await listForms();

  return <BaseFilePage files={files} buttonText="Fill Out" />;
}
