import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request, context }) => {
  return 0;
};

export const action: ActionFunction = async ({ request, context }) => {
  const url = new URL(request.url);
  const formData = await request.formData();
  console.log("action function called")
  return 0;
};

export default function Upload() {
  return (
    <div className={"h-screen w-screen bg-blue-950"}>
      upload page
      <Form method={"POST"}>
        <input type={"file"}></input>
        <button type={"submit"}>SUBMIT</button>
      </Form>
    </div>
  );
}
