function Header(){
    var dom = document.getElementById('root');
    var header = document.createElement('div');
    header.innerText = 'header'
    dom.appendChild(header);
}
// ES Moudule 导出模块
// export default Header;
module.exports = Header;