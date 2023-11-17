const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export type MemberData = {
  name: string;
  location: string;
  bio: string;
  followers: number;
  posts: number;
  company: string;
  education: string;
  connections: number;
  bgImage: string;
  avatar: string;
};

type Data = {
  [key: string]: MemberData;
};

const DATA: Data = {
  'olia-dovbush': {
    name: 'Olha Dovbush',
    location: 'Ukraine',
    bio: '🚀 Frontend Developer | React Expert | Creating Engaging User Experiences',
    followers: 1106,
    posts: 5,
    company: 'Jito',
    education: "The National Academy of the Prosecutor's office of Ukraine",
    connections: 500,
    bgImage: '/assets/images/member-bg-image.jpeg',
    avatar: '/assets/images/member-avatar.jpg',
  },
  'anastasiia-hordieieva': {
    name: 'Anastasiia Hordieieva',
    location: 'Kiev, Ukraine',
    bio: 'Frontend Developer (React/Next).',
    followers: 1276,
    posts: 52,
    company: 'Launch Labs',
    education: '',
    connections: 500,
    bgImage: '',
    avatar: '',
  },
};

export async function getMemberInfo(memberName: string) {
  await delay(Math.random() * 200 + 400);

  return DATA[memberName];
}
