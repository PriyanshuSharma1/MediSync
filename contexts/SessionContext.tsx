// contexts/SecureSessionContext.js
import React, { createContext } from 'react';
import useSecureSession from '@/hooks/useSession';

const SessionContext = createContext({});

export const SessionProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const session = useSecureSession();

	return (
		<SessionContext.Provider value={session}>
			{children}
		</SessionContext.Provider>
	);
};
