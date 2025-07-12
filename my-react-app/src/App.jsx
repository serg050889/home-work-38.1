import React from 'react';
import Button from './components/button';

const App = () => {
    const handleClick = () => {
        alert('Кнопка працює!');
    };

    return (
        <div style={{ padding: '20px' }}>
            <Button
                text="Натисни мене"
                type="button"
                onClick={handleClick}
            />
        </div>
    );
};

export default App;