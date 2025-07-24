import { useState } from "react"

export default function useForm(steps) {

    const [currentSetp, setCurrentStep] = useState(0);

    function changeStep(i, e) {
        if (e) e.preventDefault();

        if(i < 0 || i >= steps.length) return;

        setCurrentStep(i)
    }

    return {
        currentSetp,
        currentComponent: steps[currentSetp],
        changeStep,
        isLastStep: currentSetp + 1 === steps.length ? true : false,
        isFirstStep: currentSetp === 0 ? true : false,
    }
}
