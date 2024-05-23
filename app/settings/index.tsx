import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useState, useRef, useCallback } from 'react';
// @ts-ignore
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: 'white',
	},
	contentContainer: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
		borderTopLeftRadius: 100,
		borderTopRightRadius: 100,
		borderTopColor: 'black',
	},
});

export default function SettingsPage() {
	const [reminder, setReminder] = useState({
		sedentary: {
			enabled: false,
			time: 60,
		},
		water: {
			enabled: false,
			time: 60,
		},
	});

	const updateSedentary = (value: any) => {
		console.log(value);
		setReminder({
			...reminder,
			sedentary: {
				enabled: value === 'on',
				time: reminder.sedentary.time,
			},
		});
	};

	const updateWater = (value: any) => {
		console.log(value);
		setReminder({
			...reminder,
			water: {
				enabled: value === 'on',
				time: reminder.water.time,
			},
		});
	};

	const bottomSheetRef = useRef<BottomSheet>(null);
	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View className='flex items-center w-full h-full bg-white'>
				<View className='w-full h-full px-4 py-2 bg-white md:w-4/5 lg:w-3/5'>
					{/* sedentary reminder */}
					<View className='p-2'>
						<View className='flex flex-row items-center justify-between'>
							<View className=''>
								<Text className='text-lg font-semibold'>
									Sedentary Reminder:
								</Text>
							</View>
							<View>
								<RadioButtonGroup
									containerStyle={{
										display: 'flex',
										flexDirection: 'row',
										gap: 10,
									}}
									selected={reminder.sedentary.enabled ? 'on' : 'off'}
									radioBackground='green'
									onSelected={(value: any) => updateSedentary(value)}
								>
									<RadioButtonItem value='off' label='Off' />
									<RadioButtonItem value='on' label='On' />
								</RadioButtonGroup>
							</View>
						</View>
						<View className='flex flex-row w-full my-2 overflow-hidden border border-gray-300 rounded-lg'>
							<TextInput
								aria-disabled={!reminder.sedentary.enabled}
								editable={reminder.sedentary.enabled}
								placeholder='60'
								value={
									reminder.sedentary.enabled
										? reminder.sedentary.time.toString() == '0'
											? ''
											: reminder.sedentary.time.toString()
										: ''
								}
								onChangeText={(value) => {
									if (value.toString() === '') {
										setReminder({
											...reminder,
											sedentary: {
												enabled: reminder.sedentary.enabled,
												time: value.toString() === '' ? 0 : Number(value),
											},
										});
									}
								}}
								className='w-4/5 p-2.5'
							/>
							<View className='w-1/5 p-2.5 bg-gray-300 '>
								<Text className='text-sm font-semibold text-gray-50'>
									Minutes
								</Text>
							</View>
						</View>
					</View>
					{/* water drinking reminder */}
					<View className='p-2'>
						<View className='flex flex-row items-center justify-between'>
							<View className=''>
								<Text className='text-lg font-semibold'>Water Reminder: </Text>
							</View>
							<View>
								<RadioButtonGroup
									containerStyle={{
										display: 'flex',
										flexDirection: 'row',
										gap: 10,
									}}
									selected={reminder.water.enabled ? 'on' : 'off'}
									radioBackground='green'
									onSelected={(value: any) => updateWater(value)}
								>
									<RadioButtonItem value='off' label='Off' />
									<RadioButtonItem value='on' label='On' />
								</RadioButtonGroup>
							</View>
						</View>
						<View className='flex flex-row w-full my-2 overflow-hidden border border-gray-300 rounded-lg'>
							<TextInput
								aria-disabled={!reminder.water.enabled}
								editable={reminder.water.enabled}
								placeholder='60'
								value={
									reminder.water.enabled
										? reminder.water.time.toString() == '0'
											? ''
											: reminder.water.time.toString()
										: ''
								}
								onChangeText={(value) => {
									if (value.toString() === '') {
										setReminder({
											...reminder,
											water: {
												enabled: reminder.water.enabled,
												time: value.toString() === '' ? 0 : Number(value),
											},
										});
									}
								}}
								className='w-4/5 p-2.5 border-r border-gray-300'
							/>
							<View className='w-1/5 p-2.5 bg-gray-400 '>
								<Text className='text-sm font-semibold text-gray-50'>
									Minutes
								</Text>
							</View>
						</View>
					</View>
					{/* group of button */}
					<View className='flex flex-row items-center justify-end gap-2'>
						<View className='px-2.5 py-1.5 bg-blue-400 rounded-lg'>
							<Text className='text-lg font-semibold text-white'>Save</Text>
						</View>
						<View className='px-2 py-1'>
							<Text className=''>Cancel</Text>
						</View>
					</View>
					{/* bottom sheet */}
					<View style={styles.container}>
						<BottomSheet
							snapPoints={['50%', '60%', '70%']}
							ref={bottomSheetRef}
							onChange={handleSheetChanges}
						>
							<View>
								<Text>Awesome 🎉</Text>
							</View>
						</BottomSheet>
					</View>
				</View>
			</View>
		</GestureHandlerRootView>
	);
}
