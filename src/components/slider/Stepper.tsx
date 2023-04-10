import React, { FC, ReactNode, useState } from 'react';

type StepperProps = {
    type?: 'horizontal' | 'vertical',
    labelPlacement?: 'default' | 'alternative',
};

type StepperContextValue = {
    props: StepperProps,
    count: number,
};
interface  Props extends StepperProps {
    children: ReactNode,
}
export const StepperContext = React.createContext<StepperContextValue | undefined>(undefined);

const Stepper: FC<Props> = ({ type = 'horizontal', labelPlacement = 'default', children }) => {
    const [count] = useState(0);

    const containerClasses = `shapla-stepper is-${type} ${type === 'horizontal' ? `has-lp-${labelPlacement}` : ''}`;

    const contextValue: StepperContextValue = {
        props: { type, labelPlacement },
        count,
    };

    return (
        <StepperContext.Provider value={contextValue}>
            <div className={containerClasses}>
                {children}
            </div>
        </StepperContext.Provider>
    );
};
export default Stepper;
