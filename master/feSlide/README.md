feSlide 1.6
===========
해당 플러그인은 "슬라이드" 형식의 UI를 HTML, CSS, jQuery를 사용하여 유연하게 스타일링 할 수 있도록 함을 목적으로 합니다.<br>

- 배포 파일: [feSlide.html](https://github.com/moya85/cidow/blob/master/feSlide/feSlide.html)
- 예제 파일: [_feSlide.html](https://github.com/moya85/cidow/blob/master/feSlide/_feSlide.html)

# Notice
- 두개 이상의 아이템이 보여질 수 있도록 옵션 추가 및 전체 코드 확인(예제 7, 8번 추가)
- 스와이프 이벤트 오류(갤럭시4) 수정 반영 1.5
- 슬라이드 높이를 불러오지 못하는 경우를 대응한 1.3 ~ 1.4 버전 배포
- 반응형 디자인 대응을 위한 1.2 버전이 배포 되었습니다.(예제 6번 추가)
- 모바일 대응을 위한 1.1 버전이 배포 되었습니다.(예제 4, 5번)
- 1.0 버전이 배포 되었습니다. 테스트 후 피드백 부탁드립니다.
- 본인의 스타일 파일을 작성하여 공유해주세요!

## Optioins: default value
- **vertical**: false, // 세로 슬라이드 여부 지정, **true|false** 중 택
- **naviBtn**: true, // 네비게이션 표시 여부 지정, **true|false** 중 택
- **disableNavi**: false, // 처음, 마지막 네비게이션 자동 숨김 지정, **true|false** 중 택
- **pagingBtn**: true, // 페이징 표시 여부 지정, **true|false** 중 택
- **circular**: true, // 페이징을 사용한 슬라이드 이동시 중간 슬라이드 노출 여부 지정, **true|false** 중 택
- **swipeEvent**: false, // Swipe 이벤트 지원 여부 지정, **true|false** 중 택
- **fixedLayout**: true, // 고정된 레이아웃 여부 지정, **true|false** 중 택
- **autoPlay**: false, // 페이지 로딩시 자동 롤링 지정, **true|false** 중 택
- **aniSpeed**: 1000, // 슬라이드 속도 지정, **숫자:정수**
- **playSpeed**: 5000, // 자동 롤링 시간 지정, **숫자:정수**
- **visibleItem**: 1, // 화면(뷰포트)에 보여지는 아이템 갯수 지정, **숫자:정수**
- **scrollItem**: 1, // 슬라이드 이동시 이동할 아이템 갯수 지정, **숫자:정수**
- **easing**: "swing", // jQuery Easing 을 사용할 경우 Easing Type 지정, **문자**
- **currentClass**: "current", // 활성화된 슬라이드 및 페이징에 추가되는 class 지정, **문자**
- **itemIdPrefix**: 'feSlItem', // 슬라이드 아이템에 추가되는 id 지정, **문자**
- **pagingTxt**: 'Slide', // 페이징에 표시될 텍스트 지정, **문자**
- **prevBtnTxt**: 'Prev', // 이전버튼 텍스트 지정, **문자**
- **autoBtnTxt**: 'Auto', // 자동 롤링 버튼 텍스트 지정, **문자**
- **stopBtnTxt**: 'Stop', // 정지 버튼 텍스트 지정, **문자**
- **nextBtnTxt**: 'Next' // 다음 버튼 텍스트 지정, **문자**

```javascript
vertical: false, // Vertical slide(true|false)
naviBtn: true, // Navigation visibility(true|false)
disableNavi: false, // Disable prev, next button(true|false)
pagingBtn: true, // Pagination visibility(true|false)
circular: true, // Circular scroll style(true|false)
swipeEvent: false, // Swipe event in devie(true|false)
fixedLayout: true, // Fixed layout(true|false)
autoPlay: false, // Auto slide(true|false)
aniSpeed: 1000, // Slide speed(Number:Integers)
playSpeed: 5000, // Auto play speed(Number:Integers)
visibleItem: 1, // Number of visible elements(Number:Integers)
scrollItem: 1, // Scrolling step(Number:Integers)
easing: "swing", // jQuery easing effect
currentClass: "current", // Current class(String)
itemIdPrefix: 'feSlItem', // Prefix text for bookmark(String)
pagingTxt: 'Slide', // Pagination anchor text(String)
prevBtnTxt: 'Prev', // Prev button text(String)
autoBtnTxt: 'Auto', // Auto button text(String)
stopBtnTxt: 'Stop', // Stop button text(String)
nextBtnTxt: 'Next' // Next button text(String)
```

### disableNavi: Disable Prev, Next button
더이상 슬라이드가 안될경우(처음, 마지막 아이템) 해당 버튼이 `disabled` 로 변경되도록 하는 옵션입니다.<br>
해당 버튼에는 `class="disableBtn" disabled="disabled"` 의 속성이 추가됩니다.

### visibleItem: Number of visible items
화면에 보여지는 `.slideItem` 의 갯수를 설정하는 옵션입니다.<br>
`.feSlMask` 에 표시되는 모든 아이템은 `currentClass` 가 지정되며,<br>
해당 옵션의 값이 기본값인 **1** 이 아닐 경우 사용자 옵션이 아래와 같이 강제 설정 됩니다.

- **pagingBtn**: true
- **circular**: false

### scrollItem: Scrolling step
한번에 슬라이드 되는 갯수를 설정 합니다.<br>
`disableNavi, visibleItem, scrollItem` 의 옵션은 슬라이드 모양에 많은 영향을 줍니다. 적절한 값을 설정해주세요.

### circular: Slide type
**슬라이드 반복 설정이 아닙니다.**<br>
페이지네이션을 사용하여 아이템을 이동 할 경우 중간 아이템을 표시할지를 설정하는 옵션입니다.

### fixedLayout: Layout type
반응형 디자인 대응을 위해 1.2 버전부터 `fixedLayout` 옵션을 추가하였습니다.<br>
`.feSlMask` 의 넓이와 높이는 첫번째 `.slideItem` 의 값이 적용되며,<br>
해당 옵션을 사용 할 경우 사용자 옵션이 아래와 같이 강제 설정 됩니다.

- **circular**: true 
- **visibleItem**: 1

### swipeEvent: for Mobile device
모바일 대응을 위해 1.1 버전부터 `swipeEvent` 옵션을 추가하였습니다.<br>
해당 옵션을 사용하기 위해선 `jquery.touchSwipe.min.js` 파일이 필요합니다.(사용버전: 1.6)<br>
자세한 정보는 아래 링크를 참조하세요.

- [jquery.touchSwipe.min.js](https://github.com/moya85/cidow/blob/master/feSlide/jquery.touchSwipe.min.js)
- **TouchSwipe Jquery Plugin Github:** [TouchSwipe Jquery Plugin](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin)

## HTML Style(Default)
feSlide의 구현을 위한 기본 마크업은 아래와 같이 작성합니다.<br>
플러그인 파일이 로딩 되지 않았을 경우 레이아웃 틀어지는 현상을 방지를 위해 `.feSlMask, .feSlWrap` 를 직접 추가 할 수 있습니다.<br>
슬라이드 아이템이 될 각 요소에 반드시 `.feSlItem` 를 선언합니다.

### Markup type A
```html
<div>
	<div class="feSItem"></div>
	<div class="feSItem"></div>
	<p class="feSItem"></p>
	<img class="feSlItem" src="" alt="">
	<a class="feSlItem" href="#"></a>
</div>
```

### Markup type B
```html
<div>
	<div class="feSlMask">
		<div class="feSlWrap">
			<div class="feSlItem"></div>
			<div class="feSlItem"></div>
			<div class="feSlItem"></div>
		</div>
	</div>
</div>
```

## CSS Style(Default)
feSlide의 기본 스타일은 아래와 같이 기능 구현을 위한 기본 코드만을 포함하고 있습니다.<br>
CSS와 Plugin Option 변경을 통해 여러 스타일 구현이 가능합니다.
```css
/* feSlide common */
.feSlMask {
	overflow: auto;
	position: relative;
}
.feSlWrap {
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 0;
}
.feSlItem {
	float: left;
	width: 400px;
	height: 200px;
	background-color: #fff;
}
.feSlNavi, .feSlNavi .btnStop,
.feSlPaging {display: none;}
```

## CSS Class
feSlide 의 기본 스타일 적용을 위해 일부 태그에 class를 할당하며 **'feSl'** 접두사를 사용합니다.

- Slide: **.feSlide**
- Viewport: **.feSlMask**
- Wrapper: **.feSlWrap**
- Slide Item: **.feSlItem**
- Pagination: **.feSlPaging**
- Navigation: **.feSlNavi**
 - Prev button: **.btnPrev**
 - Auto button: **.btnAuto**
 - Stop button: **.btnStop**
 - Next button: **.btnNext**
 - Disabled button: **.disableBtn**

## Version History
- 1.6: 두개 이상의 아이템이 보여지는 경우 추가
- 1.5: 갤럭시4 스와이프 이벤트 테스트 오류 수정
- 1.4: 1.3 버전 코드 정리
- 1.3: 높이를 불러오지 못하는 경우 대응
- 1.2: 반응형 디자인 대응
- 1.1: 터치 이벤트 대응
- 1.0: 테스트를 위한 사내 배포