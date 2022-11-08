import config from "../../config.json";
import styled from "styled-components";
const FavDiv = styled.div`
	width: 100%;
	padding: 10px 20px;
	h3{
		margin-bottom: 15px;
	}
	.Card {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
	img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		display: block;
		margin: auto;
	}
	a {
		color: unset;
	}
`;
function FavoriteYouTube() {
	const AluraTube = config.aluratube;

	console.log(AluraTube);
	return (
		<FavDiv>
			<h3>AluraTubes favoritos!</h3>
			<div className="Card">
				{AluraTube.map((fav) => {
					return (
						<a href={fav.link} target="_blank">
							<img src={fav.img} alt="Foto Perfil" />
							{fav.name}
						</a>
					);
				})}
			</div>
		</FavDiv>
	);
}

export default FavoriteYouTube;
