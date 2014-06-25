feTab  1.0
===============
 해당 플러그인은 "탭" 형식의 UI를 HTML, CSS, jQuery를 사용하여 유연하게 스타일링 할 수 있도록 함을 목적으로 합니다.<br>
 **!Important: 1.0버전은 탭메뉴가 상단 가로로 구성된 경우에만 적용 가능합니다.(좌/우 구성일 경우 사용 불가)**

- 배포 파일: [feTab.html](https://github.com/moya85/cidow/blob/master/feTab/feTab.html) / [Preview](http://code.codeisart.co.kr/feTab.html)
- 예제 파일: [_feTab.html](https://github.com/moya85/cidow/blob/master/feTab/_feTab.html) / [Preview](http://code.codeisart.co.kr/_feTab.html)

# Notice
- **본인의 스타일 파일을 작성하여 공유해주세요!**
- 1.0 버전이 배포되었습니다. 테스트 후 피드백 부탁드립니다.

## Optioins
- **menuElem**: 'h2', // 탭 메뉴로 사용할 엘리먼트를 **엘리먼트|셀렉터**로 지정
- **eventString**: 'click focus', // 호출 이벤트를 **문자**로 지정('click' or 'click focus')
- **currentClass**: 'current', // 활성화된 메뉴에 추가되는 class를 **문자** 로 지정
- **startPannel**: 1 // 페이지 로드시 표시되는 패널 위치 지정, **숫자**

```javascript
menuElem: 'h2', //Menu element(Element|Selector)
eventString: 'click focus', // Events(String)
currentClass: 'current', // Current class(String)
startPannel: 1 // Start pannel index(Number)
```

## CSS Style(Default)
feTab의 기본 스타일은 아래와 같이 기능 구현을 위한 기본 코드만을 포함하고 있습니다.<br>
CSS와 Plugin Option 변경을 통해 여러 스타일 구현이 가능합니다.
```css
/* feTab common */
.feTab {
	overflow: hidden;
	position: relative;
}
.feTabMenu {
	float: left;
	margin: 0;
}
.feTabMenu:hover {cursor: pointer;}
.feTabContent {
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 0;
}
```

## CSS Class
feTab 의 기본 스타일 적용을 위해 일부 태그에 class를 할당하며 **'feTab'** 라는 접두사를 사용합니다.

- Menu: **.feTabMenu**
- Content: **.feTabContent**

## Version History
- 1.0: 테스트를 위한 사내 배포
