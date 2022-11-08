import config from "../../config.json";
import styled from "styled-components";

function Header() {
	const StyledHeader = styled.header`
		width: 100%;
		margin-top: 50px;
		.Cover {
			width: 100%;
			height: 250px;
			overflow: hidden;
			position: relative;
		}
		.Cover img {
			position: absolute;
			height: unset;
			width: 100%;
			min-height: 500px;
			min-width: 750px;
			transform: translateY(-25%);
			z-index: -1;
		}
		.userInfo {
			margin-top: 30px;
			display: flex;
			align-items: center;
			width: 100%;
			padding: 16px 32px;
			gap: 16px;
		}
		.profile {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
	`;

	return (
		<StyledHeader>
			<div className="Cover">
				<img src="img/cover-photo.jpg" alt="Foto de capa perfil" />
			</div>
			<section className="userInfo">
				<img
					className="profile"
					src={`https://github.com/${config.github}.png`}
					alt="Foto de perfil"
				/>
				<span>
					<h2>{config.name}</h2>
					<h4>{config.job}</h4>
				</span>
			</section>
		</StyledHeader>
	);
}

export default Header;
