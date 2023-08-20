import Image from 'next/image';
import Link from 'next/link';

function namdz() {
    return (
        <>
            <Image
                src="/images/profile.jpg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />
            <h2>
                <Link href="/posts/first-post">Back to post</Link>
            </h2>
        </>


    )
}

export default namdz