import { COURSE_CREDITS } from "@/lib/config";
import { AuthAction } from "./AuthAction";

export default function Footer() {
  return (
    <footer>
      <p>Made by Nimrod Segev.</p>
      <p>
        <AuthAction /> | {COURSE_CREDITS}
      </p>
    </footer>
  );
}
