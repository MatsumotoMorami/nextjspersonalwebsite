import { ReactNode, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function BlogComponentSet() {
    const blogListData = [
        {
            id: 1,
            imageSrc: "/avatar/ava.jpg",
            title: "123",
            description: "456",
            type: ["notes"]
        },
        {
            id: 2,
            imageSrc: "/avatar/ava.jpg",
            title: "abc",
            description: "qwe",
            type: ["jottings"]
        },
        {
            id: 3,
            imageSrc: "/avatar/ava.jpg",
            title: "明日方舟",
            description: "iop",
            type: ["notes"]
        },
        {
            id: 4,
            imageSrc: "/avatar/ava.jpg",
            title: "舞萌DX",
            description: ",./",
            type: ["notes"]
        },
        {
            id: 5,
            imageSrc: "/avatar/ava.jpg",
            title: "321",
            description: "cvb",
            type: ["jottings"]
        },
        {
            id: 6,
            imageSrc: "/avatar/ava.jpg",
            title: "nop",
            description: "jkl",
            type: ["jottings"]
        },
    ]
    const [searchQuery, setSearchQuery] = useState("");
    const [filterData, setFilterData] = useState(blogListData);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = blogListData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        setFilterData(filtered);
    };

    return (
        <div className="pt-32 mx-[15vw] absolute">
            <HeadPicture imageSrc="/avatar/ava.jpg"></HeadPicture>
            <ul>
                {filterData.map(item => (
                    <ArticleCard key={uuidv4()}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                    />
                ))}
            </ul>
        </div>
    );
}

export function ArticleCard({ imageSrc, title, description, id }: { imageSrc: string, title: string, description: string, id: number }) {
    return (
        <div key={id.toString()} id={id.toString()} className="bg-black bg-opacity-50 rounded-3xl shadow-2xl overflow-hidden flex items-stretch h-[40vh] w-[70vw] my-6">
            <div className="w-1/4">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-l-lg" />
            </div>
            <div className="w-3/4 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2 titletextforblog">{title}</h2>
                <p className="text-gray-600 text-base introtextforblog">{description}</p>
            </div>
        </div>
    );
};


export function HeadPicture({ imageSrc }: { imageSrc: string }) {
    return (
        <div className="w-[70vw] h-[60vh]" >
            <img className="rounded-3xl shadow-lg object-cover w-full h-full" src={imageSrc}></img>
        </div>
    );
};

const icon = {
    articles: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>,
    diarys: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>,
    jottings: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>,
    notes: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
}

export function BlogListComponentSet() {

}

export function BlogListCard({ title, svg }: { title: ReactNode, svg: ReactNode }) {
    return (
        <div className="w-[25vw] h-[30vh] rounded-3xl bg-purple-400 bg-opacity-50">
            {title}
            {svg}
        </div>
    )
}