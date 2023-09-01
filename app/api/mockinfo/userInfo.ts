export default {
    data: {
        basicInfo: {
            name: 'Kaisheng Wang',
            career: 'Software Developer',
            avatar: './user/avatar.jpg', // 头像
            snapshot: '', // 生活照
            bio: 'After all this time? Always.',
        },
        contactInfo: {
            email: 'kwang024@e.ntu.edu.sg',
            website: 'https://kasyn.one',
            phone: '80676332',
            countryCode: '65',
            city: 'Singapore',
        },
        socials: [
            {
                social: 'github',
                account: '@KasynDev',
                link: 'https://github.com/KasynDev',
            },
            {
                social: 'wechat',
                account: '@wechat_code',
                qrcode: './user/wechat_qrcode.jpg',
            },
            {
                social: 'linkedin',
                account: '@yourlinkedin',
                link: 'https://linkedin.com/youraccount',
            },
        ],
        languages: [
            { language: 'Chinese', level: 'native' },
            { language: 'English', level: 'Fluent' },
            // { language: 'Teochew', level: 'Proficient' },
            { language: 'Cantonese', level: 'Beginner' },
        ],
        hobbies: [
            { hobby: 'Coding', type: 'coding' },
            { hobby: 'Gaming', type: 'game' },
            // { hobby: 'Travelling', type: 'travel' },
            // { hobby: 'Photography', type: 'photography' },
            { hobby: 'Badminton', type: 'badminton' },
            // { hobby: 'Design', type: 'design' },
            { hobby: 'Music', type: 'music' },
        ],
    },
    status: 0,
}
