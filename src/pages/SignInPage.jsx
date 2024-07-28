import styles from './styles/SignInPage.module.css';
import { auth, googleProvider } from '../config/firebase.js';
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert(t('signInPart.signInAlert'));
            navigate('/');
        } catch (err) {
            alert(err.message);
            console.error(err);
        }
    };

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert(t('signInPart.signUpAlert'));
            navigate('/');
        } catch (err) {
            alert(err.message);
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert(t('signInPart.googleSignUpAlert'));
            navigate('/');
        } catch (err) {
            alert(err.message);
            console.error(err);
        }
    };

    console.log(auth?.currentUser?.email);

    return (
        <>
            <h1 className={styles.title}>{t('signInPart.signIn')}</h1>
            <div className={styles.signInDiv}>
                <input
                    type="text"
                    placeholder={t('signInPart.emailPlaceholder')}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder={t('signInPart.passwordPlaceholder')}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <div className={styles.buttonContainer}>
                    <button onClick={signIn}>{t('signInPart.signIn')}</button>
                    <button onClick={signUp}>{t('signInPart.signUp')}</button>
                </div>
                <button onClick={signInWithGoogle} className={styles.googleButton}>
                    <FontAwesomeIcon icon={faGoogle}/> {t('signInPart.signInWithGoogle')}
                </button>
                {/*<button onClick={logout}>{t('signInPart.logout')}</button>*/}
            </div>
        </>
    );
};

export default SignInPage;
