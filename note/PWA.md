# PWA
> Progressive Web Applicationn (점진적 웹앱)   
> 앱을 향해 조금씩 앞으로 나아가는 웹앱   

- 네이티브 앱과 똑같은 사용자 경험을 제공하는 것이 궁극적인 목표
- 네이티브앱 + 모바일 웹앱 + 하이브리드 앱 => 프로그레시브 웹앱
- 웹에서 다운받게 되면, 모바일 브라우저가 이 앱을 설치
	-  설치한다하면, 네이티브앱처럼 설치가 된다.
		- 브라우저가 지원하는 기술, 사파리, 크롬 지원함
		- 네이티브 앱을 만들 필요가 없어진다.

### 특징
- 서비스 워커(Service Worker)를 이용한 백그라운드 작업
	- 웹 브라우저의 기능으로 웹 페이지와는 분리되어 항상 실행되는 백그라운드 프로그램

<img src="https://user-images.githubusercontent.com/47289479/140678468-189e24ca-a155-411e-a55d-193218d679d2.png"/>

- 매니페스트(manifest.json) 파일로 앱 정보 제공
	- 앱 소개 정보와 기본 설정을 담은 JSON 파일
- HTTPS로 다운로드
	- 전송 프로토콜 암호화를 제공하는 통신 규약
- 다양한 기기에 설치 가능
	- 홈 화면에 추가 기능 제공
- 푸시알림 기능 제공
	- 앱을 실행하지 않아도 알림 메시지 수신 가능

## 🎠Workbox
> PWA의 캐싱(caching) 기능을 편하게 구현할 수 있도록 지원되는 표준 PWA 라이브러리
 
<img src="https://user-images.githubusercontent.com/47289479/140687859-4fbf87c6-6f77-41f5-b9d4-56bf81fc3144.png" width=400/>

-	PWA 관련 파일 빌드시 PWA 관련 파일을 생성하는 : manifest.json 파일, service-worker.js 파일
- 기본적으로 캐싱되는 파일
	- index.html
	- *.js
	- *.css
	- *.jpg
	- manifest.json
	- robots.txt
- 두가지 사용 방식
	- GenerateSW (기본 방식)
		- 간단한 설정으로 PWA 관련 파일을 자동으로 생성하는 방식
	- InjectManifest
		-  PWA 관련 파일을 개발자가 직접 작성하는 방식

### GenerateSW 

#### 사전 캐시(pre-cache)
> 애플리케이션 실행 전에 캐시되는 것을 말한다.
``` javascript
workboxOptions: {
   // 프리캐시(pre-cache)할 파일 지정
  include: [
	/^index\.html$/,
	/\.css$/,
	/\.js$/,
	/^manifest\.json$/,
	/\.svg$/,
  ],
  // exclude는 반드시 기입해야 정상적으로 동작함.
  exclude: [],
}
```
<hr/>

#### 런타임 캐시(runtime-cache)
> 애플리케이션 실행 중에 캐시되는 것을 말한다.
- 주로 이미지 캐싱을 담당한다.
- handler
	- networkFirst
		- 우선 인터넷 다운로드, 인터넷 접속이 안될 경우 캐시 사용
		-	항상 새로운 내용이 필요할 때 적합
	- cacheFirst
		- 우선 캐시 사용, 캐시에 없을 경우 인터넷 다운로드
		- 폰트, 아이콘, 정적 이미지처럼 바뀌지 않는 내용에 적합 
	- staleWhileRevalidate 
		- 우선 캐시 사용, 동시에 인터넷 다운로드하여 캐시와 비교, 다르면 캐시 업데이트
		- 업데이트가 가끔씩 발생하는 내용일 때 적합(사용자 계정의 아바타 이미지)
	- networkOnly
		- 무조건 인터넷에서 다운로드
		- 내용이 빈번이 변경되는 내용일 때 적합
	- cacheOnly 
		- 무조건 캐시 사용
		- 정적 파일만으로 실행되는 오프라인 작업일 때 적합


``` javascript
workboxOptions: {
  runtimeCaching: [
	{
	  urlPattern: /\.jpg$/,
	  handler: "cacheFirst",
	  options: {
		cacheName: "jpg-cache",
		expiration: {
		  maxEntries: 5, // 총 파일 5개까지 캐시
		  maxAgeSeconds: 60 * 60 * 24, // 1일 캐시
		},
	  },
	},
	{
	  urlPattern: /\.png$/,
	  handler: "cacheFirst",
	  options: {
		cacheName: "png-cache",
		expiration: {
		  maxEntries: 5, // 총 파일 5개까지 캐시
		  maxAgeSeconds: 60 * 60 * 24, // 1일 캐시
		},
	  },
	 },
   ],
  }