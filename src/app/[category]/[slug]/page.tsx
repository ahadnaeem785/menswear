import SlugPage from './slugPage';

export default function Page({ params }: { params: { slug: string  } }) {
    // console.log(params.slug)
    return (
        <div className='mb-[120px] max-w-screen-2xl mx-auto lg:px-14 px-6'>
            <SlugPage params={params} />
        </div>
    )
}
