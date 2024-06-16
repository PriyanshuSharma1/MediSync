import { LineChart } from 'react-native-gifted-charts';
import { View } from 'react-native';
import Heading from '@/components/typography/Heading';
import ContainerizedScrollView from '@/components/typography/ContainerizedScrollView';

const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

export default function ReportPage() {
	return (
		<ContainerizedScrollView>
			<View className=''>
				<Heading level={2}>Report</Heading>
				<LineChart data={data} />
			</View>
		</ContainerizedScrollView>
	);
}
