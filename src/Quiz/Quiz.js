import { useState } from "react";
import { QuizItem } from "./QuizItem";

const questionArray = [
	{
		title: "html stands for ",
		options: [
			"Hyper Text Transfer Markup Language",
			"Hyper Transformation Markup Language",
			"Hyper Text Markup Language",
			"Hyper Text Makeup Language",
		],
		correct: 2,
	},
	{
		title: "SCSS requires Preprocessor to compile scss code to css ",
		options: ["true", "false"],
		correct: 0,
	},
	{
		title: "How many Heading Tags are present in HTML ",
		options: ["4", "5", "7", "6"],
		correct: 3,
	},
	{
		title: "ReactJS use which of the following to define markup",
		options: ["Markup", "JSX", "Javascript", "None"],
		correct: 1,
	},
];
export function Quiz() {
	const [questions, setQuestions] = useState(questionArray);
	const [showPrev, setShowPrev] = useState(false);
	const [showNext, setShowNext] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const onOptionSelected = () => {
		setShowNext(true);
		if (currentQuestion > 0) {
			setShowPrev(true);
		}
		if (currentQuestion <= 0) {
			setShowPrev(false);
		}
		if (currentQuestion + 1 == questions.length) {
			setShowNext(false);
		}
	};
	const handleNext = (selected) => {
		setCurrentQuestion((prevState) => {
			return prevState + 1;
		});
	};

	const handlePrevious = (selected) => {
		setCurrentQuestion((prevState) => {
			return prevState - 1;
		});
	};
	return (
		<div
			style={{
				width: "80%",
				height: "75%",
				justifyContent: "center",
				textAlign: "center",
				margin: "20px",
			}}
		>
			<QuizItem
				quiz={questions[currentQuestion]}
				srNo={currentQuestion + 1}
				showPrev={showPrev}
				showNext={showNext}
				onNextClicked={handleNext}
				onPrevClicked={handlePrevious}
				onOptionSelected={onOptionSelected}
			/>
		</div>
	);
}
