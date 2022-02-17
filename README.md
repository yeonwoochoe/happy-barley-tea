# ☕ Happy Bareley Tea



## Single plus
4명의 프론트직군이 간단한 플랫폼을 활용한 홈페이지 웹 구성을 목표로
클론 웹 구현으로 협력시에 git 사용법을 익힘을 목표로 하고 있습니다.
https://m.thesingle.co.kr/

## 🏠 Members

 <table>
      <thead>
        <tr>
          <th>상민</th>
          <th>슬아</th>
          <th>연우</th>
          <th>은비</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">
            <a href="https://avatars.githubusercontent.com/u/34502254?v=4">
              <img
                width="100"
                height="100"
                src="https://avatars.githubusercontent.com/u/34502254?v=4"
                alt="profile"
              />
            </a>
          </td>
          <td align="center">
            <a href="https://avatars.githubusercontent.com/u/89890213?v=4">
              <img
                width="100"
                height="100"
                src="https://avatars.githubusercontent.com/u/89890213?v=4"
                alt="profile"
              />
            </a>
          </td>
          <td align="center">
            <a href="https://avatars.githubusercontent.com/u/89890240?v=4">
              <img
                width="100"
                height="100"
                src="https://avatars.githubusercontent.com/u/89890240?v=4"
                alt="profile"
              />
            </a>
          </td>
          <td align="center">
            <a href="https://avatars.githubusercontent.com/u/89890390?v=4">
              <img
                width="100"
                height="100"
                src="https://avatars.githubusercontent.com/u/89890390?v=4"
                alt="profile"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center"><a href="https://github.com/advanced-rising">risingcore</a></td>
          <td align="center"><a href="https://github.com/sakang07">sak</a></td>
          <td align="center"><a href="https://github.com/yeonwoochoe">yeonwoo</a></td>
          <td align="center"><a href="https://github.com/mittwoch01">mittwoch</a></td>
        </tr>
      </tbody>
    </table>

---

## 🛠 Git Commit Template

---

- **feat** : 새로운 기능을 추가할 경우
- **fix** : 버그를 고친 경우
- **design** : CSS 등 사용자 UI 디자인 변경
- **style** : 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- **refactor** : 프로덕션 코드 리팩토링
- **comment** : 필요한 주석 추가 및 변경
- **docs** : 문서를 수정한 경우
- **test** : 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
- **chore** : 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
- **rename** : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- **remove** : 파일을 삭제하는 작업만 수행한 경우

## 📁 Directory

---

### 📁  public

- 📁  **assets** : image 등이 들어가는 폴더.
- 📁  **data** : json 파일 등의 data를 모아둔 폴더.

### 📁  src

- 📁  **components** : 작은 단위의 컴포넌트가 모인 폴더.
  - 📁  **common** : 여러 번 재사용되는 컴포넌트를 모아둔 폴더.
  - 📁  **page 이름과 동일한 directory** : 특정 page에서만 사용되는 컴포넌트를 모아둔 폴더.
- 📁  **pages** : 독립된 page 컴포넌트.
- 📁  **router** : router-dom 폴더.
  - Router.js
- 📁  **layout** : layout 컴포넌트, header, footer 등이 모인 폴더.
- 📁  **utils** : 상수나 공통 함수 등을 담는 폴더.
- **📁  store** : redux나 context 관련 전역 변수를 담은 폴더.
- **GlobalStyle.js** : reset.css
- **theme.js** : common.css

### 이벤트 핸들러 props

- `on*` 접두사 + 동사의 형태로 작성.
- _onClick, onClose, onSubmit..._

### 이벤트 핸들러

- `*handler` 동사 + 접미사의 형태로 작성.
- _isValidHandler, isLoginEnteredHandler..._

```jsx
<Component **onClick**={**isValidHandler**} />
```
