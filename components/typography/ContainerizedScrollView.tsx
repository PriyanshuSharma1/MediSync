import { ScrollView, View } from 'react-native';

interface ContainerizedScrollViewProps {
	children: React.ReactNode;
}

export default function ContainerizedScrollView(
	props: ContainerizedScrollViewProps
) {
	return (
		<ScrollView
			contentContainerStyle={{
				// flex: 1,
				justifyContent: 'center',
			}}
			className='w-full h-full bg-white'
		>
			<View className='w-full h-full px-4 py-2 md:w-4/5 lg:w-3/5'>
				{props.children}
			</View>
		</ScrollView>
	);
}
