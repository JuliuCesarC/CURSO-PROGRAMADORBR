import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "./components/Header";
import Timeline from "./components/Timeline";

function Home() {
	return (
		<>
			<CSSReset />
			<Menu/>
			<Header />
			<Timeline />
		</>
	);
}
export default Home;
