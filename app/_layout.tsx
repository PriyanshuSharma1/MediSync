import { SessionProvider } from '@/contexts/SessionContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<Slot />
		</SessionProvider>
	);
}
