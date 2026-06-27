import { playbookContent } from "../../content/playbook";
import { PlaybookApp } from "@/components/playbook-app";

export default function Home() {
  return <PlaybookApp content={playbookContent} />;
}
