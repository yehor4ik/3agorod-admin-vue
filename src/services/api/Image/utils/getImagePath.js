const domain = process.env.VUE_APP_BASE_URL;

export const getImagePath = (path) => {
	return domain + path;
};
