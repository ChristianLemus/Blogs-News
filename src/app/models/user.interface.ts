export interface UserRegister {
	nombre: string;
	apellido: string;
	correo: string;
	password: string;
}

export interface UserLogin {
	username: string;
	password: string;
}

export interface UserResponse {
	token: string;
	nameuser: string;
	surname: string;
	url_photo_profile: string;
	change_password_necesary: number;
	answer: string;
}
