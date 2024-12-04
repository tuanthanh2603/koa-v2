"use client"
const posts = [
    {
        id: 1,
        title: 'Tên bài viết',
        href: '#',
        description:
            'Mô tả ngắn về bài viết',
        imageSrc: "https://sbshouse.vn/wp-content/uploads/2024/10/cong-tac-thi-cong-ron-nen.jpg"
    },
    {
        id: 2,
        title: 'Tên bài viết',
        href: '#',
        description:
            'Mô tả ngắn về bài viết',
        imageSrc: "https://sbshouse.vn/wp-content/uploads/2024/10/cong-tac-thi-cong-ron-nen.jpg"
    },
    {
        id: 3,
        title: 'Tên bài viết',
        href: '#',
        description:
            'Mô tả ngắn về bài viết',
        imageSrc: "https://sbshouse.vn/wp-content/uploads/2024/10/cong-tac-thi-cong-ron-nen.jpg"
    },
]
export default function Knowledge() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Kiến thức</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Đối với khách hàng, chúng tôi luôn tận tâm tạo ra những giá trị cho Quý khách hàng thân yêu.</p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                           
                            <div className="group">
                                <img
                                    alt={post.imageAlt}
                                    src={post.imageSrc}
                                    className="w-full rounded-md bg-gray-200 object-cover mt-3"
                                />
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                   
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}