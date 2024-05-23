import { View, Text, Pressable, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useRef, useCallback } from 'react';
import Checkbox from 'expo-checkbox';
import MedicineIcon from '../assets/Icons/MedicineIcon';
import List from '../components/List';
import {
	BottomSheetBackdrop,
	BottomSheetModal,
	useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const medicineList = [
	{
		name: 'Paracetamol',
		time: '8:00 AM',
		type: 'pill',
		stock: 10,
	},
	{
		name: 'Ibuprofen',
		time: '12:00 PM',
		type: 'tablet',
		stock: 4,
	},
	{
		name: 'Paracetamol',
		time: '8:00 PM',
		type: 'pill',
		stock: 8,
	},
	{
		name: 'Ibuprofen',
		time: '12:00 AM',
		type: 'tablet',
		stock: 2,
	},
	{
		name: 'Paracetamol',
		time: '8:00 AM',
		type: 'pill',
		stock: 10,
	},
	{
		name: 'Paracetamol',
		time: '8:00 AM',
		type: 'pill',
		stock: 10,
	},
	{
		name: 'Paracetamol',
		time: '8:00 AM',
		type: 'pill',
		stock: 10,
	},
];

export default function HomePage() {
	const [checked, setChecked] = useState(true);

	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const { dismiss } = useBottomSheetModal();

	const openBottomModal = () => {
		bottomSheetRef.current?.present();
	};

	const closeBottomModal = useCallback(() => {
		dismiss();
	}, [dismiss]);

	return (
		<GestureHandlerRootView
			id='gesture-handler'
			className='relative flex items-center flex-1 w-full h-full'
		>
			<ScrollView
				contentContainerStyle={{
					display: 'flex',
					flexGrow: 1,
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
				className='relative w-full h-full bg-gray-100'
			>
				{/* greeting section */}
				<View className='flex items-start justify-end w-full p-4 bg-yellow-500 h-[30%] rounded-br-3xl'>
					<View className='-ml-8 w-52 h-52 top-16'>
						{/* <GreetingBlob /> */}
					</View>
					<View className='absolute w-20 h-20 lg:w-24 lg:h-24 top-32 left-4'>
						<MedicineIcon />
					</View>
					<View className='flex justify-center w-full'>
						<View className='lg:w-4/5'>
							<Text className='text-3xl font-bold text-gray-100'>
								Hey, Priyanshu!
							</Text>
						</View>
					</View>
				</View>
				{/* 4/5 container in the web */}
				<View className='w-full px-4 md:w-4/5 lg:w-3/5'>
					{/* daily view of the week  */}
					<View>
						{/* week view title */}
						<View className='flex flex-row items-center mt-6 mb-3'>
							<View className='mr-2'>
								<Ionicons name='calendar-outline' size={24} />
							</View>
							<Text className='text-lg font-semibold'>Week view</Text>
						</View>
						{/* week day check boxes */}
						<View className='flex flex-row justify-between w-full'>
							{weekDays.map((day) => (
								<Pressable
									className='flex items-center justify-center p-2 w-[12.5%] border border-gray-200 bg-white rounded-md'
									key={day}
									style={{
										shadowColor: 'rgba(0,0,0)',
										shadowOpacity: 0.2,
										shadowOffset: { width: 0, height: 5 },
										shadowRadius: 5,
										elevation: 5,
									}}
								>
									<View>
										<Text className='text-sm font-semibold'>{day}</Text>
									</View>
									<View className='p-1'>
										<Checkbox
											value={checked}
											onChange={() => setChecked(!checked)}
											style={{ borderRadius: 1000 }}
											color={'#EAB308'}
										/>
									</View>
								</Pressable>
							))}
						</View>
					</View>
					{/* list of medication and time */}
					<View className='flex flex-row items-center mt-6 mb-3'>
						<View className='mr-2'>
							<Ionicons name='bandage-outline' size={24} />
						</View>
						<Text className='text-lg font-semibold'>Medicine</Text>
					</View>
					{/* medicine list */}
					<FlatList
						className='pb-12 web:p-0'
						data={medicineList}
						renderItem={({ item }) => <List data={item} key={item.name} />}
					/>
				</View>
				<BottomSheetModal
					ref={bottomSheetRef}
					index={0}
					backdropComponent={BottomSheetBackdrop}
					snapPoints={['50%', '75%']}
					enableDismissOnClose={true}
					enablePanDownToClose={true}
				>
					<View className='bg-white'>
						<Text>Bottom Sheet</Text>
					</View>
				</BottomSheetModal>
			</ScrollView>
		</GestureHandlerRootView>
	);
}
