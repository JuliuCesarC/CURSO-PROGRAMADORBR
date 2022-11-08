import config from "../../config.json";
import styled from "styled-components";

function Header() {
	const StyledHeader = styled.header`
	margin-top: 50px;
		.profile {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
		.Cover {
			width: 100vw;
			height: 250px;
			overflow: hidden;
			position: relative;
		}
		.Cover img {
			width: 100%;
			height: unset;
			min-height: 500px;
			min-width: 750px;
			transform: translateY(-35%);
		}
	`;

	return (
		<StyledHeader>
			<div className="Cover">
				<img src="img/cover-photo.jpg" alt="Foto de capa perfil" />
			</div>
			<img
				className="profile"
				src={`https://github.com/${config.github}.png`}
				alt="Foto de perfil"
			/>
			<h2>{config.name}</h2>
			<h4>{config.job}</h4>
		</StyledHeader>
	);
}

export default Header;
