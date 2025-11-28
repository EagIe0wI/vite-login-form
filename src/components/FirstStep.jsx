import { useState } from "react";
import { loginApi } from "../api/auth";

const FirstStep = ({ setStep }) => {
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
		const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const PASSWORD_REGEXP =
			/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

		const newErrors = {
			email: false,
			password: false,
		};

		// валидация поля email
		if (!EMAIL_REGEXP.test(emailInput)) {
			newErrors.email = true;
		}

		// валидация поля password
		if (passwordInput.length < 6 || PASSWORD_REGEXP.test(passwordInput)) {
			newErrors.password = true;
		}

		setErrors(newErrors);
		console.log(newErrors);

		return newErrors.email || newErrors.password;
	};

	const submitForm = async (e) => {
		e.preventDefault();
		// const data = await loginApi(emailInput, passwordInput);

		try {
			await loginApi(emailInput, passwordInput);
		} catch (e) {
			console.log(e);
			throw e;
		}

		if (!validateErrors()) {
			// перенаправление на след форму
			setStep("second");
			console.log("submited step 1");

			setEmailInput("");
			setPasswordInput("");
			return;
		}
		console.log("unsubmited step 1");
	};

	return (
		<form onSubmit={submitForm}>
			<p>Sing in to continue</p>
			<input
				type="text"
				value={emailInput}
				placeholder="Email"
				onChange={handleEmailInput}
				// выделение поля при ошибке
				// className={hasErrors.input ? "error" : ""}
			/>
			<input
				type="text"
				value={passwordInput}
				placeholder="Password"
				onChange={handlePasswordInput}
				// выделение поля при ошибке
				// className={hasErrors.input ? "error" : ""}
			/>
			<input type="submit" value="Log in" />
		</form>
	);
};

export default FirstStep;
