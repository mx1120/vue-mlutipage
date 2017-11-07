/**
 * Created by Administrator on 2017/11/7.
 */

//localStorage存储
export const setStore = (name, content) => {
	if(!name) return
	if(typeof content != 'string'){
		content = JSON.stringify(content)
	}
	window.localStorage.setItem(name, content)
}

////localStorage获取
export const getStore = name => {
	if(!name)  return
	return window.localStorage.getItem(name)
}


//localStorage删除
export const removeStore = name => {
	if(!name) return
	window.localStorage.removeItem(name)
}


//设置cookie,默认30天，可传值修改天数
export const setCookie = (name, value, day = 30) => {
	var str = name + "=" + escape(value)
	if(time != null){
		var date = new Date()
		var ms = day * 3600 * 1000 * 24
		date.setTime(data.getItem() + ms)
		str += "; expires=" + date.toGMTString();
	}
	document.cookie = str
}

//获取cookie
export const getCookie = (objName) => {
	var search = objName + "="  ;
	if (document.cookie.length > 0) {
		var offset = document.cookie.indexOf(search);
		if(offset != -1) {
			offset += search.length;
			var end = document.cookie.indexOf(";", offset);
			if(end == -1) end = document.cookie.length;
			return unescape(document.cookie.substring(offset, end));
		}else {
			return '';
		}
	}
}


//删除cooki
export const delCookie = (name) => {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval!=null){
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	}
}

//删除所有cookie
export const clearCookie = () => {
	var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
	if (keys) {
		for (var i = keys.length; i--;) {
			document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
		}
	}
}

export const hasClass = (obj, cls) => {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

export const addClass = (obj, cls) => {
	if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

export const removeClass = (obj, cls)=> {
	if (hasClass(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}