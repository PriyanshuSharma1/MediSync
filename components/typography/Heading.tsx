import { View, Text } from 'react-native';

interface HeadingProps {
	level: number;
	className?: string;
	children?: React.ReactNode;
}

export default function Heading({ level, className, children }: HeadingProps) {
	return (
		<View className='w-full h-full'>
			<Text
				className={'text-xl font-semibold' + ' ' + className}
				role='heading'
				aria-level={level}
			>
				{children}
			</Text>
		</View>
	);
}
