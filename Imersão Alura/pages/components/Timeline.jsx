import styled from "styled-components";
import config from "../../config.json";
import { StyledTimeline } from "../../src/components/Timeline";

const CardList = styled.div`

`;

function Timeline(props) {
	const Config = config.playlists;
	const playlistName = Object.keys(config.playlists);

	function randomID() {
		return Math.random().toString(36).substring(2, 9);
	}
	return (
		<StyledTimeline>
			{playlistName.map((listName) => {
				const videos = Config[listName];
				return (
					<section key={randomID()}>
						<h2>{listName}</h2>
						<div>
							{videos.map((video) => {
								return (
									<a href={video.url} key={randomID()}>
										<img src={video.thumb} alt="Imagem thumbnail" />
										<span>{video.title}</span>
									</a>
								);
							})}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}

export default Timeline;
