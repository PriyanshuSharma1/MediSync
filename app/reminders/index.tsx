import { View, Text, ScrollView, FlatList } from 'react-native';
import List from '../../components/List';

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
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className='w-full bg-white'
		>
			<View className='w-full h-full px-4 py-2 md:w-4/5 lg:w-3/5'>
				<View className=''>
					<Text className='text-xl font-semibold'>Upcoming Reminders</Text>
				</View>
				{/* list reminder  */}
				<View className='p-2'>
					<FlatList
						data={reminders}
						renderItem={({ item }) => <List data={item} key={item.name} />}
					/>
				</View>
			</View>
		</ScrollView>
	);
}
