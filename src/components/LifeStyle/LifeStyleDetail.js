import React, { useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { WrapperSection, SectionWrapper, WrapperDiv } from "../common/Common";

const DUMMY_DATA = [
  {
    id: 0,

    type: "image",
    title: "통신업계의 구독 대통합",
    subTitle:
      "이동통신 3사가 일제히 구독을 주목하기 시작했다. 이들이 내놓은 통합형 구독 서비스는 성공적으로 안착할 수 있을까?",
    auth: "BY 에디터 송혜민 | 2022.02.25",
    quote: [
      {
        quote1: {
          content: `‘고객 확보’라는 구독의 기본 목적은 변하지 않는다. 나아가 통신사의 구독은 해지 방어를 위한 결정적 수단으로 쓰인다. 이동통신 서비스가 어느 정도 수준에 이른 후 소비자 입장에선 어느 회사를 선택하더라도 통화, 인터넷 품질에 큰 차이가 없다. 언제든지 더 나은 혜택을 주는 곳을 찾아 가버릴 수 있다는 말이다. 경쟁사보다 더 특별한 소비자 혜택을 줘야 가입을 유지시킬 수 있고, 사업 지속이 가능해진다. 
  
        상황이 이렇다 보니 다양한 라이프스타일을 가진 사용자들의 필요에 맞는 서비스를 마련해야 한다. OTT, F&B, 음악, 쇼핑 등 분야를 막론하고 핫한 브랜드, 파격 혜택을 내세우는 이유다. 한편, 이제는 통합형 구독을 제공할 환경이 마련됐다는 점도 주요한 이유로 들 수 있다. 그동안 쇼핑몰, 음원 스트리밍플랫폼, IPTV 등의 서비스를 인수, 합병, 론칭하면서 몸집을 키워온 이동통신사가 이를 활용한 새로운 모델을 꾀하는 건 어쩌면 자연스러운 현상이다. 
        
        하지만 원래의 멤버십 서비스와 크게 다르지 않거나 통합이라 하기엔 제휴사의 범위가 협소하다는 한계도 존재한다. 그런 의미에서 T우주의 등장은 눈에 띈다. 기존 고객만을 대상으로 하지 않고, 해외 플랫폼까지 제휴했기 때문이다. T우주 론칭 행사에서 유영상 SKT 대표는 “고객과 서비스 사업자는 구독 방식의 서비스에 대한 공통된 니즈가 있다. 30여 년의 통신 사업, 수많은 유통 채널과 고객 경험의 노하우를 가진 SKT라면 소비자와 공급자를 잘 연결시킬 수 있을 거라 생각한다. 커머스 플랫폼으로의 발전 가능성도 염두에 둔다. 
        
        구독 서비스는 새로운 성장 동력이라는 의미가 있다”고 구독이라는 매개체를 선택한 이유를 설명했다. 또한 경쟁사와의 차별점도 강조했다. 첫 번째로 내세운 것이 상품의 다양성과 파괴력이다. 훨씬 더 폭넓은 통합 생태계를 구축했다는 말이다. T우주는 아마존, 구글 같은 글로벌 빅브랜드는 물론이고 11번가, CJ 등 국내 대기업, 꾸까, 톤82 등 성장 잠재력 높은 스타트업까지 아우른다. 이들을 다양한 방식으로 조합해 고객 혜택을 최대화하겠다는 목표다. 
        
        예희강 SKT 크리에이티브 커뮤니케이션 그룹장은 이를 ‘상생의 커뮤니케이션’이라고 표현했다. ‘모두의 유니버스’라는 캐치프레이즈에 맞춰 소비자는 물론 공급자까지 T우주 생태계 안에서 원하는 혜택과 가치를 얻도록 하겠다는 것이다. T우주가 론칭 3개월 만에 이룩한 100만 명이라는 수치는 통신업계에서 서비스 대중화를 평가하는 중요한 지표다. 물론 성공적인 안착이라고 보기에는 아직 이르다는 시선도 존재한다. 이후에도 소비자들이 얼마만큼 실질적인 효용감을 느끼고, 가입을 유지하는지는 두고 봐야 할 문제다. 
        
        과연 통신업계가 펼쳐 보인 새로운 우주는 구독시장에 안정적으로 자리 잡을 수 있을까? 또 어떤 형태의 구독 서비스가 소비자와의 관계를 공고히 하는 데 더 효과적일까? 이제 막 기지개를 켜기 시작한 통신사 구독 전략을 판단하기는 시기상조다. 하지만 소비자들이 언제나 가장 이득이 되는 선택을 한다는 점만큼은 분명하다. 
        
        그렇다면 이 경쟁을 업계 전문가들은 어떻게 바라보고 있을까? SK컴즈 싸이월드 본부장, SKT 인터넷 전략본부장, 인터파크 총괄 사장 등을 역임하며 국내 대표적 플랫폼 기업의 시작과 성장을 함께한 가천대학교 경영대학 이승훈 교수를 만났다. 그는 이동통신사뿐만 아니라 모든 기업이 통합형 구독 모델을 선택할 때 “그 목적을 명확하게 설정해야 한다”고 말한다.`,
        },
        quote2: {
          title: `INTERVIEW 이승훈(가천대학교 경영대학 교수)`,
          content: `글로벌 플랫폼 기업은 물론 국내 대기업들이 너도 나도 구독 전략을 선택하는 요즘. 적게는 1100만 명, 많게는 2400만 명의 고객을 보유한 국내 이동통신사도 ‘구독’을 다음 단계로의 도약을 위한 솔루션으로 점찍었다. 특히 지난해 SKT가 론칭한 통합형 구독 서비스 T우주는 출시 3개월 만에 구독자 100만이라는 성과를 냈다. 주요 혜택은 쇼핑이다. 통신과 쇼핑이라는 키워드가 선뜻 매칭되지는 않지만 SKT는 고객들이 가장 범용적으로 이용하는 혜택이 커머스라고 분석하고, 기본 혜택으로 쇼핑에 초점을 맞췄다고 밝혔다.
      
      서비스를 위해 산하의 11번가에 아마존 글로벌 스토어를 론칭했고, T우주 가입자들에게 해외 배송을 무료로 제공한다. 하지만 궁극적으로는 11번가와 아마존을 중심으로 라이프스타일을 아우르는 플랫폼으로 거듭나겠다는 게 목표다. 구글과 스타벅스, 배달의민족, GS프레시, 허닭, 야놀자 등 다양한 분야와의 제휴를 특장점으로 내세웠다. 최근에는 삼성전자와 가전 렌털 서비스를 제휴하는가하면, 모바일 게임 ‘검은사막 모바일’과도 파트너십을 맺으며 영역을 넓히는 중이다.
      
      T우주는 SKT 가입자가 아니더라도 언제든 자유로운 가입과 해지가 가능하다는 점에서 T멤버십과는 다르다. 더 나아가 구독 방법, 상품을 전문적으로 컨설팅하는 체험형 매장도 구축할 계획이다. T우주에 앞서 LG유플러스도 2021년 6월 VIP 이상 등급의 고객을 대상으로 한 구독 서비스 ‘구독콕’을 내놨다. 현재 제휴 상품은 11종. LG유플러스는 제휴 혜택이 네이버 쇼핑, 밀리의 서재, GS25 등 영역을 넘나든다는 점을 강조했다. 해당 고객은 매월 한 가지 혜택을 선택해 무료로 이용할 수 있다. 
      
      추가한 멤버십 확장판 정도로 이해하면 쉬운데, 플랫폼이나 브랜드를 신설하지 않고 상품 연계에 집중한 형태다. 전문가들은 외형 확대, 몸집 키우기가 아닌 질적 성장에 집중한다는 LG유플러스의 브랜드 방향성을 내포한 것이라고 분석한다. 김혜미 LG유플러스 제휴상품팀 책임은 “쓸만한 서비스가 많다는 입소문이 났다”며 구독콕의 성공을 점쳤다. KT는 지난해 7월 자사 OTT 플랫폼인 시즌과 할리스 커피를 연계한 제휴 구독 서비스를 론칭했으나 6개월 만에 계약 만료로 서비스를 종료했다.
      
      그 밖에 ‘구독’ 타이틀을 건 상품은 없지만 고객의 취향과 데이터를 멤버십과 연동한 서비스를 지속적으로 개발 중이다. 2021년 6월 론칭한 ‘취향을 담다’와 7월 시작한 ‘마들랜(마음에 쏙 들어오는 랜선 혜택)’이 대표적이다. 맞춤 혜택이나 상품, 특가 프로모션을 추천하고 구매까지 연계하는 식이다. 
      
      이동통신 3사가 내세운 서비스의 형태나 규모는 다르지만 ‘구독’이라는 이름하에 제 나름의 생태계를 구축하고 있는 건 분명한 사실이다. 그리고 생태계의 구성 요소가 전통적인 멤버십에서 벗어나 영역을 넓히고 있다는 것도. 지금까지 잘 굴러가던 멤버십이라는 키워드를 버리고, 왜 일제히 구독에 눈을 돌렸을까?`,
        },
        qutoe3: {
          title: "SK텔레콤 뉴스룸",
          content: `최근 출간한 <구독전쟁>에서 ‘전쟁’이란 무엇을 의미하나? 플랫폼 기업과 비플랫폼 기업 간의 고객 확보를 둘러싼 전쟁이다. 디지털 시대, 브랜드가 고객과 만날 방법은 크게 두 가지로 나뉜다. 거대 플랫폼에 올라탈 것인가, 아니면 나이키나 디즈니 플러스처럼 플랫폼에서 뛰쳐나와 고객과 직접 만날 것인가? 직접 만난다면 왜, 어떤 전략으로 접근해야 하는가? 그런 맥락에서 기업의 구독 전략이 갖는 가치와 방법을 재조명하고자 했다.
  
        ‘구독’이라는 키워드가 짧은 시간 동안 엄청나게 성장한 것처럼 느껴진다. 사실 실물경제의 관점에서 구독 서비스는 과거에 비해 다변화하고 있다. 하지만 규모가 눈에 띄게 커지진 않았다. 실제로 우리 생활에서 차지하는 비중이 미미하다고 봐도 무방할 정도다. 그러던 중 우리가 매일 마주하는 디지털 콘텐츠 시장에서 존재감을 발휘하는 몇몇 구독 상품이 등장했다. 어느날 넷플릭스라는 상품이 나타났고, 너도나도 쓰다 보니 ‘지금까지 우리가 써왔던 멜론도 구독이었네?’ 하고 구독이라는 개념을 깨닫기 시작한 거다.
        
        최근 통신업계가 뛰어들고 있는 구독 전략을 어떻게 바라보나? 사실 아주 새로운 모델은 아니다. 예전부터 통신사는 ‘멤버십’이라는 이름으로 구독 서비스와 유사한 혜택을 제공해왔다. ‘우리 통신 상품을 쓰면 영화도 할인해주고, 매달 커피 한 잔을 무료로 줄게’ 하는 식이다. 그걸 더 강화해서 구독이라는 이름으로 전환했을 뿐이다. 고객을 자사에 붙잡아둔다는 본질은 변하지 않았다. 다만 SKT의 T우주는 양상이 조금 다르다고 본다.
        
        T우주는 어떻게 다른가? 기존 통신사의 구독은 자사 고객을 대상으로 하고, 상품을 쓰는 대가로 각종 부가 혜택을 준다. 그런데 T우주는 선후 관계가 바뀌어 있다. 오히려 아마존 프라임이나 쿠팡 와우 같은 온라인 유통 플랫폼의 구독과 비슷한 형태다. 일정 금액을 지불한 뒤 소비자가 어떤 행동을 해야 무료 배송이든 제품 할인이든 혜택을 누릴 수 있다. 우주패스에 가입한 뒤 아마존에서 상품을 사야 무료 배송이라는 혜택을 얻는 것처럼. 이 경우엔 원래의 통신사 멤버십보다 더 큰 혜택을 줘야 신규 가입자 유치가 가능해진다. 
        
        T우주가 다른 통신사보다 더 많은 제휴사와 연계한 이유이기도 하겠다. 구독 전략이 성공한 사례를 보면 알 수 있다. T우주가 제휴한 아마존이 대표적이다. 아마존 프라임이라는 유료 구독 서비스를 제공하는데, 1년에 119달러를 내면 미국 내 무료 배송, 아마존 OTT 서비스, 아마존 뮤직 프라임, 게임, 책 등 여러 가지 혜택을 누릴 수 있다. 커머스 외에 새로운 콘텐츠를 개발해서 제공해야 사람들이 기꺼이 119달러를 낼 거라고 판단한 거다. T우주도 마찬가지다. 11번가, 아마존 배송 혜택만으로는 신규 가입자 유치가 쉽지 않으니까 다방면의 제휴사를 모두 엮어서 내놓았다.
        
        언뜻 들으면 기업 입장에선 굉장히 부담일 것 같다. 물론 기업 비즈니스 측면에서 봤을 때는 굉장히 어려운 선택이지만 구독 전략을 취하기 위해서는 피할 수 없는 부분이기도 하다. 그래서 <구독전쟁>에서는 이를 ‘비합리적인 수준의 가치 제공’이라고 표현했다. 소비자 입장에서 구독이란 기업이 제공하는 서비스에 속박되기를 자청하는 거다. 소비자는 현명한 존재라서 지불하는 금액 이상의 만족, 이익이 있다고 판단해야 구독을 선택한다. 고객에게 매달 4900원을 내겠다는 약속을 이끌어내기 위해서는 비합리적일 만큼의 가치를 제시해야 한다는 말이다.
        
        통신사는 구독이라는 전략을 통해 무엇을 얻을 수 있을까? 기본적으로는 고객을 붙잡아둘 수 있게 된다. 그러기 위해서는 우선 자주 만나야 하고, 우리 고객이 어떤 라이프스타일을 누리는 사람인지 알아야 한다. 그래야 지속적인 관계 맺기가 가능해진다. 통신사는 지금까지 전국에 통신망을 깔아놓고 받는 통행료(통신 요금)가 주요 수익원이었다. 플랫폼 사업자들처럼 고객의 라이프스타일을 설명할 만한 실질적인 데이터가 없었다는 말이다. 구독 서비스를 제공함으로써 우리 고객이 원하는 것, 취향에 대한 데이터를 얻을 수 있다면 이후에 다른 사업으로의 확장, 전환에 훨씬 유리해질 거라고 본다.
        
        미래의 새로운 수익 모델로 볼 수도 있을까? 통신업계가 선택하는 멤버십 형태의 구독 서비스는 그 자체로 수익 모델이 될 수 없다. 고객과의 관계 유지를 위한 도구일 뿐 매출은 통신업이라는 기존 사업에서 얻어야 한다. 새로운 사업 모델로의 변신은 고객과 매출 확보가 안정적으로 이뤄지고 나면 그 이후에 생각해볼 문제다. 그래서 <구독전쟁>에서 기업의 구독 전략을 두고 ‘앞으로 밑지고 뒤로 번다’고 썼다.
        
        구독 모델을 선택하는 기업이 경계해야 할 점은 무엇이라고 생각하나? 앞서 말한 온라인 유통 플랫폼은 점점 몸집을 키워서 기업의 영역을 파고들 거다. 그렇기 때문에 독립적인 구독 서비스는 모든 기업이 하고 싶어 하고, 또 시도해볼 가치가 있다고 생각한다. 하지만 현재 대부분의 기업이 수익이 눈에 보이는 정기구매 모델을 만들고자 한다는 데 문제가 있다. 
        
        고객과의 관계 재정립이 우선돼야 한다. 구독 전략의 목적 자체를 다시 설정해야 한다는 말이다. 수익을 위할 것이냐 장기적인 고객 커뮤니케이션을 위할 것이냐. 브랜드와 구독을 통해 지속적으로 관계 맺는 소비자가 많아질수록 더 의미 있는 도전과 확장이 가능해진다.`,
        },
      },
    ],

    image: "https://picsum.photos/470",
    hashTag: [
      "소비",
      "제휴",
      "트렌드",
      "통신사",
      "경제",
      "구독",
      "커머스",
      "라이프스타일",
      "이커머스",
      "구독서비스",
      "혜택",
      "마케팅",
      "통신사구독",
    ],
    like: 0,
    relation: [
      { title: "삶을 변화시키는 구독의 미래", image: "https://picsum.photos/470" },
      { title: "삶을 변화시키는 구독의 미래", image: "https://picsum.photos/470" },
      { title: "삶을 변화시키는 구독의 미래", image: "https://picsum.photos/470" },
      { title: "삶을 변화시키는 구독의 미래", image: "https://picsum.photos/470" },
    ],
  },
];

const BreadCrumb = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #bfbfbf;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: #9f9f9f;

    &:last-of-type {
      color: #191919;

      ::after {
        content: none;
      }
    }

    &::after {
      content: "";
      display: block;
      width: 14px;
      height: 14px;
      margin-left: 6px;
      background-image: url("/assets/arrow-right.svg");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

const WrapperContent = styled.article`
  width: 100%;
  max-width: ${props => props.width || "100%"};
  margin-top: 50px;
`;

const ContentHeader = styled.div`
  color: #191919;
  h3 {
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: bold;
  }
  p {
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 30px;
  }
`;

const SmallText = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: normal;
  color: #9f9f9f;

  b {
    display: block;
    font-weight: bold;
    width: 100px;
  }
`;

const ContentDetail = styled.div`
  margin-top: 80px;
  font-size: 18px;
  line-height: 30px;

  div {
    margin-top: 50px;
  }
`;

const ContentFooter = styled.div`
  margin-top: 100px;
  border-bottom: 1px solid #9f9f9f;
`;

const HashTag = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 10px;

  li {
    padding: 6px 8px;
    border: 2px solid #bfbfbf;
    border-radius: 4px;
    font-size: 12px;
    color: #9f9f9f;

    &:hover {
      background-color: #ebebeb;
      color: #171717;
    }
  }
`;

const StatusIcon = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 20px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  ul {
    display: flex;
    gap: 20px;
  }

  img {
    width: 26px;
    height: 26px;
  }
`;

const ListButton = styled.div`
  margin: 70px 0;

  button {
    display: block;
    margin: auto;
    padding: 14px 58px;
    border-radius: 0.5rem;
    border: 2px solid #333;
    background-color: #333;
    font-size: 16px;
    font-weight: bold;
    color: #fff;

    &:hover {
      background-color: #eee;
      color: #171717;
    }
  }
`;

const MoreContent = styled.div`
  width: 100%;
  max-width: 1320px;

  h4 {
    margin: 20px 0;
    font-size: 28px;
    font-weight: bold;
  }

  ul {
    display: flex;
    gap: 40px;
  }

  img {
    width: 290px;
    height: 290px;
  }

  figcaption {
    margin-top: 20px;
    font-size: 24px;
  }
`;

function LifeStyleDetail(props) {
  const { pathname } = useLocation();
  let params = useParams();

  console.log(params.contentId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <WrapperSection>
      <h2 className="blind">Lifestyle</h2>
      <SectionWrapper width="1280px" padding="100px 0 145px">
        <WrapperDiv justifyContent="flex-start">
          <BreadCrumb>
            <ul>
              <li>
                <Link to={""}>home</Link>
              </li>
              <li>
                <Link to={""}>lifestyle</Link>
              </li>
              <li>
                <Link to={""}>trend</Link>
              </li>
            </ul>
          </BreadCrumb>
          <WrapperContent>
            {DUMMY_DATA.map((data, index) => (
              <div key={data.id}>
                <ContentHeader>
                  <h3>{data.title}</h3>
                  <p>{data.subTitle}</p>
                  <p>{data.auth}</p>
                </ContentHeader>
                <ContentDetail>
                  {data.quote.map(data => (
                    <p>{data.quote1.content}</p>
                  ))}
                </ContentDetail>
                <ContentFooter>
                  <div>
                    <p>
                      <SmallText>
                        <b>자료제공</b> {DUMMY_DATA.reference}
                      </SmallText>
                    </p>
                  </div>
                  <HashTag>
                    {data.hashTag.map(data => (
                      <li>{data}</li>
                    ))}
                  </HashTag>
                  <StatusIcon>
                    <div>
                      <button type="button">
                        <img src="/assets/icon-like.svg" alt="like" />
                      </button>
                      <p>{data.like}</p>
                    </div>
                    <ul>
                      <li>
                        <Link to={""}>
                          <img src="/assets/icon-share.svg" alt="share" />
                          <span className="blind">share</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={""}>
                          <img src="/assets/icon-twitter.svg" alt="twitter" />
                          <span className="blind">twitter</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={""}>
                          <img src="/assets/icon-kakaotalk.svg" alt="kakaotalk" />
                          <span className="blind">kakaotalk</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={""}>
                          <img src="/assets/icon-facebook.svg" alt="facebook" />
                          <span className="blind">facebook</span>
                        </Link>
                      </li>
                    </ul>
                  </StatusIcon>
                </ContentFooter>
                <ListButton>
                  <button type="button">목록보기</button>
                </ListButton>
                <MoreContent>
                  <h4>같이보면 좋은 기사</h4>
                  <ul>
                    <li>
                      <figure>
                        <img src={data.image} alt={data.title} />
                        <figcaption>{data.title}</figcaption>
                      </figure>
                    </li>
                  </ul>
                </MoreContent>
              </div>
            ))}
          </WrapperContent>

          {/* <WrapperContent width="840px">
            <ContentHeader>
              <h3>통신업계의 구독 대통합</h3>
              <p>
                이동통신 3사가 일제히 구독을 주목하기 시작했다. 이들이 내놓은 통합형 구독 서비스는
                성공적으로 안착할 수 있을까?
              </p>
              <p>
                <SmallText>BY 에디터 송혜민 | 2022.02.25</SmallText>
              </p>
            </ContentHeader>

            <ContentDetail>
              {DUMMY_DATA.content.map(el => (
                <div key={el.id}>
                  <p>{el.content}</p>
                </div>
              ))}
            </ContentDetail>

            <ContentFooter>
              <div>
                <p>
                  <SmallText>
                    <b>자료제공</b> {DUMMY_DATA.reference}
                  </SmallText>
                </p>
              </div>
              <HashTag>
                {DUMMY_DATA.hashtag.map((tag, idx) => (
                  <li key={idx}>{tag}</li>
                ))}
              </HashTag>

              <StatusIcon>
                <div>
                  <button type="button">
                    <img src="/assets/icon-like.svg" alt="like" />
                  </button>
                  <p>{DUMMY_DATA.like}</p>
                </div>

                <ul>
                  <li>
                    <Link to={""}>
                      <img src="/assets/icon-share.svg" alt="share" />
                      <span className="blind">share</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <img src="/assets/icon-twitter.svg" alt="twitter" />
                      <span className="blind">twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <img src="/assets/icon-kakaotalk.svg" alt="kakaotalk" />
                      <span className="blind">kakaotalk</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <img src="/assets/icon-facebook.svg" alt="facebook" />
                      <span className="blind">facebook</span>
                    </Link>
                  </li>
                </ul>
              </StatusIcon>
            </ContentFooter>

            <ListButton>
              <button type="button">목록보기</button>
            </ListButton>
          </WrapperContent> */}
        </WrapperDiv>

        {/* <MoreContent>
          <h4>같이보면 좋은 기사</h4>
          <ul>
            {DUMMY_DATA.relation.map((el, idx) => (
              <li key={idx}>
                <figure>
                  <img src={el.image} alt={el.title} />
                  <figcaption>{el.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </MoreContent> */}
      </SectionWrapper>
    </WrapperSection>
  );
}

export default LifeStyleDetail;
