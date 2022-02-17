export function getWindowHeight(){
	let height = 0;
	uni.getSystemInfo({
		success:(res)=>{
			height = res.windowHeight
		}
	})
	return height
}
