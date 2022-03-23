import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

export function Home() {
	const [fName, setFName] = useState("");
	const [lastName, setLastName] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const [disabled, setIsDisabled] = useState(true);
	const toggleButton = () => {
		if (fName.length > 0 && lastName.length > 0 && isChecked) {
			setIsDisabled(false);
		}
	};
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
							value={fName}
							onChange={(ev) => {
								setFName(ev.target.value);
								toggleButton();
							}}
						/>
					</FormGroup>
					<FormGroup>
						<TextField
							id="outlined-basic"
							label="Last Name"
							variant="outlined"
							value={lastName}
							onChange={(ev) => {
								setLastName(ev.target.value);
								toggleButton();
							}}
						/>
					</FormGroup>

					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									value={isChecked}
									onChange={(ev) => {
										console.log(ev);
									}}
								/>
							}
							label="Are you ready to take the Quiz?"
						/>
					</FormGroup>
					<Button variant="contained" disabled={disabled}>
						Start Quiz
					</Button>
				</div>
			</div>
		</div>
	);
}
