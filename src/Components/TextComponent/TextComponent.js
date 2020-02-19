import React from 'react'; 

import styles from './TextComponent.module.css';

class TextComponent extends React.Component {
    render() {
        return (
            <div>
                <p className={styles.text}>Algo más de texto para el ejemplo de CSS Modules</p>
                <div>
                    <span>Soy otro texto de forma local.</span>
                </div>
            </div>
        )
    }
}

export default TextComponent;