# ☕ Happy Bareley Tea



## Single plus
4명의 프론트직군이 간단한 플랫폼을 활용한 홈페이지 웹 구성을 목표로<br />
클론 웹 구현으로 협력시에 git 사용법을 익힘을 목표로 하고 있습니다.<br />
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

# 협업 내용

프론트 엔드로만 구성된 협업 프로젝트이기 때문에 백 서버 및 데이터는 파이어 베이스를 통해 구축을 하였으며, **파이어베이스**에 있는 로그인 회원가입 및 데이터를 불러오는 작업을 진행 하였습니다.

하나의 팀원의 레파지토리에서 작업을 하되 나머지 팀원들이 자기의 git에 fork를 통하여 pull request로 메인 레파지토리에 요청을 보내어 파일을 관리하도록 하였습니다.

또한 pull request 할때 reviewer 기능을 추가하도록 하였으나, 이 부분은 서로의 시간이 맞지 않는 관계상 스킵을 하여 관리 하였으며 꾸준한 대화를 통해 기능적인 부분과 UI/UX 부분들을 맞춰 나아갔습니다.

프로젝트를 처음 접해보기에 스타일 가이드 및 컨벤션을 맞추도록 하였으나 쉽지 않아, 각자의 변수 네이밍 및 스타일을 갖추어 제작하였으나, 공통적인 common 부분들은 맞추도록 노력했습니다.

![Untitled 1](https://user-images.githubusercontent.com/34502254/160141212-98bdf169-ffcd-400a-bc9c-563f0db70102.png)

해당 Login Join 으로 로그인 및 회원가입을 할수 있으며,

![Untitled 2](https://user-images.githubusercontent.com/34502254/160141230-2e3e7023-db76-43f3-a334-f50c81b07286.png)

회원 가입 성공시 로그아웃과 마이페이지로 변경이 됩니다.

- 로그인이 되지 않았을때 마이페이지로 들어가게 된다면, 로그인 상태 값을 확인하여 메인으로 이동하게 하는 기능을 추가하였습니다.
- 로그인시 이메일과 비밀번호가 옳바르지 않거나 없는 이메일이 없는 이메일 이라면 경고창으로 해당 하는 아이디가 없도록 표시를 하도록 하였습니다.
- 회원가입시 중복 가입을 막기 위해 고유 이메일이 있는지 확인하는 검증을 파이어베이스로 기능 구현을 하였습니다.
- 리덕스를 이용해 상태관리를 하였습니다. 유저의 이메일이 접속이 되었다는것을 모든 컴포넌트에서 사용하기위해 provider를 통해 모든 컴포넌트에서 사용할 수 있도록 처리 하였으며, payload 와 action.state 및 type을 지정햐여 redux를 사용하는 방법을 배우게 된 계기가 되었습니다.

![single_pluse_1](https://user-images.githubusercontent.com/34502254/160141256-120cfaa0-4f9e-48ae-a803-334ef6d5c3ad.gif)

- 카테고리를 클릭하면 type 일치한 이미지를 불러오게 됩니다.
    - 미숙한 점으로는 해당 기능을 버튼으로 구사하였기에 , location 값에 query 주소값이 포함이 되지 않는 점으로 이 부분은 추후 route 기능을 통해 다시 재작업할 예정입니다.
