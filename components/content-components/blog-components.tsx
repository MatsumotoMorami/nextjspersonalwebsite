export default function BlogComponentSet() {
    return (
        <div className="pt-32 mx-[15vw] absolute">
            <HeadPicture imageSrc="/avatar/ava.jpg"></HeadPicture>
            <ArticleCard
                imageSrc="/avatar/ava.jpg"
                title="123"
                description="345"></ArticleCard>
            <ArticleCard
                imageSrc="/avatar/ava.jpg"
                title="123"
                description="345"></ArticleCard>
            <ArticleCard
                imageSrc="/avatar/ava.jpg"
                title="123"
                description="345"></ArticleCard>
            <ArticleCard
                imageSrc="/avatar/ava.jpg"
                title="123"
                description="345"></ArticleCard>
        </div>
    )
}

export function ArticleCard({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) {
    return (
        <div className="bg-black bg-opacity-50 rounded-3xl shadow-lg overflow-hidden flex items-stretch h-[40vh] w-[70vw] my-6">
            <div className="w-1/4">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-l-lg" />
            </div>
            <div className="w-3/4 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2 titletext">{title}</h2>
                <p className="text-gray-600 text-base introtext">{description}</p>
            </div>
        </div>
    );
};


export function HeadPicture({ imageSrc }: { imageSrc: string }) {
    return (
        <div className="w-[70vw] h-[60vh]" >
            <img className="rounded-3xl shadow-lg object-cover w-full h-full" src="/avatar/ava.jpg"></img>
        </div>
    );
};