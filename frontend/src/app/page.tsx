import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Calendar } from "@/components/calendar";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <ModeToggle />
      <Calendar />
    </div>
  );
}
