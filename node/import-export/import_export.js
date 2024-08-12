let name = "wangdd"
let web = "ctra.top"

let getWeb = () => {
    return "www.ctra.top"
}
// 普通导出
export { name, web, getWeb }

// 将对象整体导出，关键字： default 
export default { name, web, getWeb }