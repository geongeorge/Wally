/** @format */

import TextInput from "../components/TextInput";
import WallCanvas from "../components/WallCanvas";

const Home = () => {
  return (
    <div>
      Home page
      <div className="panel">
        <TextInput></TextInput>
        <WallCanvas></WallCanvas>
      </div>
    </div>
  );
};

export default Home;
