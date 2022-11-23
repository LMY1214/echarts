// 监控
let choseTab_ = document.getElementsByClassName('choseTab');
let showTab_ = document.getElementsByClassName('showTab');
for (var i = 0; i < choseTab_.length; i++) {
    choseTab_[i].setAttribute('index', i)
    choseTab_[i].onclick = function () {
        for (var j = 0; j < choseTab_.length; j++) {
            var index_ = this.getAttribute('index')
            choseTab_[j].classList.remove('active');
            choseTab_[index_].classList.add('active');
        }
        for (var k = 0; k < showTab_.length; k++) {
            showTab_[k].style.display = 'none';
            showTab_[index_].style.display = 'block';

        }
    }
}