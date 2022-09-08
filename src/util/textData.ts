import neostudio1 from '../assets/images/neostudio1.jpg';
import neostudio2 from '../assets/images/neostudio2.jpg';
import neostudio3 from '../assets/images/neostudio3.jpg';

import pensdk1 from '../assets/images/pensdk1.jpg';
import pensdk2 from '../assets/images/pensdk2.jpg';

import gridaboard1 from '../assets/images/gridaboard1.jpg';
import gridaboard2 from '../assets/images/gridaboard2.jpg';
import gridaboard3 from '../assets/images/gridaboard3.jpg';

import introduce from '../assets/images/introduce.jpg';
import theSalt from '../assets/images/theSalt.jpg';

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
  education: [
    {
      name: '상명대학교',
      period: '2014. 3 ~ 2021. 8',
      description: '컴퓨터과학전공 학사 졸업',
    },
    {
      name: '청량고등학교',
      period: '2009. 3 ~ 2012. 3',
      description: '자연계 졸업 (서울특별시 동대문구)',
    },
  ],
  company: [
    {
      id: 'neolab',
      name: '네오랩컨버전스(주)',
      location: '서울특별시, 한국',
      homepage: 'https://www.neolab.kr/',
      period: '2021. 11 ~ ',
      position: '웹/앱 서비스 프론트엔드 개발자',
      caption: '아날로그 데이터를 디지털로 변환하는 스마트펜 제조 및 서비스 세계 1위 기업',
      description: [
        '네오랩컨버전스 웹 서비스 프론트엔드 개발',
        '신제품 런칭에 따른 기획과 신규 비지니스 로직 구현',
        '서버 이전에 따른 기존 비지니스 로직 리팩토링',
        '사용자 Needs에 맞는 사용성 개선을 위한 UX/UI 업데이트',
      ],
      project: [
        {
          id: 'neostudio',
          title: 'WebNeoStudio',
          url: 'https://app.neostudio.io/',
          period: '2022. 05. ~',
          skills: 'Typescript, ReactJS, React-router-dom, React-Redux, WebSocket',
          captions: ['네오랩 cloud 서비스와의 연동을 위한 web socket client 개발', 'Crop을 활용한 클립보드 copy 기능 개발', 'Web socket 관련 UX 개발', '다크모드, 다국어 작업'],
          images: [neostudio1, neostudio2, neostudio3],
        },
        {
          id: 'pensdk',
          title: 'WebPenSDK',
          url: 'https://github.com/neostudio-team/webPenSDK',
          period: '2022. 04. ~ 2022. 04.',
          skills: 'Typescript, ReactJS, React-router-dom, FabricJS, Webpack, Babel, Firebase, MaterialUI',
          captions: ['네오랩 스마트펜을 위한 오픈소스인 WebPenSDK 업데이트', 'PenSDK를 활용한 외부 공개용 샘플 페이지 작성', 'WebPenSDK guide document 작성'],
          images: [pensdk1, pensdk2],
        },
        {
          id: 'gridaboard',
          title: 'GridaBoard v2.0.1',
          url: 'https://gridaboard.io/',
          period: '2021. 12. ~ 2022. 03.',
          skills: 'Typescript, ReactJS, React-router-dom, React-Redux, FabricJS, Firebase, MaterialUI',
          captions: ['네오랩 블루투스 스마트펜을 위한 그래픽 서비스인 GridaBoard v2 업데이트', "‘펜 제스처' 기능 개발 및 인식 개선 알고리즘 작성", 'GridaBoard 각종 페이지 UX/UI 개선'],
          images: [gridaboard1, gridaboard2, gridaboard3],
        },
      ],
    },
  ],
  project: [
    {
      id: 'neostudio',
      title: 'WebNeoStudio',
      company: '네오랩컨버전스(주)',
      url: 'https://app.neostudio.io/',
      period: '2022. 05 ~ 2022. 09',
      github: '',
      caption: '그래픽 서비스 NeoStudio 서비스 기능 개발',
      skills: ['Typescript', 'ReactJS', 'React-router-dom', 'React-Redux', 'FabricJS', 'WebSocket', 'MaterialUI'],
      description: [
        '네오랩 클라우드 서비스와의 연동을 위한 Web Socket Client 개발',
        'Web Socket 관련 UI/UX 업데이트',
        'Crop을 활용한 클립보드 copy 기능 개발',
        '편집기능(그리기, 지우기, redo, undo) 개발',
        '다크모드, 다국어 처리 구현',
      ],
      images: [neostudio1, neostudio2, neostudio3],
    },
    {
      id: 'pensdk',
      title: 'WebPenSDK',
      company: '네오랩컨버전스(주)',
      url: 'https://github.com/neostudio-team/webPenSDK',
      period: '2022. 04 ~',
      github: '',
      caption: '스마트펜 서비스를 위한 오픈소스 WebPenSDK 업데이트',
      skills: ['Typescript', 'ReactJS', 'React-router-dom', 'FabricJS', 'Webpack', 'Babel', 'Firebase', 'MaterialUI'],
      description: ['펜 설정 관련 로직 수정 및 npm 퍼블릭 배포', 'PenSDK를 활용한 외부 공개용 샘플 페이지 개발', 'WebPenSDK guide document 작성'],
      images: [pensdk1, pensdk2],
    },
    {
      id: 'gridaboard',
      title: 'GridaBoard v2.0.1',
      company: '네오랩컨버전스(주)',
      url: 'https://gridaboard.io/',
      period: '2021. 12 ~ 2022. 03',
      github: '',
      caption: '제품 런칭에 따른 그래픽 서비스 GridaBoard v2 업데이트',
      skills: ['Typescript', 'ReactJS', 'React-router-dom', 'React-Redux', 'FabricJS', 'Firebase', 'MaterialUI'],
      description: ['스마트 플레이트를 사용하기 위한 GridaBoard v2 업데이트', "‘펜 제스처' 기능 개발 및 인식 개선 알고리즘 작성", 'GridaBoard 내 각종 페이지 UX/UI 개선'],
      images: [gridaboard1, gridaboard2, gridaboard3],
    },
    {
      id: 'introduce',
      title: 'Introduce',
      company: 'Personal',
      url: 'https://mminhou.github.io/introduce/',
      period: '2021. 11 ~ 2021. 12',
      github: 'https://github.com/mminhou/introduce',
      caption: "MINHO CHOI's web developer portfolio site",
      skills: ['Typescript', 'ReactJS', 'React-router-dom', 'React-Redux', 'ThreeJS', 'Wabpack', 'Babel', 'ESlint', 'Prettier', 'MaterialUI'],
      description: ['Webpack, bable, eslint, prettier을 활용한 프로젝트 구성', 'Typescript, React Hook 기반으로 apllication 로직 작성', 'ThreeJS를 적용한 3D 컴포넌트 구현'],
      images: [introduce],
    },
    {
      id: 'theSalt',
      title: 'The Salt',
      company: 'Personal',
      url: 'http://the-salt.co.uk/',
      period: '2021. 08 ~ 2021. 10',
      github: 'https://github.com/mminhou/thesalt',
      caption: '의류를 보고 구매할 수 있는 쇼핑몰 사이트 개발',
      skills: ['Python', 'DjangoRestFramework', 'Javascript', 'ReactJS', 'Redux-Saga', 'MaterialUI', 'AWS EC2', 'AWS S3'],
      description: [
        'Python, Django, Djangorestframework를 활용한 REST API 개발',
        'Redux-saga를 이용한 API 통신 밒 비동기 상태관리',
        'device size 기반 responsible UI 구축',
        'AWS EC2/S3을 활용한 project deploy',
      ],
      images: [theSalt],
    },
  ],
  personal: [
    {
      id: 'introduce',
      title: 'Introduce',
      url: 'https://mminhou.github.io/introduce/',
      period: '2021. 11. ~ 2021. 12',
      github: 'https://github.com/mminhou/introduce',
      caption: "MINHO CHOI's web developer portfolio site",
      skills: 'Typescript, ReactJS, React-router-dom, React-Redux, ThreeJS, Wabpack, Babel, ESlint, Prettier, MaterialUI',
      captions: ['Webpack, bable, eslint, prettier을 활용한 프로젝트 구성', 'Typescript, React Hook 기반으로 apllication 로직 작성', 'ThreeJS를 적용한 3D animation 효과 추가'],
      images: [introduce],
    },
    {
      id: 'theSalt',
      title: 'The Salt',
      url: 'http://the-salt.co.uk/',
      period: '2021. 08. ~ 2021. 10.',
      github: 'https://github.com/mminhou/thesalt',
      caption: '의류를 보고 구매할 수 있는 쇼핑몰 사이트 개발',
      skills: 'Python, DjangoRestFramework, Javascript, ReactJS, Redux-Saga, MaterialUI, AWS EC2, AWS S3',
      captions: [
        'Python, Django, Djangorestframework를 활용한 REST API 개발',
        'Redux-saga를 이용한 API 통신 밒 비동기 상태관리',
        'device size 기반 responsible UI 구축',
        'AWS EC2/S3을 활용한 project deploy',
      ],
      images: [theSalt],
    },
  ],
};

export default ko;
