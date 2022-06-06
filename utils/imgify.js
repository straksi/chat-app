const imgify = (text) => {
	const urlRegex = new RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i);
	return urlRegex.test(text)
}
export default imgify