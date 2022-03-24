import { useLocation } from "react-router-dom";

export function Score() {
	const location = useLocation();

	return (
		<div style={{ display: "block", textAlign: "center", padding: "10rem" }}>
			{location.state.score >= location.state.passingScore ? (
				<h2 style={{ color: "#009b8d" }}>
					Congratulations!!! You have scored {location.state.score}% and have
					passed the Certification
				</h2>
			) : (
				<h2 style={{ color: "#f44336" }}>
					Oh No!!! You have scored {location.state.score}%, but have failed in
					this attempt.Please try again
				</h2>
			)}
		</div>
	);
}
