/**
 * Created by Administrator on 2017/11/7.
 */
export default function searchToMap(){
	let search = location.search.slice(1);
	let _array =search.split('&');
	let map = {};
	_array.forEach(str => {
		let _str = str.split('=');
		map[_str[0]] = _str[1];
	});
	return map;
}
