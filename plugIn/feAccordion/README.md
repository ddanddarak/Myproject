feAccordion 1.1
===============

해당 플러그인은 "아코디언" 형식의 UI를 HTML, CSS, jQuery를 사용하여 유연하게 스타일링 할 수 있도록 함을 목적으로 합니다.

- 배포 파일: [feAccordion.html](https://github.com/moya85/cidow/blob/master/feAccordion/feAccordion.html) / [Preview](http://code.codeisart.co.kr/feAccordion.html)
- 예제 파일: [_feAccordion.html](https://github.com/moya85/cidow/blob/master/feAccordion/_feAccordion.html) / [Preview](http://code.codeisart.co.kr/_feAccordion.html)

# Notice
- **본인의 스타일 파일을 작성하여 공유해주세요!**
- 1.0 버전이 배포되었습니다. 테스트 후 피드백 부탁드립니다.

## Options
- **menuElem**: 'h2', // 아코디언의 메뉴로 사용할 엘리먼트를 **엘리먼트|셀렉터** 로 지정
- **currentClass**: 'current', // 활성화된 메뉴에 추가되는 class를 **문자** 로 지정
- **aniDirection**: 'horizontal', // 가로, 세로모드 지정, **horizontal|vertical** 중 택
- **fixedLayout**: true, // 고정된 레이아웃 여부 지정, **true|false** 중 택
- **aniSpeed**: 500, // 에니메이션 속도를 **숫자** 으로 지정
- **aniEasing**: 'swing', // jQuery Easing 을 사용할 경우 Easing Type 지정, **문자**
- **startPannel**: 1 // 페이지 로드시 표시되는 패널 위치 지정, **숫자**

```javascript
menuElem: 'h2', // Menu element(Element|Selector)
currentClass: 'current', // Current class(String)
aniDirection: 'horizontal', // Direction(horizontal|vertical)
fixedLayout: true, // Fixed layout(true|false)
aniSpeed: 500, // Animate speed(Number)
aniEasing: 'swing', // jQuery easing effect
startPannel: 1 // Start pannel index(Number)
```

## CSS Style(Default)
feAccordion 의 기본 스타일은 아래와 같이 기능 구현을 위한 기본 코드만을 포함하고 있습니다.<br>
CSS와 Pligin Option 변경을 통해 여러 스타일 구현이 가능합니다.
```css
/* feAccordion common */
.feAcHorizon, .feAcVertical {overflow: hidden;}
.feAcMenu, .feAcContainer {
	overflow: hidden;
	margin: 0;
	padding: 0;
}
.feAcContent {overflow: hidden;}
.feAcMenu:hover {cursor: pointer;}
.feAcHorizon .feAcMenu,
.feAcHorizon .feAcContainer {
	float: left;
	width: 100%;
	height: 100%;
}
.feAcVertical .feAcMenu,
.feAcVertical .feAcContainer {width: 100%;}
/* feAccordion default style */
.feAcHorizon {
	width: 500px;
	height: 300px;
}
.feAcHorizon .feAcMenu {width: 50px;}
.feAcVertical {
	width: 300px;
	height: 500px;
}
```

## CSS Class
feAccordion 의 기본 스타일 적용을 위해 일부 태그에 class를 할당하며 **'feAc'** 라는 접두사를 사용합니다.

- Menu: **.feAcMenu**
- Container: **.feAcContainer**
- Content: **.feAcContent**
- Horizontal: **.feAcHorizon**
- Vertical: **.feAcVertical**

## Version History
- 1.1: 아웃라인 스타일 리셋 부분 수정
- 1.0: 테스트를 위한 사내 배포
