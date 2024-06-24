import Button from "@/components/Button";
import Chip from "@/components/Chip";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
      <Chip label="칩칩" intent="primary" />
      <Chip label="칩칩" intent="secondary" />
      <Chip label="칩칩" intent="danger" />
      <Chip label="칩칩" intent="warning" />
      <Chip label="칩칩" intent="info" />
      <Chip label="칩칩" />
      <hr />
      <Button intent={"primary"} size={"md"}>
        Primary
      </Button>
      <Button intent={"primary"} size={"md"} href="/">
        Primary
      </Button>
    </div>
  );
}
