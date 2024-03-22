import { listForms } from "../api/googleApiController";
import BaseFilePage from "../components/baseFilePage";

export const revalidate = 1;
export default async function FormsPage() {
  const files = await listForms();

  return <BaseFilePage title="Forms" files={files} buttonText="Fill Out" />;
}
