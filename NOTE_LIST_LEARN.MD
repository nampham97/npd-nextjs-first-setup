### getStaticProps Only happens once at build time.

Có nghĩa là chỉ chạy 1 lần lúc build. fixed data. HTML showing data.
Ví dụ. HTML có các text static cần load 1 lần lúc khởi chạy.

### SERVER SIDE RENDERING

//SSR - Render mỗi request. Gắn tại pages/index.js
export async function getServerSideProps(context) {
return {
props: {
// props for your component
},
};
}

### Client Side Rendering

Recommend hook nextjs

import useSWR from 'swr';

function Profile() {
const { data, error } = useSWR('/api/user', fetch);

if (error) return <div>failed to load</div>;
if (!data) return <div>loading...</div>;
return <div>hello {data.name}!</div>;
}
