const urlify = (text) => {
	const urlRegex = new RegExp(/(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,,<>?«»“”‘’]))?/ig);
	// return text.replace(urlRegex, (url) => {
	// 	return `<a href="${url}" target="_blank">${url}</a>`;
	// })
	return urlRegex.test(text)
}
export default urlify