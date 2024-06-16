// hooks/useSession.js
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_KEY = 'user_session';

const useSession = () => {
	const [session, setSession] = useState(null);

	useEffect(() => {
		const loadSession = async () => {
			try {
				const savedSession = await AsyncStorage.getItem(SESSION_KEY);
				if (savedSession) {
					setSession(JSON.parse(savedSession));
				}
			} catch (error) {
				console.error('Failed to load session:', error);
			}
		};

		loadSession();
	}, []);

	const saveSession = async (newSession: any) => {
		try {
			await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
			setSession(newSession);
		} catch (error) {
			console.error('Failed to save session:', error);
		}
	};

	const clearSession = async () => {
		try {
			await AsyncStorage.removeItem(SESSION_KEY);
			setSession(null);
		} catch (error) {
			console.error('Failed to clear session:', error);
		}
	};

	return {
		session,
		saveSession,
		clearSession,
	};
};

export default useSession;
