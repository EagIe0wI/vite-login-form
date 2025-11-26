import { useState } from "react";

const SecondStep = () => {
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

	const submitForm = (e) => {
		e.preventDefault();
		if (!validateErrors()) {
			console.log("unsubmited step 2");
			return;
		}
		// перенаправить на 1 форму
		// addTask(userInput, passwordInput);
		setUserInput("");
		console.log("submited step 2");
	};

	return (
		<form onSubmit={submitForm}>
			<p>Two-Factor Authentication</p>
			<input type="text" value={userInput} placeholder="Code" onChange={handlInput} />
		</form>
	);
};

export default SecondStep;
