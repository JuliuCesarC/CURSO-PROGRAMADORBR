import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import FavoriteYouTube from "./components/Favorites";

function Home() {
	return (
		<>
			<CSSReset />
			<Menu/>
			<Header />
			<Timeline />
			<FavoriteYouTube/>
		</>
	);
}
export default Home;
