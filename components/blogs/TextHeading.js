import React from 'react'
import styles from "./TextHeading.module.css"

function TextHeading({level,children}) {
    if (level === 1) {
        return (
            <h1 className={styles.heading}>{children}</h1>
        )
    }
    if (level === 2) {
        return (
            <h2 className={styles.h2Heading}>{children}</h2>
        )
    }
    if (level === 3) {
        return (
            <h3 className={styles.h3Heading}>{children}</h3>
        )
    }
}

export default TextHeading