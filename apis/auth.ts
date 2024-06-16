import axios from '@/utils/axios';

const login = ({
	identity,
	password,
}: {
	identity: string;
	password: string;
}) => axios.post('/auth/signin', { identity, password });
const signup = ({
	firstname,
	lastname,
	email,
	password,
}: {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
}) =>
	axios.post('/auth/signup', {
		firstname,
		lastname,
		email,
		password,
	});

export { login, signup };
