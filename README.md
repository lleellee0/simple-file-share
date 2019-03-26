# Simple File Share

**간단히 파일 하나 상대에서 보내고 싶은데 파일이 너무 큰 경우 경험해 보셨나요?**

- 네이버는 2GB
- 다음은 4GB
- 카카오톡은 300MB
- 텔레그램은 1500MB

나는 큰 파일을 잠깐만 공유해서 상대에게 보내고 싶을 뿐인데 위 서비스 들은 그리 큰 크기를 지원하지 않습니다.

그렇다고 파일을 여러개로 나눠서 보내자니 번거롭고 나누는데 시간이 들기도 하고, 클라우드에 올리자니 클라우드에 올리기 너무 큰 파일도 있고 클라우드는 업로드 하는 시간도 너무 많이 듭니다.

그래서 이 프로그램을 만들었습니다.

[다운로드 링크](https://github.com/lleellee0/simple-file-share/releases/download/v1.1/v1.1.simple-file-share-win32-ia32.zip)


## 사용법

1. 위 링크에서 Simple File Share를 다운로드 받는다.

2. 다운로드가 완료되면 압축을 해제한다.

3. 압축 해제한 폴더에서 simple-file-share.exe를 실행한다.

![img1](https://github.com/lleellee0/images/blob/master/1.png?raw=true)

4. Select a file...을 클릭해 파일을 선택한다.
![img2](https://github.com/lleellee0/images/blob/master/2.png?raw=true)

![img3](https://github.com/lleellee0/images/blob/master/3.png?raw=true)

(여기서 방화벽 설정이 나오면 허용을 눌러주시면 됩니다.)

5. Share link에 표시된 링크를 복사한다.

**만약 192.168.xx.xx 같은 내부 IP를 사용중이면 공유기에서 포트포워딩 설정을 하시기 바랍니다.**

[공유기 포트포워딩](https://www.google.com/search?q=%EA%B3%B5%EC%9C%A0%EA%B8%B0+%ED%8F%AC%ED%8A%B8%ED%8F%AC%EC%9B%8C%EB%94%A9&rlz=1C1SQJL_koKR810KR810&oq=%EA%B3%B5%EC%9C%A0%EA%B8%B0+%ED%8F%AC%ED%8A%B8%ED%8F%AC%EC%9B%8C%EB%94%A9&aqs=chrome..69i57j0l5.2484j1j7&sourceid=chrome&ie=UTF-8)

![img4](https://github.com/lleellee0/images/blob/master/4.png?raw=true)

6. 복사한 링크(IP는 내부아이피가 아닌 포트포워딩 된 외부IP:포트)를 상대에게 보내준다.

7. 상대방이 해당 링크를 클릭하거나 브라우저에 붙여넣으면 다운로드가 시작된다.

![img5](https://github.com/lleellee0/images/blob/master/5.png?raw=true)

![img6](https://github.com/lleellee0/images/blob/master/6.png?raw=true)

8. 다운로드 완료

![img7](https://github.com/lleellee0/images/blob/master/7.png?raw=true)


## 사용법 영상
[![사용법 유튜브 영상](https://github.com/lleellee0/images/blob/master/fileshareuse.png?raw=true)](https://www.youtube.com/watch?v=bUs8SADLI7g)

## 패치로그
#### 19.03.26
- 25548 ~ +300번 까지의 포트를 랜덤하게 사용하도록 수정
- 이미 사용중인 포트일 경우 alert로 알림.



## 참고

- [https://electronjs.org/](https://electronjs.org/) - Electron
- [https://codepen.io/GeoffreyCrofte/pen/HbwcG](https://codepen.io/GeoffreyCrofte/pen/HbwcG) - Flat UI, 파일 선택 UI
- [https://code.i-harness.com/ko-kr/q/37bdc9](https://code.i-harness.com/ko-kr/q/37bdc9) - Node.js IP 가져오기
- [https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) - Node.js Stream
- [https://nodejs.org/api/crypto.html](https://nodejs.org/api/crypto.html) - Node.js Sha1 다이제스트 생성
