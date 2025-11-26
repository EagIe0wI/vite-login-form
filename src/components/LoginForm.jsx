import { useState } from "react";

const LoginForm = () => {
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const handleEmailInput = (e) => {
		setEmailInput(e.target.value);
	};

	const handlePasswordInput = (e) => {
		setPasswordInput(e.target.value);
	};

	const submitForm = (e) => {
		e.preventDefault();
		// addTask(emailInput, passwordInput);
		setEmailInput("");
		setPasswordInput("");
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

export default LoginForm;
