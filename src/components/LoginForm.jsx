import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useState } from "react";

const LoginForm = () => {
	const [whatStepIs, setStep] = useState({
		first: true,
		second: false,
	});

	return (
		<>
			{whatStepIs.first && <FirstStep setStep={setStep}></FirstStep>}
			{whatStepIs.second && <SecondStep setStep={setStep}></SecondStep>}
		</>
	);
};

export default LoginForm;
