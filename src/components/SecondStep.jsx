import { useState } from "react";

const SecondStep = ({ setStep }) => {
	const [userInput, setUserInput] = useState("");
	const [hasErrors, setErrors] = useState({
		input: false,
	});

	const handlInput = (e) => {
		setUserInput(e.target.value);
		if (userInput.length == 5) submitForm(e);
	};

	const validateErrors = () => {
		const newErrors = {
			input: false,
		};

		if (userInput.length == 0) {
			newErrors.input = true;
		}
		setErrors(newErrors);
		return !newErrors.input;
	};

	const changeStep = () => {
		console.log("back to 1 step");
		setStep("first");
	};

	const submitForm = (e) => {
		e.preventDefault();
		if (!validateErrors()) {
			console.log("unsubmited step 2");
			return;
		}
		setStep("first");
		setUserInput("");
		console.log("submited step 2");
	};

	return (
		<form onSubmit={submitForm}>
			<button onClick={changeStep}>Back</button>
			<p>Two-Factor Authentication</p>
			<input type="text" value={userInput} placeholder="Code" onChange={handlInput} />
		</form>
	);
};

export default SecondStep;
