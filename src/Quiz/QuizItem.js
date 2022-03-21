import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
export function QuizItem(props) {
	const [selected, setSelected] = useState(null);

	return (
		<div>
			<div>
				<h4>
					{props.srNo}) {props.quiz.title}
				</h4>
			</div>
			<div>
				<FormControl>
					<RadioGroup aria-labelledby="demo-radio-buttons-group-label">
						{props.quiz.options.map((ele, idx) => {
							return (
								<FormControlLabel
									key={idx}
									value={idx}
									control={
										<Radio
											onChange={() => {
												setSelected(idx);
												props.onOptionSelected();
											}}
										/>
									}
									label={ele}
								/>
							);
						})}
					</RadioGroup>
				</FormControl>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Button
					variant="contained"
					component="span"
					onClick={() => props.onPrevClicked(selected)}
					disabled={!props.showPrev}
				>
					&#60; &#60; Prev
				</Button>
				<Button
					variant="contained"
					component="span"
					onClick={() => props.onNextClicked(selected)}
					disabled={!props.showNext}
				>
					Next &#62; &#62;
				</Button>
			</div>
		</div>
	);
}
