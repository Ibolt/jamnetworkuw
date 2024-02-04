import { listForms } from "../api/googleApiController";
import BaseFilePage from "../components/baseFilePage";

export const revalidate = 0;
export default async function FormsPage() {
  const files = await listForms();

  return <BaseFilePage title="Sign Ups" files={files} buttonText="Fill Out" />;
}
