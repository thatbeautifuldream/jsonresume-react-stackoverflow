import { Resume } from "./components/resume";
import { resumeData } from "./utils/resume.data";

export default function App() {
  return <Resume resume={resumeData} />;
}
