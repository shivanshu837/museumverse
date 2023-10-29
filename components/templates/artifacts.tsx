import MainContent from "../organisms/MainContent";
import Sidebar from "../organisms/sidebar";

const Artifacts: React.FunctionComponent = () => {
  return (
    <div className="flex items-start justify-start artifacts">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Artifacts;
