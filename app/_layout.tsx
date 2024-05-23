import { NativeWindStyleSheet } from 'nativewind';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

NativeWindStyleSheet.setOutput({
	default: 'native',
});

export default function HomeLayout() {
	return (
		<BottomSheetModalProvider>
			<Tabs>
				<Tabs.Screen
					name='index'
					options={{
						title: 'Home',
						tabBarIcon: ({ color }) => (
							<Ionicons name='home-outline' size={16} color={color} />
						),
						headerShown: false,
					}}
				/>
				<Tabs.Screen
					name='reminders/index'
					options={{
						title: 'Reminders',
						tabBarIcon: ({ color }) => (
							<Ionicons name='alarm-outline' size={16} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name='report/index'
					options={{
						title: 'Report',
						tabBarIcon: ({ color }) => (
							<Ionicons name='analytics-outline' size={16} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name='settings/index'
					options={{
						title: 'Settings',
						tabBarIcon: ({ color }) => (
							<Ionicons name='settings-outline' size={16} color={color} />
						),
					}}
				/>
			</Tabs>
		</BottomSheetModalProvider>
	);
}
