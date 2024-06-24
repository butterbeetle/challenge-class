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
      <Button intent={"primary"} size={"sm"}>
        Primary
      </Button>
      <Button intent={"primary"} size={"md"}>
        Primary
      </Button>
      <Button intent={"primary"} size={"lg"}>
        Primary
      </Button>
      <Button intent={"primary"} size={"lg"} variant={"outline"}>
        Primary
      </Button>
      <hr />
      <Button intent={"secondary"} size={"sm"}>
        Secondary
      </Button>
      <Button intent={"secondary"} size={"md"}>
        Secondary
      </Button>
      <Button intent={"secondary"} size={"lg"}>
        Secondary
      </Button>
      <Button intent={"secondary"} size={"lg"} variant={"outline"}>
        Secondary
      </Button>
      <hr />
      <Button intent={"danger"} size={"sm"}>
        Danger
      </Button>
      <Button intent={"danger"} size={"md"}>
        Danger
      </Button>
      <Button intent={"danger"} size={"lg"}>
        Danger
      </Button>
      <Button intent={"danger"} size={"lg"} variant={"outline"}>
        Danger
      </Button>
    </div>
  );
}
