import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useState } from "react";

const LoginForm = () => {
	const [isFirstStep, setFirstStep] = useState(true);
	const [isSecondStep, setSecondStep] = useState(false);

	return (
		<>
			{isFirstStep && <FirstStep></FirstStep>}
			{isSecondStep && <SecondStep></SecondStep>}
		</>
	);
};

export default LoginForm;
