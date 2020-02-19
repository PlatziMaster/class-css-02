import React from 'react'; 

import styles from './AnotherComponent.module.css';

class TextComponent extends React.Component {
    render() {
        return (
            <div>
                <p className={styles.text}>Algo más de texto para el ejemplo de CSS Modules</p>
            </div>
        )
    }
}

export default TextComponent;