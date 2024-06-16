import { View, Text, ScrollView, FlatList, Pressable } from 'react-native';
import List from '@/components/List';

const reminders = [
	{
		name: 'Ibuprofen',
		time: '12:00 AM',
		type: 'tablet',
		stock: 2,
	},
	{
		name: 'Wake up',
		time: '6:00 AM',
		type: 'sedentary',
	},
];

export default function ReminderPage() {
	return (
		<ScrollView
			contentContainerStyle={{
				display: 'flex',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className='w-full h-full bg-white'
		>
			<View className='w-full h-full px-4 py-2 md:w-4/5 lg:w-3/5'>
				<View className=''>
					<Text className='text-xl font-semibold' role='heading' aria-level='2'>
						Upcoming Reminders
					</Text>
				</View>
				{/* list reminder  */}
				<View className='p-2'>
					<FlatList
						data={reminders}
						renderItem={({ item }) => <List data={item} key={item.name} />}
					/>
					<Pressable
						className='w-full p-3 text-white bg-blue-400 rounded-md shadow-md'
						onPress={() => console.log('Add Reminder')}
					>
						<Text className='text-center text-white'>Add reminder</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
}
