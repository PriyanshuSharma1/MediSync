import { login } from '@/apis/auth';
import useSession from '@/hooks/useSession';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function LoginForm() {
	// use session
	const session = useSession();
	// State variables for inputs
	const [identity, setIdentity] = useState('manish@gmail.com');
	const [password, setPassword] = useState('manish123');

	const onSubmit = () => {
		// Access identity and password directly from state
		console.log('submitted');
		login({ identity, password })
			.then((data) => {
				console.log(data.data);
				session.saveSession(data.data);
			})
			.catch((err) => console.log(err));
		// Submit logic here
	};

	// if session exist
	useEffect(() => {
		if (session.session) {
			// Redirect to home page
			console.log('Redirect to home page');
			router.push('/(app)/');
		}
	}, [session.session]);

	return (
		<View className='flex items-center justify-center p-6 bg-white rounded-lg'>
			<View>
				<Text>{JSON.stringify(session.session)}</Text>
			</View>
			<View className='w-full mb-4'>
				<Text className='text-sm font-semibold'>Identity</Text>
				<TextInput
					editable={true}
					autoCapitalize='none'
					onChangeText={setIdentity}
					value={identity}
					className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
				/>
			</View>
			<View className='w-full mb-4'>
				<Text className='text-sm font-semibold'>Password</Text>
				<TextInput
					secureTextEntry={true}
					editable={true}
					autoCapitalize='none'
					onChangeText={setPassword}
					value={password}
					className='p-3 bg-gray-200 border border-gray-400 rounded-lg'
				/>
			</View>

			<View className='flex flex-row justify-end gap-4'>
				<Pressable className='p-4 bg-blue-300 rounded-lg' onPress={onSubmit}>
					<Text>Log in</Text>
				</Pressable>
			</View>
		</View>
	);
}
