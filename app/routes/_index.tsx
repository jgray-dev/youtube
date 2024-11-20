import type {ActionFunction, LoaderFunction, MetaFunction} from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Index route here" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const loader: LoaderFunction = async ({ request, context }) => {
  return 0
}
export const action: ActionFunction = async ({ request, context }) => {
  return 0
}

export default function Index() {
  return (
    <div>
      This is the main div :P
    </div>
  );
}
