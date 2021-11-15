import React from 'react';
import styles from './Footer.module.scss';
import Links from './Links/Links';

const Footer = ({page}) => {
    let styleLeftDiv;
    let styleRightDiv = styles.rightDiv;
    if(page == 'main'){
        styleLeftDiv = styles.leftDiv;
        styleRightDiv = styles.rightDivMainPage
    }
    return (
        <div className = {styles.footer}>
            <div className = {styleLeftDiv}></div>
            <div className = {styleRightDiv}>
                <Links />
            </div>
            {page == 'top' && <div className = {styles.topFooterLine}>
            earn by promoting
            </div>}
            {page == 'racing' && <div className = {styles.racingFooterLine}>
            earn by promoting
            </div>}
        </div>
    );
}
export default Footer;