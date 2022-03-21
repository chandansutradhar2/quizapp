import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export function Home() {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				margin: "auto",
				padding: "10px",
				textAlign: "center",
				display: "block",
			}}
		>
			<h2>Home Page</h2>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div
					style={{
						display: "flex",
						width: "450px",
						justifyContent: "center",
						flexDirection: "column",
						rowGap: "0.5rem",
					}}
				>
					<FormGroup>
						<TextField
							id="outlined-basic"
							label="First Name"
							variant="outlined"
						/>
					</FormGroup>

					<TextField id="outlined-basic" label="Last Name" variant="outlined" />
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Are you ready to take the Quiz?"
						/>
					</FormGroup>
					<Button variant="contained" disabled>
						Start Quiz
					</Button>
				</div>
			</div>
		</div>
	);
}
