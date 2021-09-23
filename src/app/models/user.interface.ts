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

export interface BlogsNewsResponse {
	id: number;
	title: string;
	author: string;
	body: string;
	url_portada: string;
	external_cover: string;
	id_categories: number;
	tile_categorie: string;
	creation_date: string;
	update_date: string;
}
