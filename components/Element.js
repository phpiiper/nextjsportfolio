import React from 'react';

const DynamicElement = ({ elementType, children, ...props }) => {
    const Element = elementType;
    return <Element {...props}>{children}</Element>;
};

export default function MyComponent() {
    const [elementType, setElementType] = React.useState('div');

    const handleChange = () => {
        setElementType(prevState => prevState === 'div' ? 'span' : 'div');
    };

    return (
        <div>
            <button onClick={handleChange}>Change Element Type</button>
            <DynamicElement elementType={elementType}>This is a dynamic element</DynamicElement>
        </div>
    );
}
