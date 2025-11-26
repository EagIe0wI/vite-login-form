import { useState } from "react";

const FirstStep = () => {
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [hasErrors, setErrors] = useState({
		email: false,
		password: false,
	});

	const handleEmailInput = (e) => {
		setEmailInput(e.target.value);
	};

	const handlePasswordInput = (e) => {
		setPasswordInput(e.target.value);
	};

	const validateErrors = () => {
		const newErrors = {
			email: false,
			password: false,
		};

		if (emailInput.length == 0) {
			newErrors.email = true;
		}
		if (passwordInput.length == 0) {
			newErrors.password = true;
		}
		setErrors(newErrors);
		return !newErrors.email && !newErrors.password;
	};

	const submitForm = (e) => {
		e.preventDefault();
		if (!validateErrors()) {
			console.log("unsubmited step 1");
			return;
		}
		// перенаправить на след форму
		// addTask(emailInput, passwordInput);
		setEmailInput("");
		setPasswordInput("");
		console.log("submited step 1");
	};

	return (
		<form onSubmit={submitForm}>
			<p>Sing in to continue</p>
			<input type="text" value={emailInput} placeholder="Email" onChange={handleEmailInput} />
			<input
				type="text"
				value={passwordInput}
				placeholder="Password"
				onChange={handlePasswordInput}
			/>
			<input type="submit" value="Log in" />
		</form>
	);
};

export default FirstStep;
