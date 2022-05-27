import introduce from '../assets/images/introduce.jpg';
import gridaboard from '../assets/images/gridaboard.jpg';
import webPenSdk from '../assets/images/webPenSdk.jpg';

let ko = {
  name: 'Minho Choi',
  position: 'Front-End Developer',
  email: 'exit19093@gmail.com',
  phone: '010-2895-1359',
  github: 'https://github.com/mminhou',
  npm: 'https://www.npmjs.com/~mminhou',
  portfolio: {},
  introduce:
    '끊임없이 신기술, 트렌드에 주목하며 공부하는 1년차 개발자 최민호입니다. 주로 웹 Front-end 개발을 담당했으며, Javascript 및 브라우저에 대한 지식을 활용하여 사용하기 쉽고 빠른 웹페이지를 만들기위해 노력하고 있습니다. \n\n클린코드를 지향합니다. 특히 협업을 함에 있어 깨끗한 코드 작성은 매우 중요하다고 생각합니다. 처음 코드를 작성하는 순간부터 커밋을 올릴 때까지 매 순간마다 클린코드를 만들기 위해 수많은 고민과 확인 과정을 거칩니다. 작업을 하며 불필요한 코드 추가가 발생하지 않도록 마지막의 마지막까지 점검한 후 코드를 올립니다. 항상 어디에 내놓아도 부끄럽지 않은 수준의 완성도 높은 코드를 작성하기 위해 끝없이 노력하고 있습니다.\n\n사용자의 입장에서 생각하기 위해 노력합니다. 단순히 프론트엔드 개발자의 입장에서 머무르지 않고, 사용자의 입장에서 이해하기 쉽고 편리하게 이용할 수 있는 서비스를 만들기 위해 고민합니다. 개발자도 사용자도 모두 만족할 만한 수준으로 고도화된 성능과 효율적인 UX가 조화된 웹 페이지를 만드는 것이 저의 목표입니다.',
  university: {
    name: '상명대학교',
    comment: '서울캠퍼스, 2014 ~ 2021',
    major: '컴퓨터과학전공',
  },
  company: [
    {
      id: 'neolab',
      name: '(주)네오랩컨버전스',
      location: '서울특별시, 한국',
      homepage: 'https://www.neolab.kr/',
      period: '2021. 11. ~ ',
      position: 'Front-End developer',
      caption: '디지털과 아날로그의 장점이 결합된 스마트펜 제조 및 서비스 세계 1위 기업.',
      project: [
        {
          id: 'webNeoStudio',
          title: 'WebNeoStudio',
          url: 'https://app.neostudio.io/',
          period: '2022. 05. ~',
          skills: 'Typescript, ReactJS, React-router-dom, React-Redux, WebSocket',
          captions: ['자사 cloud 서비스와의 연동을 위한 Web socket client 및 UX 개발'],
          images: [introduce, gridaboard, webPenSdk],
        },
        {
          id: 'webPenSdk',
          title: 'WebPenSDK',
          url: 'https://github.com/neostudio-team/webPenSDK',
          period: '2022. 04. ~ 2022. 04.',
          skills: 'Typescript, ReactJS, React-router-dom, FabricJS, Webpack, Babel, Firebase, MaterialUI',
          captions: ['자사 스마트펜을 위한 오픈소스인 WebPenSDK 업데이트', 'PenSDK를 활용한 외부 공개용 샘플 페이지 작성', 'WebPenSDK guide document 작성'],
          images: [introduce, gridaboard, webPenSdk],
        },
        {
          id: 'gridaboard',
          title: 'GridaBoard v2.0.1',
          url: 'https://gridaboard.io/',
          period: '2021. 12. ~ 2022. 03.',
          skills: 'Typescript, ReactJS, React-router-dom, React-Redux, FabricJS, Firebase, MaterialUI',
          captions: ['자사 블루투스 스마트펜을 위한 그래픽 서비스인 GridaBoard v2 업데이트', "‘펜 제스처' 기능 개발 및 인식 개선 알고리즘 작성", 'GridaBoard 각종 페이지 UX/UI 개선'],
          images: [introduce, gridaboard, webPenSdk],
        },
      ],
    },
  ],
  personal: [
    {
      id: 'introduce',
      title: 'Introduce',
      url: 'https://mminhou.github.io/introduce/',
      period: '2021. 11. ~ ',
      projectGithub: 'https://github.com/mminhou/introduce',
      caption: "MINHO CHOI's web developer portfolio site",
      skills: 'Typescript, ReactJS, React-router-dom, React-Redux, ThreeJS, Wabpack, Babel, ESlint, Prettier, MaterialUI',
      captions: ['Webpack, bable, eslint, prettier을 활용한 프로젝트 구성', 'Typescript, React Hook 기반으로 apllication 로직 작성', 'ThreeJS를 적용한 3D animation 효과 추가'],
    },
    {
      id: 'theSalt',
      title: 'The Salt',
      url: 'http://the-salt.co.uk/',
      period: '2021. 08. ~ 2021. 10.',
      projectGithub: 'https://github.com/mminhou/thesalt',
      caption: 'Django Rest API와 ReactJs, Redux-Saga를 적용한 쇼핑몰 사이트',
      skills: 'Python, DjangoRestFramework, Javascript, ReactJS, Redux-Saga, MaterialUI, AWS EC2, AWS S3',
      captions: [
        'Python, Django, Djangorestframework를 활용한 REST API 개발',
        'Redux-saga를 이용한 API 통신 밒 비동기 상태관리',
        'device size 기반 responsible UI 구축',
        'AWS EC2/S3을 활용한 project deploy',
      ],
    },
  ],
};

export default ko;
